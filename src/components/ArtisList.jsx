import { useEffect, useState }from "react";
import axios from "axios";
import {lastfmStatic} from "../enums";
import {ArtistPreview} from "./ArtistPreview";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import {ArtistDetail} from "./ArtistDetail";
import { Button } from 'react-bootstrap';

export const ArtistList = () => {
    let location = useLocation();
    const [artistList, setArtistList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showLinks, setShowLinks] = useState(location.pathname === "/");


    useEffect(() => {
        axios(`${lastfmStatic.API_URL.URL}${lastfmStatic.API_URL.METHOD.GET_TOP_ARTISTS}`)
            .then((artistList) => setArtistList(artistList.data.artists.artist))
            .catch((e) => console.log(e))
            .finally(()=> { setIsLoading(false)})
    },[]);
    return (
        isLoading ?
            (<div>{lastfmStatic.LOADING}</div>)
            :
            (<div>
                {showLinks ?
                    artistList?.map((artist, index) => (
                    <Link to={`/artistDetail/${artist.name}`} onClick={() => setShowLinks(false)} key={index}>
                        <ArtistPreview playCount={artist.playcount} name={artist.name} listeners={artist.listeners} image={artist.image[1]["#text"]} />
                    </Link>
                ))
                :
                    <Link to="/" onClick={() => setShowLinks(true)}>HomePage</Link>
                }

                <Routes>
                    <Route path="artistDetail">
                        <Route path=":name" element={<ArtistDetail />} />
                    </Route>
                </Routes>
            </div>)
    );
};