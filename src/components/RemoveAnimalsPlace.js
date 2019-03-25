import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class RemoveAnimalsPlace extends Component {
  state = {
    places: [],
    animals: [],
    locationSelected: '',
    confirmation: ''
  }

  componentDidMount() {
    this.getAllPlace()
  }

  getAllPlace = () => {
    axios.get('https://localhost:5001/api/Animals/Places').then(resp => {
      this.setState({
        places: resp.data
      })
    })
  }

  displayAnimalsPlace = event => {
    this.setState({ locationSelected: event.target.value })

    if (event.target.value !== ' ') {
      axios
        .get(`https://localhost:5001/api/Animals/${event.target.value}`)
        .then(resp => {
          this.setState({
            animals: resp.data
          })
        })
    } else {
      this.setState({
        animals: []
      })
    }
  }

  handleSubmit = event => {
    axios
      .delete(
        `https://localhost:5001/api/Animals/location=${
          this.state.locationSelected
        }`
      )
      .then(resp => {
        this.setState({
          confirmation: resp.data
        })
      })

    if (this.state.confirmation === 'Ok') {
      this.getAllPlace()
    }
  }

  render() {
    return (
      <>
        <Link to={`/`}>
          <h4>Home</h4>
        </Link>
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your location to remove{' '}
            <select
              value={this.state.locationSelected}
              onChange={this.displayAnimalsPlace}
            >
              <option defaultValue value=" ">
                {' '}
              </option>
              {this.state.places.map((m, i) => {
                return (
                  <option key={i} value={m}>
                    {m}
                  </option>
                )
              })}
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Species</th>
              <th>Count of Times Seen</th>
              <th>Location of LastSeen</th>
            </tr>
          </thead>
          <tbody>
            {this.state.animals && this.state.animals.length > 0 ? (
              this.state.animals.map((m, i) => {
                return (
                  <tr key={i}>
                    <td>{m.id}</td>
                    <td>{m.species}</td>
                    <td>{m.countOfTimesSeen}</td>
                    <td>{m.locationOfLastSeen}</td>
                  </tr>
                )
              })
            ) : (
              <></>
            )}
          </tbody>
        </table>
      </>
    )
  }
}

export default RemoveAnimalsPlace
