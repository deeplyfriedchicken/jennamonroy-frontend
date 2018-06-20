import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPeople } from '../actions/index'

import PeopleList from '../components/people-list'

class People extends Component {
  componentDidMount () {
    this.props.fetchPeople()
  }

  render () {
    return (
      <div className="collection">
        <h1 className="is-size-4 title">People</h1>
        <PeopleList people={this.props.people} />
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
