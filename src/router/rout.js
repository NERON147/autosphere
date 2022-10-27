import Vue from 'vue'
import VueRouter from 'vue-router'
import aboutCompany from '../views/About-Company.vue'
import services from '../views/Services.vue'
import contacts from '../views/Contacts.vue'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'aboutCompany',
    component: aboutCompany
  },
  {
    path: '/services',
    name: 'services',
    component: services
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: contacts
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
