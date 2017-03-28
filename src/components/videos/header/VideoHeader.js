import React, { Component } from 'react';
import TabIconBar from './TabIconBar';
import Text from './Text';

export default class VideoHeader extends Component {

    render() {
        return (
            <div className="container-fluid video-header">
                <Text/>
                <TabIconBar selectedTab={ this.props.selectedTab }
                            setActiveTab={ selectedTab => this.props.setActiveTab(selectedTab) } />
            </div>
        )
    }

}