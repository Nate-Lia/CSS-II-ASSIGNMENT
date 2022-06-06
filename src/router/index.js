import { createRouter, createWebHistory } from 'vue-router'
import MainMenu from '../views/MainMenu.vue'
import Shop from '../views/Shop.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainMenu,
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop,
  },
  {
    path: '/addproduct',
    name: 'addproduct',
    component: () => import('../components/NewItem.vue'),
  },
  {
    path: '/updateproduct',
    name: 'updateproduct',
    component: () => import('../components/UpdateItem.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
