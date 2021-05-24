import Vue from 'vue'
import VueRouter from 'vue-router'
import MindMap from '../views/MindMap.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MindMap',
    component: MindMap
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router
