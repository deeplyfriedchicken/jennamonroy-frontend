import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPage } from '../actions/index'

import Announcements from './announcements'
import People from './people'
import Projects from './projects'
import Publications from './publications'

class Page extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: true
    }
  }

  componentDidMount () {
    setTimeout(() => {
      if (this.props.slug) {
        this.fetchPage(this.props.slug)
      } else {
        this.fetchPage('home')
      }
    }, 500)
  }

  fetchPage (page) {
    this.props.fetchPage(page).then(() => {
      this.setState({ isLoading: false })
    })
  }

  renderLoading (loading) {
    if (loading) {
      return (
        <div className="has-text-centered loading"><i className="fa-spin fas fa-compass"></i></div>
      )
    }
  }
  renderImage () {
    if (this.props.page.featured_image) {
      return (
        <section className="hero is-info is-medium is-bold" style={{backgroundImage: `url(${this.props.page.featured_image})` }}>
          <div className="hero-body">
          <div class="has-text-centered">
            <h1 class="title">{this.props.page.title}</h1>
            <div>
              <h2 class="subtitle">{this.props.page.description}</h2>
            </div>
          </div>
          </div>
        </section>
      )
    } else {
      return (
        <div>
          <div className="header-content">
            <div className="has-text-centered">
              <h1 className="title is-spaced">
                {this.props.page.title}
              </h1>
            </div>
          </div>

          <div className="subheader-content has-text-centered">
            <h4 className="subtitle is-4"><i>{this.props.page.description}</i></h4>
            <hr/>
          </div>
        </div>
      )
    }
  }

  render () {
    if (this.state.isLoading) {
      return (
        <div className="page-container">
          {this.renderLoading(this.state.isLoading)}
        </div>
      )
    }
    return (
      <div className="page-container">
        {this.renderImage()}

        <div className="single-content" dangerouslySetInnerHTML={{__html: this.props.page.content}}></div>
        <Route exact path="/" render={() => (
          <div>
            <Announcements />
            <Publications />
            <People />
            <Projects />
          </div> )}/>
        <Route exact path="/announcements" component={Announcements}/>
        <Route exact path="/publications" component={Publications}/>
        <Route exact path="/research" component={Projects}/>
        <Route exact path="/people" component={People}/>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    page: state.page
  }
}

export default connect(mapStateToProps, { fetchPage })(Page)
