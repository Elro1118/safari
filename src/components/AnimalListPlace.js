import React, { Component } from 'react'
import axios from 'axios'
class AnimalListPlace extends Component {
  state = {
    places: [],
    animals: [],
    locationSelected: ''
  }

  componentDidMount() {
    axios.get('https://localhost:5001/api/Animals/Places').then(resp => {
      this.setState({
        places: resp.data
      })
    })
  }

  displayAnimalsPlace = event => {
    let urlAxios = ''
    this.setState({ locationSelected: event.target.value })

    if (event.target.value === 'All') {
      urlAxios = `https://localhost:5001/api/Animals`
    } else {
      urlAxios = `https://localhost:5001/api/Animals/${event.target.value}`
    }
    axios.get(urlAxios).then(resp => {
      this.setState({
        animals: resp.data
      })
    })
  }

  render() {
    return (
      <>
        <select
          value={this.state.locationSelected}
          onChange={this.displayAnimalsPlace}
        >
          <option value="All">All</option>
          {this.state.places.map((m, i) => {
            return (
              <option key={i} value={m}>
                {m}
              </option>
            )
          })}
        </select>
        <h1>List of Animals that User Has Seen</h1>
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
            {this.state.animals ? (
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

export default AnimalListPlace
