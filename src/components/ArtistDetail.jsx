import { useParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {lastfmStatic} from "../enums";
import {ArtistDetailCard} from "./ArtistDetailCard";

export const ArtistDetail = () => {
    let params = useParams();
    const [artistTopAlbums, setArtistTopAlbums] = useState([]);
    const [artistTopTracks, setArtistTopTracks] = useState([]);

    useEffect(() => {
        axios(`${lastfmStatic.API_URL.URL}${lastfmStatic.API_URL.METHOD.ARTIST_GET_TOP_ALBUMS}&artist=${params.name}`)
            .then((topAlbum) => setArtistTopAlbums(topAlbum.data.topalbums.album))
            .catch((e) => console.log(e))
            .finally(()=> { console.log('artistTopAlbums completed')})
    },[])

    useEffect(() => {
        axios(`${lastfmStatic.API_URL.URL}${lastfmStatic.API_URL.METHOD.ARTIST_GET_TOP_TRACKS}&artist=${params.name}`)
            .then((topTrack) => setArtistTopTracks(topTrack.data.toptracks.track))
            .catch((e) => console.log(e))
            .finally(()=> { console.log('artistTopTracks completed')})
    },[])

    return (
        <div>
            <h1>{params.name}</h1>

            <h2>Top Albums</h2>
            <ArtistDetailCard data={artistTopAlbums} />

            <h2>Top Tracks</h2>
            <ArtistDetailCard data={artistTopTracks} />
        </div>
    ) ;
}