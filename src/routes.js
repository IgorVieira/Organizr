import Dashboard from './components/pages/Dashboard'
import Project from './components/pages/Project'

const routes = [
  {path: '/', name: 'dashboard', component: Dashboard, title: 'Dashboard'},
  {path: '/projects', name: 'project', component: Project}
]

export default routes
