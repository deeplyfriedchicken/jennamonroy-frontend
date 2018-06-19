import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Header from './containers/header'
import Footer from './components/footer'

import Page from './containers/page'

import './styles/main.css'

class App extends Component {
  render () {
    return (
      <div className="App">
        <div>
          <Header />
          <div>
            <div className="container ">
              <div className="columns is-multiline is-centered">
                <div className="column is-10 is-centered">
                  <Route exact path="/" component={Page} />
                  <Route exact path="/home" component={Page} />
                  <Route path="/:page" render={(props) => (
                    <Page slug={props.match.params.page} key={props.match.params.page} />)} />
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
