import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPage } from '../actions/index'

import Moment from 'react-moment'

class Page extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: true
    }
  }

  componentDidMount () {
    this.props.fetchPage('home')
    window.scrollTo(0, 0)
  }

  render () {
    console.log(this.props)
    return (
      <div>
        <div className="header-content">
          <div className="has-text-centered">
            <h1 className="title is-spaced">
              {this.props.page.title}
            </h1>
          </div>
        </div>

        <div className="subheader-content has-text-centered">
          <h4 className="subtitle is-4"><i>Violets are red, purples are blue</i></h4>
          <hr/>
        </div>

        <div className="single-content" dangerouslySetInnerHTML={{__html: this.props.page.content}}></div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    page: state.page
  }
}

export default connect(mapStateToProps, { fetchPage })(Page)
