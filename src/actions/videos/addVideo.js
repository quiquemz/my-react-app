import axios from 'axios';
import $ from 'jquery';

export const ADD_VIDEO = 'ADD_VIDEO';
const ROOT_URL = process.env.PORT || "http://localhost:8000";
const GOOGLE_API_KEY = "AIzaSyDbbmdoGha-GmtNWhtu11oT1AncFYHq9r0";

export default function addVideo(videoData) {
    //If youtube
    $.ajax({
        url: "https://www.googleapis.com/youtube/v3/videos?id=" + video_id + "&key="+ GOOGLE_API_KEY + "&fields=items(snippet(title))&part=snippet",
        dataType: "jsonp",
        success: function(data){
            console.log(data.items[0].snippet.title);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert (textStatus, + ' | ' + errorThrown);
        }
    });

    const request = axios.post(`${ROOT_URL}/videos`, {
        url: videoData.url
    });

    return {
        type: ADD_VIDEO,
        payload: request
    };
}
