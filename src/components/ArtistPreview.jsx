import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { lastfmStatic} from "../enums";
import { Container, Row, Col } from 'react-bootstrap';

export const ArtistPreview = ({image, name, playCount, listeners}) => {
    return (
        <Container style={{paddingBottom: "1rem"}}>
            <Row className="justify-content-md-center">
                <Col xs={1}>
                    <LazyLoadImage src={image} alt={name} width="64" height="64"/>
                </Col>
                <Col xs={2}>
                    <p>Artist</p>
                    <p>{name}</p>
                </Col>
                <Col xs={2}>
                    <p>listeners: {playCount}</p>
                    <p>playcount: {listeners}</p>
                </Col>
            </Row>
        </Container>
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
