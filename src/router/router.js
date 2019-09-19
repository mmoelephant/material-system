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
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import( '../views/About.vue')
    // },
    {
      path:'/signIn',
      name:'signIn',
      component:() => import('../views/sign-in.vue')
    },
    {
      path:'/findPsw',
      name:'findPsw',
      component:() => import('../views/findPsw.vue')
    },
    {
      path:'/userinfo',
      name:'userinfo',
      component:() => import('../views/user-info.vue')
    },
    {
      path:'/onlinereport',
      name:'onlinereport',
      component:() => import('../views/online-report.vue')
    },
    {
      path:'/reportres',
      name:'reportres',
      component:() => import('../views/report-result.vue'),
      children:[
        {
          path:'resultdetail',
          name:'resultdetail',
          component:() => import('../views/result-detail.vue')
        },
      ],
    },
    {
      path:'/doubtcommit',
      name:'doubtcommit',
      component:() => import('../views/doubt-commit.vue')
    },
    {
      path:'/doubtres',
      name:'doubtres',
      component:() => import('../views/doubt-result.vue'),
      children:[
        {
          path:'doubtdetail',
          name:'doubtdetail',
          component:() => import('../views/doubt-detail.vue')
        }
      ]
    }
  ]
})
