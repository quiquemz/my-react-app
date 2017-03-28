import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './components/App';
import VideoWrapper from './components/videos/VideoWrapper';


export default (
    <Route path="/" component={ App } >
        <IndexRedirect to="videos" />
        <Route path="videos" component={ VideoWrapper } />
    </Route>
);

