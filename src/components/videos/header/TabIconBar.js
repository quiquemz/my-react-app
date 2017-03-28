import React, { Component } from 'react';
import classNames from 'classnames';

export default class TabIconBar extends Component {

    isActive(value) {
        return classNames({
            'col-xs-4': true,
            'icon-tab': true,
            'active': value === this.props.selectedTab
        });
    }

    render() {
        return (
            <div className="row tab-icon-bar-box">
                <div className={ this.isActive('grid') } onClick={ () => this.props.setActiveTab('grid') }>
                    <span className="glyphicon glyphicon-th" />
                </div>
                <div className={ this.isActive("full-screen") } onClick={ () => this.props.setActiveTab('full-screen') }>
                    <span className="glyphicon glyphicon-film" />
                </div>
            </div>
        );
    }

}

TabIconBar.propTypes = {
    selectedTab: React.PropTypes.string,
    setActiveTab: React.PropTypes.func
};
