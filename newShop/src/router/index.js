import Vue from 'vue'
import Router from 'vue-router'
import Miste from '../pages/Miste/Miste'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '@/pages/Search/Search.vue'
import Login from '@/pages/Login/Login.vue'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path:"/",
      redirect:"/miste"
    },
    {
      path: '/miste',
      name: 'miste',
      component: Miste,
      meta:{requiresAuth:true}
    },{
      path:'/order',
      name:'order',
      component:Order,
      meta:{requiresAuth:true}
    },
    {
      path: '/profile',
      component: Profile,
      meta: { requiresAuth: true }
    },
    {
      path: '/search',
      component: Search,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      component: Login
    },{
      path:'*',
      component:Miste
    }
  ]
})
