import Vue from 'vue'
import Router from 'vue-router'
import CesiumMap from '@/components/CesiumMap'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/login',
    //   name: 'login',
    //   meta: {
    //     title: '登录',
    //     hideInMenu: true
    //   },
    //   component: () => import('@/view/login/login.vue')
    // },
    {
      path: '/',
      name: 'CesiumMap',
      component: CesiumMap,
      // children: [{
      //   path: '/home',
      //   name: 'home',
      //   meta: {
      //     title: '首页',
      //     notCache: true,
      //     icon: 'md-home'
      //   },
      //   component: () => import('@/view/single-page/home')
      // }]
    }
  ]
})
