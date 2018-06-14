import { combineReducers } from 'redux'
import PageReducer from './reducer_pages'
import NavLinksReducer from './reducer_nav_links'

import AnnouncementsReducer from './reducer_announcements'
import PeopleReducer from './reducer_people'
import ProjectsReducer from './reducer_projects'
import PublicationsReducer from './reducer_publications'

const rootReducer = combineReducers({
  page: PageReducer,
  navLinks: NavLinksReducer,
  announcements: AnnouncementsReducer,
  people: PeopleReducer,
  projects: ProjectsReducer,
  publications: PublicationsReducer
})

export default rootReducer
