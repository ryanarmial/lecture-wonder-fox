import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component {
  state = {
    person: {}
  }

  async componentDidMount() {
    this.setState({
      person: await this.getPerson()
    })
  }

  getPerson = () => {
    return axios
      .get('https://swapi.co/api/people/1')
      .then(({ data }) => {
        return data
      })
  }

  render() {
    return (
      <h1>HALO HAAI</h1>
    );
  }
}

export default Home;