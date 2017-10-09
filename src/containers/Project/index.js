import React, { PropTypes, Component } from 'react';
import data from '../../data';
import MainMenu from '../../components/menu';

import './style.css';

export default class Project extends Component {
    constructor(){
        super();
        this.state = {
            project: null
        }
    }

    componentWillMount(){
        for (let i = 0; i < data.projects.length; i++) {
            if (data.projects[i].id === this.props.params.project) {
                this.setState({
                    project: data.projects[i]
                });
            } else {
                // Todo: redirect to 404
            }
        }
    }

    _changeCurrentProject(direction) {
        let indexAddition;
        if (direction === 'next') {
            indexAddition = 1;
        } else if (direction === 'previous') {
            indexAddition = -1;
        }
        const currentProject = this.state.project;
        for (let i = 0; i < data.projects.length; i++) {
            if (data.projects[i].id === currentProject.id) {
                if (data.projects[i + indexAddition]) {
                    this.props.router.push('/projects/' + data.projects[i + indexAddition].id);
                    this.setState({
                        project: data.projects[i + indexAddition]
                    })
                } else if (direction === 'next') {
                    this.props.router.push('/projects/' + data.projects[0].id);
                    this.setState({
                        project: data.projects[0]
                    })
                } else if (direction === 'previous') {
                    this.props.router.push('/projects/' + data.projects[data.projects.length -1].id);
                    this.setState({
                        project: data.projects[data.projects.length - 1]
                    })
                }
            }
        }
    }

    _nextProject() {
        this._changeCurrentProject('next');
    }

    _previousProject() {
        this._changeCurrentProject('previous');
    }

    render() {
        const images = this.state.project.images;
        let renderedImages = [];
        if (images){
            if (images.length > 0) {
                images.map((image) => {
                    if (image.content) {
                        renderedImages.push(
                            <div>
                                <img src={'/' + image.src} alt={image.alt} key={image.src} />
                                <p>{image.content}</p>
                            </div>
                        );
                    } else {
                        renderedImages.push(
                            <div>
                                <img src={'/' + image.src} alt={image.alt} key={image.src} />
                            </div>
                        );
                    }
                })
            }
        }

        let previousButton = null;
        let nextButton = null;
        //
        //         <div className="nav-item" onClick={this._previousProject.bind(this)}>Vorige project</div>
        //         <div className="nav-item" onClick={this._nextProject.bind(this)}>Volgende project</div>
        // );

        return (
            <div>
                <div className="project">
                    <div className="left">
                            <div className="project-container">
                            <h1>{this.state.project.title}</h1>
                            {this.state.project.content.split("\n").map(function(contentpart, index) {
                                return (
                                    <span key={index}>
                                        <p>{contentpart}</p>
                                    </span>
                                )
                            })}
                            <p>{this.state.project.content}</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="project-container">
                            {/*{projectNavigation}*/}
                            <div className="project-nav">
                                <div className="nav-item" onClick={this._previousProject.bind(this)}>Vorige project</div>
                                <div className="nav-item" onClick={this._nextProject.bind(this)}>Volgende project</div>
                            </div>
                            {renderedImages}
                            <div className="project-nav">
                                {previousButton}
                                {nextButton}
                            </div>
                        </div>
                    </div>
                    <MainMenu currentPage={this.props.location.pathname} />

                </div>
            </div>
        );
    }
}