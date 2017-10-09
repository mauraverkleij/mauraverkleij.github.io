import React, { PropTypes, Component } from 'react';
import MainMenu from '../../components/menu';
import data from '../../data';

import './style.css';

export default class About extends Component {
    // static propTypes = {}
    // static defaultProps = {}
    // state = {}



    render() {
        let mailto = "mailto:" + data.info.name;
        let callto = "tel:" + data.info.tel;

        return (
        <div className="project">
            <div className="background-container">
                <div className="background-color"></div>
            </div>
            <div className="right">
                <div className="project-container about-container">
                    <div>
                        <h1>{data.info.name}</h1>
                        <h1>{data.info.city}</h1>
                        <a href={mailto}><h1>{data.info.email}</h1></a>
                        <a href={callto}><h1>{data.info.tel}</h1></a>
                        <p>{data.info.bio}</p>
                    </div>
                </div>
            </div>
            <MainMenu currentPage={this.props.location.pathname} color="yellow"/>
        </div>


        );
    }
}