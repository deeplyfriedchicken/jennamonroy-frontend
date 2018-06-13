import { FETCH_NAV_LINKS } from '../actions/index'

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_NAV_LINKS:
      return action.payload.data.data.navigation_links
    default:
      return state
  }
}
