import React, { Props, Component } from 'react';
import classNames from 'classnames';

export default class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeTab: "books"
        }
    }

    isActive(tab) {
        return classNames({
            'header-tab': true,
            active: tab === this.state.activeTab
        })
    }

    render () {
        return (
            <nav className="navbar navbar-default">
                <h3>QMZ</h3>
            </nav>
        );
    }
}


