import { FETCH_VIDEOS } from '../../actions/videos/fetchVideos';
//import { ADD_VIDEO } from '../../actions/videos/addVideo';
//import { REMOVE_VIDEO } from '../../actions/videos/removeVideo';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_VIDEOS:
            return [...action.payload, ...state];
        /*case ADD_VIDEO:
            return [action.payload.data, ...state];
        case REMOVE_VIDEO: //TODO Remove by ID not by URL
            return state.filter(video => video.url !== action.payload.data);*/
    }
    return state;
}
