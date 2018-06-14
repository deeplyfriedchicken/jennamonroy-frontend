import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProjects } from '../actions/index'

import Masonry from 'react-masonry-css'
import '../styles/masonry.css'

class Projects extends Component {
  componentDidMount () {
    this.props.fetchProjects()
  }

  renderProjects () {
    return this.props.projects.map(project => {
      return (
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <img src={project.featured_image} alt={`Picture of ${project.name}`} />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="is-size-5 has-text-weight-bold">{ project.name }</p>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }

  render () {
    return (
      <div className="collection">
        <h1 className="is-size-4 title">Projects</h1>
        <Masonry
          breakpointCols={2}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {this.renderProjects()}
        </Masonry>
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
