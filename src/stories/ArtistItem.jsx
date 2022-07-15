import React from 'react';
import PropTypes from 'prop-types';

export const ArtistItem = ({image, name, playCount, listeners}) => {
    return (
        <div>
            <img src={image} alt={name} width="64" height="64"/>
            <p>{name}</p>
            <p>{playCount}</p>
            <p>{listeners}</p>
        </div>
    );
};

ArtistItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    playCount: PropTypes.string.isRequired,
    listeners: PropTypes.string.isRequired,
};

ArtistItem.defaultProps = {
    image: "https://comnplayscience.eu/app/images/notfound.png"
}
