import { createRouter, createWebHistory } from 'vue-router'
import LetterView from '../views/LetterView.vue'

const routes = [
  {
    path: '/',
    name: 'LetterView',
    component: LetterView
  },
  {
    path: '/write',
    name: 'LetterWrite',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LetterWrite.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
