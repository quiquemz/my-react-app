import React, { Props, Component } from 'react';
import Header from './common/Header';


export default class App extends Component {
    render () {
        return (
            <div>
                { /*<Header /> */ }
                { this.props.children }
            </div>
        );
    }
}

App.propTypes = {
    children: React.PropTypes.element
};
