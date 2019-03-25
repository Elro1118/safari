import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="main">
        <h1>Welcome to My Safari Full Stack App</h1>
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
          <li>
            <Link to={`/ThreeAnimalsTotal`}>
              Three Animal Total that User Has Seen
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Home
