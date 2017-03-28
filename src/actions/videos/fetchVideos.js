import axios from 'axios';

export const FETCH_VIDEOS = 'FETCH_VIDEOS';

const INITIAL_VIDEOS = [
    {
        url: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fjasonlsilva%2Fvideos%2F1735277136736564%2F&width=500&show_text=false&height=280&appId',
        author: 'Jason Silva',
        title: 'The Extended Mind',
        provider: 'facebook'
    },
    {
        url: 'https://www.youtube.com/embed/wnIhyeQceJA',
        author: 'Jeff Sandefer',
        title: 'JeffSandefer',
        provider: 'youtube'
    }
];

const ROOT_URL = "http://localhost:8000";

export default function fetchVideos() {
    const request = axios.get(`${ROOT_URL}/videos`);
    console.log(request);

    return {
        type: FETCH_VIDEOS,
        payload: request
    };
}
