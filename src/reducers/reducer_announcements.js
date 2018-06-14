import { FETCH_ANNOUNCEMENTS } from '../actions/index'

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_ANNOUNCEMENTS:
      return action.payload.data.data.announcements
    default:
      return state
  }
}
