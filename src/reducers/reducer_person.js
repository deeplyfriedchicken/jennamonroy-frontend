import { FETCH_PERSON } from '../actions/index'

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_PERSON:
      return action.payload.data.data.people.length > 0 ? action.payload.data.data.people[0] : {}
    default:
      return state
  }
}
