import axios from 'axios'
import { BASE_URL, API_KEY } from '../defaults'

export const FETCH_PAGE = 'fetch_page'
export const FETCH_NAV_LINKS = 'fetch_nav_links'
export const FETCH_PROJECTS = 'fetch_projects'
export const FETCH_ANNOUNCEMENTS = 'fetch_announcements'
export const FETCH_PEOPLE = 'fetch_people'
export const FETCH_PUBLICATIONS = 'fetch_publications'
export const FETCH_STATIC_CONTENT = 'fetch_static_content'
export const FETCH_PERSON = 'fetch_person'


export function fetchPage (page = 'home') {
  let requestURL = `${BASE_URL}/pages/*/${page}?auth_token=${API_KEY}`
  const url = new URL(window.location.href)
  if (url.search === '?preview=1') {
    requestURL = `${requestURL}&preview=1`
  }
  const request = axios.get(requestURL)
  return {
    type: FETCH_PAGE,
    payload: request
  }
}

export function fetchNavLinks () {
  const request = axios.get(`${BASE_URL}/content/?keys=navigation_links&auth_token=${API_KEY}`)
  return {
    type: FETCH_NAV_LINKS,
    payload: request
  }
}

export function fetchAnnouncements () {
  const request = axios.get(`${BASE_URL}/content/?keys=announcements&auth_token=${API_KEY}`)
  return {
    type: FETCH_ANNOUNCEMENTS,
    payload: request
  }
}

export function fetchPeople () {
  const request = axios.get(`${BASE_URL}/content/?keys=people&auth_token=${API_KEY}`)
  return {
    type: FETCH_PEOPLE,
    payload: request
  }
}

export function fetchProjects () {
  const request = axios.get(`${BASE_URL}/content/?keys=projects&auth_token=${API_KEY}`)
  return {
    type: FETCH_PROJECTS,
    payload: request
  }
}

export function fetchPublications () {
  const request = axios.get(`${BASE_URL}/content/?keys=publications&auth_token=${API_KEY}`)
  return {
    type: FETCH_PUBLICATIONS,
    payload: request
  }
}

export function fetchStaticContent () {
  const request = axios.get(`${BASE_URL}/content/?keys=static_content&auth_token=${API_KEY}`)
  return {
    type: FETCH_STATIC_CONTENT,
    payload: request
  }
}

export function fetchPerson (slug) {
  const request = axios.get(`${BASE_URL}/content/?keys=people[slug=${slug}]&auth_token=${API_KEY}`)
  return {
    type: FETCH_PERSON,
    payload: request
  }
}