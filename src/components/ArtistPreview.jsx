import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { lastfmStatic} from "../enums";
import { Container, Row, Col } from 'react-bootstrap';
import {StyledContainer, Title, Name, Listeners, PlayCount} from './ArtistPreviewStyle'

export const ArtistPreview = ({image, name, playCount, listeners}) => {
    return (
        <StyledContainer>
            <Container className="p-0">
                <Row className="justify-content-center align-items-center">
                    <Col xs={3}>
                        <LazyLoadImage src={image} alt={name} width="64" height="64"/>
                    </Col>
                    <Col xs={4}>
                        <Title>Artist</Title>
                        <Name>{name}</Name>
                    </Col>
                    <Col xs={5}>
                        <Listeners>
                            {lastfmStatic.LISTENERS}: {playCount}
                        </Listeners>
                        <PlayCount>
                            {lastfmStatic.PLAYCOUNT}: {listeners}
                        </PlayCount>
                    </Col>
                </Row>
            </Container>
        </StyledContainer>
    );
};

ArtistPreview.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    playCount: PropTypes.string.isRequired,
    listeners: PropTypes.string.isRequired,
};

ArtistPreview.defaultProps = {
    image: lastfmStatic.NOT_FOUND_IMAGE
}
