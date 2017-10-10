import React, { Component } from 'react';
import './style.css';
import data from '../../data';
import { Link } from 'react-router'

class App extends Component {
    constructor(){
        super();
        this.state = {
            selectedProject: null,
            projects: data.projects
        }
    }

    _onHover(selectedProject){
        if ( selectedProject !== this.state.selectedProject ){
            this.setState({
                selectedProject
            })
        }
    }

    _renderProjects(){
        let projects = [];
        for (let i = 0; i < this.state.projects.length; i++) {
            let project = this.state.projects[i];
            projects.push(
                <Link to={'projects/' + project.id}>
                    <li key={project.id}
                        onMouseOver={() => this._onHover(project) }>
                        {project.title}
                    </li>
                </Link>
            );
            // <li key={project.id} onMouseOver={() => this._onHover(project)}>{project.title}</li>
        }
        return projects;
    }

    _renderBackgroundImage(){
        if(this.state.selectedProject){
            return (
                <img src={this.state.selectedProject.img} />
            )
        }
        else {
            return (<div></div>)
        }
    }

  render() {

    return (
      <div className="App">
          <div className="background-container">
              {this._renderBackgroundImage()}
          </div>
          <div className="outer">
              <div className="middle">
                  <div className="projects">
                      <ul>
                          {this._renderProjects()}
                      </ul>
                  </div>
              </div>
          </div>
          <div className="menu">
              <div className="menu-item item-contacts">Maura</div>
              <div className="menu-item item-home">Projecten</div>
          </div>

      </div>
    );
  }
}

export default App;

