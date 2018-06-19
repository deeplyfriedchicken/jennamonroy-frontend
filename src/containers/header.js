import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchNavLinks, fetchStaticContent } from '../actions/index'

class Header extends Component {
  componentDidMount () {
    this.props.fetchNavLinks()
    this.props.fetchStaticContent()
  }

  renderLinks () {
    return this.props.navLinks.map(link => {
      switch(link.url) {
        case('/'):
          return <li key={link.url}><NavLink exact activeClassName="is-active" to={`${link.url}`}>{link.name}</NavLink></li>
        default:
          return <li key={link.url}><NavLink activeClassName="is-active" exact to={`${link.url}`}>{link.name}</NavLink></li>
      }
    })
  }

  renderStatic() {
    if (this.props.logo) {
      return (
        <div>
          <img className="image logo" alt="Jenna Monroy Logo" src={this.props.logo.image} />
          <p className="is-size-2 has-text-weight-bold">{this.props.title.text}</p>
          <p className="is-size-6">{this.props.subtitle.text}</p>
        </div>
      )
    }
  }

  render () {
    return (
      <div className="hero-head">
        <header>
          <div className="container">
            <div className="has-text-centered header">
              <div className="has-text-centered">
                {this.renderStatic()}
              </div>
            </div>
            <div className="tabs is-centered">
              <ul>
                {this.renderLinks()}
              </ul>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    navLinks: state.navLinks,
    logo: state.static.logo,
    title: state.static.logo_title_text,
    subtitle: state.static.logo_subtitle_text
  }
}

export default withRouter(connect(mapStateToProps, { fetchNavLinks, fetchStaticContent })(Header))
