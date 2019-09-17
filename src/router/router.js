import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path:'/signIn',
      name:'signIn',
      // meta:{
      //   user:false,
      //   show_name:true,
      //   log:true
      // },
      component:() => import('../views/sign-in.vue')
    },
    {
      path:'/findPsw',
      name:'findPsw',
      // meta:{
      //   user:false,
      //   show_name:true,
      //   log:true
      // },
      component:() => import('../views/findPsw.vue')
    },
  ]
})
