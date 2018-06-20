import { combineReducers } from 'redux'
import PageReducer from './reducer_pages'
import NavLinksReducer from './reducer_nav_links'
import StaticContentReducer from './reducer_static_content'

import AnnouncementsReducer from './reducer_announcements'
import PeopleReducer from './reducer_people'
import ProjectsReducer from './reducer_projects'
import PublicationsReducer from './reducer_publications'

import PersonReducer from './reducer_person'

const rootReducer = combineReducers({
  page: PageReducer,
  navLinks: NavLinksReducer,
  announcements: AnnouncementsReducer,
  people: PeopleReducer,
  projects: ProjectsReducer,
  publications: PublicationsReducer,
  static: StaticContentReducer,
  person: PersonReducer
})

export default rootReducer
