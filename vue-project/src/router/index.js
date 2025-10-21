import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AllCompanionView from '../views/AllCompanionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/acompanhantes',
      name: 'acompanhantes',
      component: () => import('../views/AllCompanionView.vue')
    },
    {
      path: '/acompanhante/interna',
      name: 'acompanhante/interna',
      component: () => import('../views/CompanionInnerView.vue')
    },
  ],
})

export default router
