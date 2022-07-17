import { useEffect, useState }from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import {lastfmStatic} from "../enums";
import {ArtistItem} from "./ArtistItem";
import { Link, Routes, Route } from "react-router-dom";
import {ArtistDetail} from "./ArtistDetail";

export const ArtistList = () => {

    const [artistList, setArtistList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showLinks, setShowLinks] = useState(true);


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
                {showLinks ?
                    artistList?.map((artist, index) => (
                    <Link to={`/artistDetail/${artist.playcount}`} onClick={() => setShowLinks(false)} key={index}>
                        <ArtistItem  playCount={artist.playcount} name={artist.name} listeners={artist.listeners} image={artist.image[1]["#text"]} />
                    </Link>
                ))
                :
                    <Link to="/" onClick={() => setShowLinks(true)}>HomePage</Link>
                }

                <Routes>
                    <Route path="*" element={<ArtistList />}/>

                    <Route path="artistDetail">
                        <Route path=":playcount" element={<ArtistDetail />} />
                    </Route>
                </Routes>
            </div>)
    );
};

ArtistList.propTypes = {
};

ArtistList.defaultProps = {
}
