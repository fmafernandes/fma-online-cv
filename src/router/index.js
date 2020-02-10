import Vue from 'vue'
import VueRouter from 'vue-router'
import Experience from '../views/Experience.vue'
import Projects from '../views/Projects.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/about"
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "*",
    redirect: '/about'
  }
]

const router = new VueRouter({
  routes
})

export default router
