import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPeople } from '../actions/index'

import Masonry from 'react-masonry-css'
import '../styles/masonry.css'

class People extends Component {
  componentDidMount () {
    this.props.fetchPeople()
  }

  renderPeople () {
    return this.props.people.map(person => {
      const name = `${person.first_name} ${person.last_name}`
      return (
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <img src={person.profile_picture} alt={`Picture of ${name}`} />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="is-size-5 has-text-weight-bold">{ name }</p>
                <p class="is-size-6">{ person.college }</p>
                <p class="is-size-6">{ person.affiliation }</p>
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
        <h1 className="is-size-4 title">People</h1>
        <Masonry
          breakpointCols={2}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {this.renderPeople()}
        </Masonry>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    people: state.people
  }
}

export default withRouter(connect(mapStateToProps, { fetchPeople })(People))
