import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/juniortest',
    name: 'Home',
    component: Home
  },
  {
    path: 'juniortest/addproduct',
    name: 'AddProduct',
    component: () => import('../views/AddProduct.vue')
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
