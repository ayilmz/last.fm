import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {imageControl} from "../utils";

export const ArtistDetailCard = ({data}) => {
    return (
        <ul>
            {data?.map((item, index) => {
                const { image, name, playcount, listeners } = item;
                return(
                    <li style={{paddingBottom: "1rem"}} key={index}>
                        <LazyLoadImage src={imageControl(image[1]["#text"])} alt={name} width="64" height="64"/>
                        <div>
                            <p>{name}</p>
                            <p>{playcount}</p>
                            {listeners && (
                                <p>{listeners}</p>
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
                PropTypes.number
            ]).isRequired,
            listeners: PropTypes.string,
        })
    )
};
