import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <>
        <h1>Welcome to My Safari Vacation</h1>
        <ul>
          <li>
            <Link to={`/AnimalList`}>Animal List</Link>
          </li>
          <li>
            <Link to={`/AnimalListForPlace`}>Animal List For Place</Link>
          </li>
          <li>
            <Link to={`/RemoveAnimalsForPlace`}>
              Remove Animal List For Place
            </Link>
          </li>
        </ul>
      </>
    )
  }
}

export default Home
