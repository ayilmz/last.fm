import React from 'react';
import PropTypes from 'prop-types';

export const ArtistPreview = ({image, name, playCount, listeners}) => {
    return (
        <div style={{paddingBottom: "1rem"}}>
            <img src={image} alt={name} width="64" height="64"/>
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
    image: "https://comnplayscience.eu/app/images/notfound.png"
}
