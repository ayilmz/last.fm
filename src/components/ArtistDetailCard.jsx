import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {imageControl} from "../utils";
import { lastfmStatic} from "../enums";

export const ArtistDetailCard = ({data}) => {
    return (
        <ul>
            {data?.map((item, index) => {
                const { image, name, playcount, listeners, artist } = item;
                return(
                    <li key={index}>
                        <LazyLoadImage src={imageControl(image[1]["#text"])} alt={name} width="64" height="64"/>
                        <div>
                            <p>{artist.name}</p>
                            <p>{name}</p>
                            <p>{playcount} {lastfmStatic.PLAYCOUNT}</p>
                            {listeners && (
                                <p>{listeners} {lastfmStatic.LISTENERS}</p>
                            )}
                        </div>
                    </li>
                );
            }) }
        </ul>
    );
};

ArtistDetailCard.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.array.isRequired,
            name: PropTypes.string.isRequired,
            playcount: PropTypes.oneOfType([
                PropTypes.string,
            ]).isRequired,
            listeners: PropTypes.string,
        })
    )
};
