import { FETCH_PUBLICATIONS } from '../actions/index'

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_PUBLICATIONS:
      return action.payload.data.data.publications
    default:
      return state
  }
}
