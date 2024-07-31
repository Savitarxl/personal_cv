import { createRouter, createWebHashHistory } from 'vue-router'
import Fp from '../views/First Page.vue'
import Mp from '../views/Main Page.vue'
import Ep from '../views/Education.vue'
import Wp from '../views/Work_Experience.vue'
import Sp from '../views/Skills.vue'
const routes = [
  {
    path: '/',
    name: 'Fp',
    component: Fp
  },
  {
    path: '/Mp',
    name: 'Mp',
    component: Mp
  },
  {
    path: '/Ep',
    name: 'Ep',
    component: Ep
  },
  {
    path: '/Wp',
    name: 'Wp',
    component: Wp
  },
  {
    path: '/Sp',
    name: 'Sp',
    component: Sp
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
