import Vue from 'vue'
import Router from 'vue-router'
import AuthLayout from '../components/auth/AuthLayout'
import AppLayout from '../components/admin/AppLayout'

Vue.use(Router)

const EmptyParentComponent = {
  template: '<router-view></router-view>',
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/*',
      redirect: { name: 'home' },
    },
    {
      path: '//auth',
      component: AuthLayout,
      children: [
        {
          name: 'login',
          path: '/login',
          component: () => import('../components/auth/login/Login.vue'),
        },
        {
          name: 'signup',
          path: '/signup',
          component: () => import('../components/auth/signup/Signup.vue'),
        },
        {
          path: '',
          redirect: { name: 'login' },
        },
      ],
    },
    {
      path: '//404',
      component: EmptyParentComponent,
      children: [
        {
          name: 'not-found-large-text',
          path: '/pages/not-found-large-text',
          component: () => import('../components/pages/404-pages/VaPageNotFoundLargeText.vue'),
        },
      ],
    },
    {
      name: 'Dashboard',
      path: '/dashboard',
      component: AppLayout,
      children: [
        {
          name: 'home',
          path: 'home',
          component: () => import('../components/dashboard/Dashboard.vue'),
          default: true,
        },
        {
          name: 'pages',
          path: 'pages',
          component: EmptyParentComponent,
          children: [
            {
              name: '404-pages',
              path: '404-pages',
              component: () => import('../components/pages/404-pages/404PagesPage'),
            },
          ],
        },
        {
          name: 'csa',
          path: 'csa',
          component: () => import('../components/csa/csa.vue'),
          default: true,
        },
        {
          name: 'devs',
          path: 'devs',
          component: () => import('../components/developers/developers.vue'),
          default: true,
        },
        {
          name: 'portal',
          path: 'portal',
          component: () => import('../components/stud/stud.vue'),
          default: true,
        },
        {
          name: 'fame',
          path: 'fame',
          component: () => import('../components/stud/hall.vue'),
          default: true,
        },
        {
          name: 'startup',
          path: 'startup',
          component: () => import('../components/stud/startup.vue'),
          default: true,
        },
        {
          name: 'humanities',
          path: 'humanities',
          component: () => import('../components/stud/humanities.vue'),
          default: true,
        },
      ],
    },
  ],
})
