import { FETCH_STATIC_CONTENT } from '../actions/index'

import slug from 'slug'

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_STATIC_CONTENT:
      return action.payload.data.data.static_content.reduce((acc, cur, i) => {
        acc[slug(cur.name, '_').toLowerCase()] = cur
        return acc
      }, {})
    default:
      return state
  }
}
