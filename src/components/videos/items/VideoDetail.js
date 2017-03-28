import React, { Props, Component } from 'react';

const VideoDetail = ({video}) => {
    if(!video)
        return <div>Loading...</div>;

    const url = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div className="col-md-8 selected-video-box">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={ url }></iframe>
            </div>
            <div className="details">
                <h5>{ video.snippet.title }</h5>
                <p>{ video.snippet.description }</p>
            </div>
        </div>
    );
};

VideoDetail.propTypes = {
    video: React.PropTypes.object
};

export default VideoDetail;
