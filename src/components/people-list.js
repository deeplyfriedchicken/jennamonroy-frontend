import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Masonry from 'react-masonry-css'
import '../styles/masonry.css'

class PeopleList extends Component {
  renderPeople () {
    return this.props.people.map(person => {
      const name = `${person.first_name} ${person.last_name}`
      return (
        <Link to={`/people/${person.slug}`} key={person.slug}>
          <div className="card">
            <div className="card-image">
              <figure className="image">
                <img src={person.profile_picture} alt={name} />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="is-size-5 has-text-weight-bold">{ name }</p>
                  <p className="is-size-6">{ person.college }</p>
                  <p className="is-size-6">{ person.affiliation }</p>
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
        {this.renderPeople()}
      </Masonry>
    )
  }
}

export default PeopleList
