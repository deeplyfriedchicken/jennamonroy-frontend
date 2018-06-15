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
        <div className="card" key={project.name}>
          <div className="card-image">
            <figure className="image">
              <img src={project.featured_image} alt={project.name} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="is-size-5 has-text-weight-bold">{ project.name }</p>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }

  render () {
    const breakpointColumnsObj = {
      default: 2,
      500: 1
    }
    return (
      <div className="collection">
        <h1 className="is-size-4 title">Projects</h1>
        <Masonry
          breakpointCols={breakpointColumnsObj}
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
