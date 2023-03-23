import { createRouter, createWebHistory } from 'vue-router'
import NewsList from '../views/NewsList.vue'
import NewsView from '../views/NewsView.vue'

const routes = [
  {
    path: '/',
    name: 'list',
    component: NewsList
  },
  {
    path: '/view',
    name: 'view',
    component: NewsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
