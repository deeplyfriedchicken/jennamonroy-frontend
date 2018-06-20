import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProject } from '../actions/index'

import '../styles/project.css'

class Project extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: true
    }
  }

  componentDidMount () {
    const project = this.props.match.params.project
    if (project) {
      this.fetchProject(project)
    }
  }

  fetchProject(slug) {
    this.props.fetchProject(slug).then(() => {
      this.setState({ isLoading: false })
    })
  }

  render () {
    if (this.props.project.name) {
      const project = this.props.project
      return (
        <div id="project" className="project-container">
          <div className="project-info has-text-centered">
            <img className="featured-image" src={project.featured_image} alt={project.name} />
            <h1 id="name" className="title name">{project.name}</h1>
            <p>{project.description}</p>
          </div>
          <div className="single-content" dangerouslySetInnerHTML={{__html: project.content}}></div>
        </div>
      )
    } else {
      return <div></div>
    }
  }
}

function mapStateToProps (state) {
  return {
    project: state.project
  }
}

export default withRouter(connect(mapStateToProps, { fetchProject })(Project))