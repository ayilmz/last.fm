import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { lastfmStatic} from "../enums";

export const ArtistPreview = ({image, name, playCount, listeners}) => {
    return (
        <div style={{paddingBottom: "1rem"}}>
            <LazyLoadImage src={image} alt={name} width="64" height="64"/>
            <div>
                <p>{name}</p>
                <p>{playCount}</p>
                <p>{listeners}</p>
            </div>
        </div>
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
