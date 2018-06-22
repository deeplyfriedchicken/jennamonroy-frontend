import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import ReactGA from 'react-ga';

import './App.css'
import Header from './containers/header'
import Footer from './components/footer'

import Page from './containers/page'
import Home from './containers/home'
import Person from './containers/person'
import Project from './containers/project'

import './styles/main.css'

ReactGA.initialize('UA-121232781-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  render () {
    return (
      <div className="App">
        <div>
          <Header />
          <div>
            <div className="container ">
              <div className="columns is-mobile is-multiline is-centered">
                <div className="column is-10 is-centered">
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/people/:person" component={Person} />
                    <Route exact path="/research/:project" component={Project} />
                    <Route exact path="/:page" render={(props) => (
                      <Page slug={props.match.params.page} key={props.match.params.page} />)} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
