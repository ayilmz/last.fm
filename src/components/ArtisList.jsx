import { useEffect, useState }from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import {lastfmStatic} from "../enums";
import {ArtistItem} from "./ArtistItem";

export const ArtistList = () => {

    const [artistList, setArtistList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios(lastfmStatic.URLS.TOP_ARTISTS)
            .then((artistList) => setArtistList(artistList.data.artists.artist))
            .catch((e) => console.log(e))
            .finally(()=> { setIsLoading(false)})
    },[])
    return (
        isLoading ?
            (<div>{lastfmStatic.LOADING}</div>)
            :
            (<div>
                {artistList?.map((artist, index) => (
                    <ArtistItem key={index} playCount={artist.playcount} name={artist.name} listeners={artist.listeners} image={artist.image[1]["#text"]} />
                ))}
            </div>)
    );
};

ArtistList.propTypes = {
};

ArtistList.defaultProps = {
}
