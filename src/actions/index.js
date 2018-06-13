import axios from 'axios'
import { BASE_URL, API_KEY } from '../defaults'

export const FETCH_PAGE = 'fetch_page'
export const FETCH_NAV_LINKS = 'fetch_nav_links'
export const FETCH_PROJECTS = 'fetch_projects'
export const FETCH_ANNOUNCEMENTS = 'fetch_announcements'
export const FETCH_PEOPLE = 'fetch_people'
export const FETCH_PUBLICATIONS = 'fetch_publications'


export function fetchPage (page = 'home') {
  const request = axios.get(`${BASE_URL}/pages/*/${page}?auth_token=${API_KEY}`)
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