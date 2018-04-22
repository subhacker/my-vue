import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
//import Home from '@/components/Home'
//import AddModule from '@/components/AddModule'
//import ManageModule from '@/components/ManageModule'
//import AddNews from '@/components/AddNews'
//import ManageNews from '@/components/ManageNews'
//import ReviseNews from '@/components/ReviseNews'

import Home from '@/vuexcomp/Home'
import AddModule from '@/vuexcomp/AddModule'
import ManageModule from '@/vuexcomp/ManageModule'
import AddNews from '@/vuexcomp/AddNews'
import ManageNews from '@/vuexcomp/ManageNews'
import ReviseNews from '@/vuexcomp/ReviseNews'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/add-module',
      name: 'AddModule',
      component: AddModule
    },
    {
      path: '/manage-module',
      name: 'ManageModule',
      component: ManageModule
    },
    {
      path: '/add-news',
      name: 'AddNews',
      component: AddNews
    },
    {
      path: '/manage-news',
      name: 'ManageNews',
      component: ManageNews
    },
    {
      path: '/revise-news',
      name: 'ReviseNews',
      component: ReviseNews
    }

  ]
})
