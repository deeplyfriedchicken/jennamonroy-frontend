import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPublications } from '../actions/index'

import '../styles/publication.css'

class Publications extends Component {
  componentDidMount () {
    this.props.fetchPublications()
  }

  renderPublications () {
    let publications = this.props.publications
    if (this.props.limit) {
      publications = publications.slice(0, this.props.limit)
    }
    return publications.map((publication, i) => {
      return (
        <div key={i} className="publication" dangerouslySetInnerHTML={{__html: publication.citation}}></div>
      )
    })
  }

  render () {
    return (
      <div className="collection">
        <h1 className="is-size-4 title">Publications</h1>
        {this.renderPublications()}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    publications: state.publications
  }
}

export default withRouter(connect(mapStateToProps, { fetchPublications })(Publications))
