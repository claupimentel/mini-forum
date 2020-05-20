import Vue from 'vue';
import Router from 'vue-router';

/**
 * Layouts.
 */
import Main from '@/layouts/Main';

/**
 * Views.
 */
import Home from '@/views/Home';
import NotFound from '@/views/NotFound';
import Thread from '@/views/Thread';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home,
        },
        {
          path: '/404',
          component: NotFound,
          name: 'NotFound',
          component: NotFound,
        },
        {
          path: 'thread/:thread_slug',
          name: 'Thread',
          props: true,
          component: Thread,
        },
      ],
    },
    {
      path: '*',
      redirect: '/404',
    },
  ],
});
