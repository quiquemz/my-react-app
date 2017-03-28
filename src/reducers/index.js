import { combineReducers } from 'redux';
import VideosReducer from './videos/reducerVideos';

const rootReducer = combineReducers({
    videos: VideosReducer
});

export default rootReducer;
