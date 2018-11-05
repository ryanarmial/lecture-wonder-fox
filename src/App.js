import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    todos: ['Bangun Tidur'],
    person: {}
  }

  addTodo = (newTodo) => {
    this.setState({
      todos: this.state.todos.concat(newTodo)
    })
  }

  componentDidMount() {
    axios
      .get('https://swapi.co/api/people/1')
      .then(({data}) => {
        this.setState({
          person: data
        })
      })
    // this.setState({
    //   person: await this.getPerson()
    // })
  }


  // async getPerson() {
  //   const { data } = await axios.get('https://swapi.co/api/people/1')
  //   this.setState({
  //     person: data
  //   })
  // }

  getPerson() {
    return axios
      .get('https://swapi.co/api/people/1')
      .then(({data}) => {
        return data
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <button onClick={this.addTodo}>Pencer</button>
      </div>
    );
  }
}

export default App;
