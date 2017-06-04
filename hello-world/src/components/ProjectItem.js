import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ProjectItem extends Component {
    
    deleteProject() {
        this.props.onDelete(this.props.project.id)
    }
    render () { 
        console.log(this.props);
        return (
        <li className="ProjectItem">
        <strong>{this.props.project.title}</strong>: {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this)}>X</a>
        </li>
        );
    }
}

ProjectItem.propTypes = {
    project: PropTypes.object,
    onDelete: PropTypes.func
}
export default ProjectItem;
