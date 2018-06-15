import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
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
        <div className="card" key={name}>
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
        <h1 className="is-size-4 title">People</h1>
        <Masonry
          breakpointCols={breakpointColumnsObj}
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
