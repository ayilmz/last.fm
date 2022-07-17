import { useParams } from "react-router-dom";

export const ArtistDetail = () => {
    let params = useParams();
    return (
        <div>
            <h2>Artist Play Count: {params.playcount}</h2>
        </div>
    ) ;
}