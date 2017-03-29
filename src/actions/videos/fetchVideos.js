//import axios from 'axios';

export const FETCH_VIDEOS = 'FETCH_VIDEOS';

const INITIAL_VIDEOS = [
    {
        "id": 1,
        "url": "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fjasonlsilva%2Fvideos%2F1735277136736564%2F&width=500&show_text=false&height=280&appId",
        "author": "Jason Silva",
        "title": "The Extended Mind",
        "provider": "facebook"
    },
    {
        "id": 2,
        "url": "https://www.youtube.com/embed/wnIhyeQceJA",
        "author": "Jeff Sandefer",
        "title": "Jeff Sandefer",
        "provider": "youtube"
    },
    {
        "url": "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Falanxelmundo%2Fvideos%2F1124530757568465%2F&show",
        "id": 3
    },
    {
        "url": "https://www.youtube.com/embed/59Q_lhgGANc",
        "id": 4
    },
    {
        "url": "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fjasonlsilva%2Fvideos%2F1701365333461078%2F&show_text=0&width=560",
        "id": 5
    },
    {
        "url": "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FTED%2Fvideos%2F10157913210995652%2F&show_text=0&width=560",
        "id": 6
    }
];

//const ROOT_URL = "http://localhost:8000";

export default function fetchVideos() {
    //const request = axios.get(`${ROOT_URL}/videos`); //Server

    return {
        type: FETCH_VIDEOS,
        payload: INITIAL_VIDEOS
    };
}
