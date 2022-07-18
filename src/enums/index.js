export const lastfmStatic  = {
    API_URL:{
        URL: "https://ws.audioscrobbler.com/2.0/?api_key=0aaba822accf02238cd94d65d97a78d7&format=json&",
        METHOD:{
            GET_TOP_ARTISTS: "method=chart.gettopartists",
            ARTIST_GET_TOP_ALBUMS: "method=artist.gettopalbums",
            ARTIST_GET_TOP_TRACKS: "method=artist.gettoptracks"
        },
    },
    LOADING: "loading ..."
}