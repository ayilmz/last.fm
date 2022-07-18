import React from 'react';
import PropTypes from 'prop-types';

export const ArtistDetailCard = ({data}) => {
    return (
        <ul>
            {data?.map((topAlbum, index) => (
                <li style={{paddingBottom: "1rem"}} key={index}>
                    <img src={topAlbum.image[1]["#text"]} alt={topAlbum.name} width="64" height="64"/>
                    <div>
                        <p>{topAlbum.name}</p>
                        <p>{topAlbum.playcount}</p>
                        <p>{topAlbum.listeners}</p>
                    </div>
                </li>
            )) }
        </ul>
    );
};

ArtistDetailCard.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.array,
            name: PropTypes.string.isRequired,
            playcount: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]).isRequired,
            listeners: PropTypes.string,
        })
    )
};

ArtistDetailCard.defaultProps = {
    data:[{
        image: "https://comnplayscience.eu/app/images/notfound.png"
    }]
};
