//import _ from 'lodash';
import React, { Props, Component } from 'react';
import VideoHeader from './header/VideoHeader'
import VideoListConnector from './items/VideoListConnector';
import Message from './message/Message';

const API_KEY = 'AIzaSyCBzo1jCU_aQor3DBLSJcAoHu7OuGaYSyU';

export default class VideoWrapper extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
            selectedTab: 'grid'
        };
    }

    setActiveTab(value) {
        this.setState({ selectedTab: value});
    }

    render () {
        return (
            <div>
                <VideoHeader
                    selectedTab={ this.state.selectedTab }
                    setActiveTab={ (activeTab) => this.setActiveTab(activeTab) }
                />
                <Message/>
                <div className="container-fluid video-wrapper">
                    <VideoListConnector
                        onVideoSelect={ selectedVideo => { this.setState({ selectedVideo }); } }
                        videos={ this.state.videos }
                        selectedTab={ this.state.selectedTab }
                    />
                </div>
            </div>
        );
    }
}
