import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './components/Projects';
import Todos from './components/Todos';
import AddProject from './components/AddProject';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state={
            projects: [ ],
            todos: []
        }
    }
    
    getTodos() {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/todos',
            dataType: 'json',
            cache: false,
            success: function (data) {
               this.setState({todos: data}, function () {
                    console.log(this.state);   
               }); 
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(err);
            }
        });
    }

    getProjects() {
        this.setState({projects: [
            {
                id: uuid.v4(),
                title: 'Business Website',
                category: 'Web Design'
            },
            { 
                id: uuid.v4(),
                title: 'Social Website',
                category: 'Web Design'
            }
            ]});
    }
    
    componentWillMount() {
        this.getProjects();
        this.getTodos();

    }
    componentDidMount() {
        this.getTodos();
    }

    handleAddProject(project) {
        let projects = this.state.projects;
        projects.push(project);
        this.setState({projects: projects});
    }
    deleteProject(id) {
        console.log(id);
        let projects = this.state.projects;
        let index = projects.findIndex(x=> x.id===id);
        projects.splice(index,1);
        this.setState({projects: projects});
    }

    render() {
        //comments work normally up here (because we're not in the html yet)
        //notes to self:
        //1) returns in React can only return single elements
        //2) export -> App is now available for use in index.js as <App />
        return (
                <div className="App">
                <AddProject addProject={this.handleAddProject.bind(this)}/>
                <Projects onDelete={this.deleteProject.bind(this)} projects={this.state.projects} />
                <br />
                <h3>Todos</h3>
                <Todos todos={this.state.todos} />
                </div>
               );
    }
}

export default App;
