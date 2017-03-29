import React, { Props, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import removeVideo from '../../../actions/videos/removeVideo';

class VideoListItemConnector extends Component {

    constructor(props) {
        super(props);

        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick(event) {
        event.preventDefault();

        console.log(this.props.video.url);

        this.props.removeVideo(this.props.video.url);
    }

    selectView() {
        console.log(this.props.selectedTab);
        if(this.props.selectedTab === 'full-screen' || this.props.selectedTab === 'grid') {
            return (
                <div className="video-item embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item"
                            src={ this.props.video.url }
                            allowTransparency="true"
                            allowFullScreen="allowfullscreen"

                    />
                </div>
            );
        } else {
            return <div>Error selecting tab</div>;
        }
    }

    render () {
        return this.selectView();
    }
}

VideoListItemConnector.propTypes = {
    video: React.PropTypes.object,
    onVideoSelect: React.PropTypes.func,
    selectedTab: React.PropTypes.string,
    removeVideo: React.PropTypes.func
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ removeVideo }, dispatch);
}

export default connect(null, mapDispatchToProps)(VideoListItemConnector);
