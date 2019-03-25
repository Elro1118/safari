import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class ThreeAnimals extends Component {
  state = {
    specie: '',
    specie2: '',
    specie3: '',
    totalAnimals: 0
  }
  handleSubmit = event => {
    axios
      .get(
        `https://localhost:5001/api/Animals/ThreeAnimalsTotal?specie=${
          this.state.specie
        }&specie2=${this.state.specie2}&specie3=${this.state.specie3}`
      )
      .then(resp => {
        this.setState({
          totalAnimals: resp.data
        })
      })
    event.preventDefault()
  }
  handleChange = event => {
    console.log(event.target.placeholder)
    if (event.target.placeholder === 'specie') {
      this.setState({ specie: event.target.value })
    } else if (event.target.placeholder === 'specie2') {
      this.setState({ specie2: event.target.value })
    } else {
      this.setState({ specie3: event.target.value })
    }
  }
  render() {
    return (
      <>
        <Link to={`/`}>
          <h4>Home</h4>
        </Link>
        <div className="three-animals-section">
          <h2>Total of Three Animals that The User Has Seen</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="specie"
              onChange={this.handleChange}
            />
            <input
              type="text"
              placeholder="specie2"
              onChange={this.handleChange}
            />
            <input
              type="text"
              placeholder="specie3"
              onChange={this.handleChange}
            />
            <input type="submit" value="Submit" />
          </form>
          {this.state.totalAnimals === 0 ? (
            <></>
          ) : (
            <h4>
              Total de {this.state.specie}, {this.state.specie2},{' '}
              {this.state.specie3} are {this.state.totalAnimals} animals
            </h4>
          )}
        </div>
      </>
    )
  }
}

export default ThreeAnimals
