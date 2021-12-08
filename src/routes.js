import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from '@/pages/Home';
import NotFoundPage from '@/pages/404';
import Example from '@/pages/Example';

export default new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/example',
      name: 'example',
      component: Example
    },
    {
      path: '*',
      name: 'NotFoundPage',
      component: NotFoundPage
    },
  ]
});
