import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'list',
    component: HomeView
  },
  {
    path: '/view',
    name: 'view',
    component: () => import(/* webpackChunkName: "about" */ '@/components/NewsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
