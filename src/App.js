import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import AnimalList from './components/AnimalList'
import AnimalListPlace from './components/AnimalListPlace'
import RemoveAnimalsPlace from './components/RemoveAnimalsPlace'
import ThreeAnimals from './components/ThreeAnimals'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/AnimalList" component={AnimalList} />
            <Route
              exact
              path="/AnimalListForPlace"
              component={AnimalListPlace}
            />
            <Route
              exact
              path="/RemoveAnimalsForPlace"
              component={RemoveAnimalsPlace}
            />
            <Route exact path="/ThreeAnimalsTotal" component={ThreeAnimals} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
