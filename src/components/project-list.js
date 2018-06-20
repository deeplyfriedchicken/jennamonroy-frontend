import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Masonry from 'react-masonry-css'
import '../styles/masonry.css'

class ProjectList extends Component {
  renderProjects () {
    return this.props.projects.map(project => {
      return (
        <Link to={`/research/${project.slug}`} key={project.name}>
          <div className="card">
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
        </Link>
      )
    })
  }

  render () {
    const breakpointColumnsObj = {
      default: 2,
      500: 1
    }
    return (
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {this.renderProjects()}
      </Masonry>
    )
  }
}

export default ProjectList
