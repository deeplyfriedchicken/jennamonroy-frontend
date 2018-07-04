import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchNavLinks, fetchStaticContent } from '../actions/index'
import { Helmet } from 'react-helmet'

import '../styles/header.css'

class Header extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isActive: false
    }

    this.toggleBurger = this.toggleBurger.bind(this);
  }

  componentDidMount () {
    this.props.fetchNavLinks()
    this.props.fetchStaticContent()
  }

  toggleBurger() {
    this.setState({ isActive: !this.state.isActive })
  }

  renderLinks () {
    return this.props.navLinks.map(link => {
      switch(link.name) {
        case('Home'):
          return <NavLink key={link.url} exact className="navbar-item" activeClassName="is-active" to={`${link.url}`}>{link.name}</NavLink>
        default:
          return <NavLink key={link.url} className="navbar-item" activeClassName="is-active" to={`${link.url}`}>{link.name}</NavLink>
      }
    })
  }

  renderStatic() {
    if (this.props.logo) {
      return (
        <div>
          <Helmet>
          <link rel="icon" type="image/png" href={this.props.favicon.image} sizes="32x32" />
          </Helmet>
          <img className="image logo" alt="Jenna Monroy - Logo" src={this.props.logo.image} />
          <p className="is-size-3 has-text-weight-bold">{this.props.title.text}</p>
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
            <nav class="navbar is-transparent">
              <div class="navbar-brand">
                <div class={`navbar-burger burger ${(this.state.isActive ? ' is-active' : '')}`} onClick={this.toggleBurger}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <div class={`navbar-menu ${(this.state.isActive ? ' is-active' : '')}`}>
                <div id="center-items" class="navbar-start">
                  {this.renderLinks()}
                </div>
              </div>
            </nav>
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
    subtitle: state.static.logo_subtitle_text,
    favicon: state.static.favicon
  }
}

export default withRouter(connect(mapStateToProps, { fetchNavLinks, fetchStaticContent })(Header))
