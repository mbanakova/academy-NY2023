import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
const About = () => import('../views/About')
const Cart = () => import('../views/Cart')

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router