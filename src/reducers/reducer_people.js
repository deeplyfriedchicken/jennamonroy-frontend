import { FETCH_PEOPLE } from '../actions/index'

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_PEOPLE:
      return action.payload.data.data.people
    default:
      return state
  }
}
