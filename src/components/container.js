import React, { Component } from 'react'

import Page from '../containers/page'

import '../styles/main.css'

class Container extends Component {
  render () {
    return (
      <div className="hero-body">
        <div className="container ">
          <div className="columns is-multiline is-mobile is-centered">
            <div className="column is-8 is-centered">
              <Page />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Container
