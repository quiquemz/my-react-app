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
        } else if(this.props.selectedTab === 'video-description') {
            return (
                <div className="row">
                    <div className="col-sm-4">
                        <div class="fb-video"
                             data-href={ this.props.video.url }
                             data-width="500"
                             data-allowfullscreen="true">
                        </div>
                        {/*<div className="video-item embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item"
                                    src={ this.props.video.url }
                                    allowTransparency="true"/>
                        </div>*/}
                    </div>
                    <div className="col-sm-8">
                        <span className="glyphicon glyphicon-remove pull-right"
                              onClick={ this.onButtonClick }
                              style={{ color: "red", cursor: "pointer", marginTop: 10, fontSize: 20 }} />
                        <h3>Title</h3>
                        <p>Author: fsda</p>
                        <p>Date release: fdsa</p>
                    </div>
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
