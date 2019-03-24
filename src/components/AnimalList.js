import React, { Component } from 'react'
import axios from 'axios'

class AnimalList extends Component {
  state = {
    animals: [],
    totalAllAnimals: 0
  }

  componentDidMount() {
    this.getAllAnimals()
    this.getTotalAllAnimals()
  }

  getAllAnimals = () => {
    axios.get('https://localhost:5001/api/Animals').then(resp => {
      this.setState({
        animals: resp.data
      })
    })
  }

  getTotalAllAnimals = () => {
    axios
      .get('https://localhost:5001/api/Animals/TotalSeenAnimals')
      .then(resp => {
        this.setState({
          totalAllAnimals: resp.data
        })
      })
  }

  render() {
    return (
      <>
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
            {this.state.animals.map((m, i) => {
              return (
                <tr key={i}>
                  <td>{m.id}</td>
                  <td>{m.species}</td>
                  <td>{m.countOfTimesSeen}</td>
                  <td>{m.locationOfLastSeen}</td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <td />
              <td>Total Animals</td>
              <td>{this.state.totalAllAnimals}</td>
              <td />
            </tr>
          </tfoot>
        </table>
      </>
    )
  }
}

export default AnimalList
