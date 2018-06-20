import { FETCH_PROJECT } from '../actions/index'

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_PROJECT:
      return action.payload.data.data.projects.length > 0 ? action.payload.data.data.projects[0] : {}
    default:
      return state
  }
}
