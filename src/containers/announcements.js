import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchAnnouncements } from '../actions/index'

class Announcements extends Component {
  componentDidMount () {
    this.props.fetchAnnouncements()
  }

  renderAnnouncements () {
    return this.props.announcements.map(announcement => {
      return (
        <div key={announcement.title}>
          <h2 className="subtitle">{announcement.title}</h2>
          <div dangerouslySetInnerHTML={{__html: announcement.content}}></div>
        </div>
      )
    })
  }

  render () {
    return (
      <div className="announcements">
        <h1 className="title">Announcements</h1>
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
