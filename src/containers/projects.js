import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProjects } from '../actions/index'

import ProjectList from '../components/project-list'

class Projects extends Component {
  componentDidMount () {
    this.props.fetchProjects()
  }

  render () {
    let projects = this.props.projects
    if (this.props.limit) {
      projects = projects.slice(0, this.props.limit)
    }
    return (
      <div className="collection">
        <h1 className="is-size-4 title">Projects</h1>
        <ProjectList projects={projects} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    projects: state.projects
  }
}

export default withRouter(connect(mapStateToProps, { fetchProjects })(Projects))
