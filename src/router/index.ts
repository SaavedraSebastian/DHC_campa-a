import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import LoginView from '../views/Login.vue'
import MensajeCampanaView from '../views/campaigns/MensajeCampanaView.vue'
import CampaignsView from '../views/campaigns/CampaignsView.vue'
import DashboardAdminView from '../views/Administrador/DashboardAdminView.vue'
import ClientesView from '../views/Administrador/ClientesView.vue'
import CampanasView from '../views/Administrador/CampanasView.vue'
import TerminosView from '../views/TerminosView.vue'


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
    path: '/terminos-y-condiciones',
    name: 'terminos-y-condiciones',
    component: TerminosView
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: DashboardAdminView,
    children: [
      {
        path: 'clientes',
        name: 'SeccionClientes' ,
        component: ClientesView,
        meta: {requiresAuth: true, breadcrumb: 'Secciones'}
      },
      {
        path: 'campanas',
        name: 'SeccionCampanas' ,
        component: CampanasView,
        meta: {requiresAuth: true, breadcrumb: 'Secciones'}
      },
    ]
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
