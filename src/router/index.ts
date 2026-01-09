import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import LoginView from '../views/Login.vue'
import CampaignsView from '../views/campaigns/CampaignsView.vue'
import MensajeCampanaView from '../views/campaigns/MensajeCampanaView.vue'


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/campanas'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/campanas',
    name: 'Campanas',
    component: CampaignsView
  },
  {
    path: '/mensaje',
    name: 'Mensaje',
    component: MensajeCampanaView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
