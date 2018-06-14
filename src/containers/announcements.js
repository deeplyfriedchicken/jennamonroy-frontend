import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchAnnouncements } from '../actions/index'

import '../styles/announcements.css'

class Announcements extends Component {
  componentDidMount () {
    this.props.fetchAnnouncements()
  }

  renderAnnouncements () {
    return this.props.announcements.map(announcement => {
      return (
        <div className="notification" key={announcement.title}>
          <h2 className="is-size-5 title">{announcement.title}</h2>
          <div dangerouslySetInnerHTML={{__html: announcement.content}}></div>
        </div>
      )
    })
  }

  render () {
    return (
      <div className="collection">
        <h1 className="is-size-4 title">Announcements</h1>
        {this.renderAnnouncements()}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    announcements: state.announcements
  }
}

export default withRouter(connect(mapStateToProps, { fetchAnnouncements })(Announcements))
