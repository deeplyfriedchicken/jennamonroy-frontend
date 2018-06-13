import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchNavLinks } from '../actions/index'

class Header extends Component {
  componentDidMount () {
    this.props.fetchNavLinks()
  }

  renderLinks () {
    return this.props.navLinks.map(link => {
      switch(link.link_text) {
        case('Home'):
        return <li key={link.slug}><NavLink exact activeClassName="is-active" exact to={`/${link.slug}`}>{link.link_text}</NavLink></li>
        default:
          return <li key={link.slug}><NavLink activeClassName="is-active" exact to={`/${link.slug}`}>{link.link_text}</NavLink></li>
      }
    })
  }

  render () {
    return (
      <div className="hero-head">
        <header>
          <div className="container">
            <div className="has-text-centered">
              <div className="is-flex is-horizontal-center">
                <img className="image logo" src={require('../logo.png')} />
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
    navLinks: state.navLinks
  }
}

export default withRouter(connect(mapStateToProps, { fetchNavLinks })(Header))
