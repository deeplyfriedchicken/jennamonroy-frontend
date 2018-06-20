import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPerson } from '../actions/index'

import ProjectList from '../components/project-list'

import '../styles/person.css'

class Person extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: true
    }
  }

  componentDidMount () {
    const person = this.props.match.params.person
    if (person) {
      this.fetchPerson(person)
    }
  }

  fetchPerson(slug) {
    this.props.fetchPerson(slug).then(() => {
      this.setState({ isLoading: false })
    })
  }

  render () {
    if (this.props.person.projects) {
      const breakpointColumnsObj = {
        default: 2,
        500: 1
      }
      const person = this.props.person
      return (
        <div id="profile" className="person-container">
          <div className="person-info has-text-centered">
            <img className="profile-picture" src={person.profile_picture} />
            <h1 id="name" className="title name">{`${person.first_name} ${person.last_name}`}</h1>
            <p>{person.affiliation}</p>
            <p>{`${person.college} ${person.graduation_year}`}</p>
          </div>
          <div className="single-content" dangerouslySetInnerHTML={{__html: person.biography}}></div>
          <div className="collection">
            <h1 className="is-size-4 title">Projects</h1>
            <ProjectList projects={person.projects} />
          </div>
        </div>
      )
    } else {
      return <div></div>
    }
  }
}

function mapStateToProps (state) {
  return {
    person: state.person
  }
}

export default withRouter(connect(mapStateToProps, { fetchPerson })(Person))
