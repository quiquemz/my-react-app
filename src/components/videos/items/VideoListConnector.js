import React, { Props, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchVideos from '../../../actions/videos/fetchVideos';
import VideoListItem from './VideoListItemConnector';

class VideoListConnector extends Component {

    componentWillMount() {
        this.props.fetchVideos();
    }

    selectView() {
        switch(this.props.selectedTab) {
            case 'grid':

                return this.props.videos.map((video, i) => {
                    return (
                        <div className="col-xs-6 col-md-4 list-item-box" key={ i }>
                            <VideoListItem
                                selectedTab={ this.props.selectedTab }
                                video={ video } />
                        </div>
                    );
                });
            case 'full-screen':
                return this.props.videos.map((video, i) => {
                    return (
                        <div className="list-item-box" key={ i }>
                            <VideoListItem
                                selectedTab={ this.props.selectedTab }
                                video={ video } />
                        </div>
                    )
                });
        }
        return <div>Error selecting tab</div>;
    }

    render () {
        return (
            <div>
                { this.selectView() }
            </div>
        );
    }
}

VideoListConnector.propTypes = {
    videos: React.PropTypes.array,
    fetchVideos: React.PropTypes.func,
    selectedTab: React.PropTypes.string
};

function mapStateToProps({ videos }) {
    return { videos };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchVideos: fetchVideos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoListConnector)
