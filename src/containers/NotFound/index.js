import React, { PropTypes, Component } from 'react';
import MainMenu from '../../components/menu';


import './style.css';

export default class About extends Component {
    // static propTypes = {}
    // static defaultProps = {}
    // state = {}

    render() {
        return (
            <div className="404">
                <div className="App-">
                    <h1>404</h1>
                </div>
                <p className="App-intro">
                    Nooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
                </p>
                <MainMenu currentPage={this.props.location.pathname} />

            </div>
        );
    }
}