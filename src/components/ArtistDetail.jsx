import { useParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {lastfmStatic} from "../enums";
import {ArtistDetailCard} from "./ArtistDetailCard";
import { StyledArtistDetail } from "./ArtistDetailStyle";
import { Container, Row, Col } from 'react-bootstrap';

export const ArtistDetail = () => {
    let params = useParams();
    const [isLoadingAlbums, setIsLoadingAlbums] = useState(true);
    const [isLoadingTracks, setIsLoadingTracks] = useState(true);
    const [artistTopAlbums, setArtistTopAlbums] = useState([]);
    const [artistTopTracks, setArtistTopTracks] = useState([]);

    useEffect(() => {
        axios(`${lastfmStatic.API_URL.URL}${lastfmStatic.API_URL.METHOD.ARTIST_GET_TOP_ALBUMS}&artist=${params.name}`)
            .then((topAlbum) => setArtistTopAlbums(topAlbum.data.topalbums.album))
            .catch((e) => console.log(e))
            .finally(()=> { setIsLoadingAlbums(false)})
    },[])

    useEffect(() => {
        axios(`${lastfmStatic.API_URL.URL}${lastfmStatic.API_URL.METHOD.ARTIST_GET_TOP_TRACKS}&artist=${params.name}`)
            .then((topTrack) => setArtistTopTracks(topTrack.data.toptracks.track))
            .catch((e) => console.log(e))
            .finally(()=> { setIsLoadingTracks(false)})
    },[])

    return (
        <StyledArtistDetail>
            <h1>{params.name}</h1>

            <Container className="p-0">
                <Row>
                    <Col xs={6}>
                        <h2>{lastfmStatic.TOP_ALBUMS}</h2>
                        {isLoadingAlbums ?
                            (<div>{lastfmStatic.LOADING}</div>)
                            :
                            (
                                <ArtistDetailCard data={artistTopAlbums} />
                            )}
                    </Col>
                    <Col xs={6}>
                        <h2>{lastfmStatic.TOP_TRACKS}</h2>
                        {isLoadingTracks ?
                            (<div>{lastfmStatic.LOADING}</div>)
                            :
                            (
                                <ArtistDetailCard data={artistTopTracks} />
                            )}
                    </Col>
                </Row>
            </Container>

        </StyledArtistDetail>
    ) ;
}