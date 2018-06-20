import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPage } from '../actions/index'
import { Helmet } from 'react-helmet'

import Announcements from './announcements'
import People from './people'
import Projects from './projects'
import Publications from './publications'

import Slider from 'react-slick'

import '../styles/slick.css'
import '../styles/home.css'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: true
    }
  }

  componentDidMount () {
    setTimeout(() => {
      this.fetchPage('home')
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
  renderSlides () {
    if (this.props.home.slides) {
      return this.props.home.slides.map(slide => {
        if (slide.link !== "") {
          return (
            <div key={slide.title}>
              <div id="home-hero" className="hero is-info is-medium is-bold" style={{backgroundImage: `url(${slide.image})` }}>
                <div className="hero-body">
                  <div className="has-text-centered">
                    <a target="_blank" href={slide.link}>
                      <div>
                        <h1 className="title">{slide.title}</h1>
                      </div>
                      <div>
                        <h2 className="subtitle">{slide.subtitle}</h2>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        }
        return (
          <div key={slide.title}>
            <div id="home-hero" className="hero is-info is-medium is-bold" style={{backgroundImage: `url(${slide.image})` }}>
              <div className="hero-body">
                <div className="has-text-centered">
                  <div>
                    <h1 className="title">{slide.title}</h1>
                  </div>
                  <div>
                    <h2 className="subtitle">{slide.subtitle}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })
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
    const home = this.props.home
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    }
    return (
      <div className="page-container">
        <Helmet>
          <title>{home.tab_title}</title>
          <meta name="description" content={home.description} />
        </Helmet>

        <Slider {...settings}>
          {this.renderSlides()}
        </Slider>

        <div className="single-content" dangerouslySetInnerHTML={{__html: this.props.home.content}}></div>
        <Route exact path="/" render={() => (
          <div>
            <Announcements limit={home.annoucnement_limit} />
            <Publications limit={home.publications_limit} />
            <People limit={home.people_limit} />
            <Projects limit={home.projects_limit} />
          </div> )}/>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    home: state.page
  }
}

export default connect(mapStateToProps, { fetchPage })(Home)
