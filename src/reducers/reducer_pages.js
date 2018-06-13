import { FETCH_PAGE } from '../actions/index'

export default function (state = [], action) {
  console.log(action.payload)
  switch (action.type) {
    case FETCH_PAGE:
      return action.payload.data.data.fields
    default:
      return state
  }
}
