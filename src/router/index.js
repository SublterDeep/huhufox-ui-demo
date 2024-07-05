import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/homeView.vue'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/homeView',
    name: 'homeView',
    component: () => import('../views/homeView.vue')
  },
  {
    path: '/testView',
    name: 'testView',
    component: () => import('../views/testView.vue')
  },
  {
    path: '/sliderView',
    name: 'sliderView',
    component: () => import('../views/sliderView.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
