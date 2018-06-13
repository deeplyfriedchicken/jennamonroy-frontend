import { combineReducers } from 'redux'
import PageReducer from './reducer_pages'
import NavLinksReducer from './reducer_nav_links'

const rootReducer = combineReducers({
  page: PageReducer,
  navLinks: NavLinksReducer
})

export default rootReducer
