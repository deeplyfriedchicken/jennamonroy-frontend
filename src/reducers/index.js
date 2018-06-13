import { combineReducers } from 'redux'
import PageReducer from './reducer_pages'
import NavLinksReducer from './reducer_nav_links'
import AnnouncementsReducer from './reducer_announcements'

const rootReducer = combineReducers({
  page: PageReducer,
  navLinks: NavLinksReducer,
  announcements: AnnouncementsReducer
})

export default rootReducer
