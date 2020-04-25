import Vue from 'vue'
import Router from 'vue-router'
import AuthLayout from '../components/auth/AuthLayout'
import AppLayout from '../components/admin/AppLayout'

Vue.use(Router)

const EmptyParentComponent = {
  template: '<router-view></router-view>',
}

const demoRoutes = []

export default new Router({
  mode: process.env.VUE_APP_ROUTER_MODE_HISTORY === 'history',
  routes: [
    ...demoRoutes,
    {
      path: '/*',
      redirect: { name: 'dashboard' },
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
          path: '/',
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
          path: '//pages/not-found-large-text',
          component: () => import('../components/pages/404-pages/VaPageNotFoundLargeText.vue'),
        },
      ],
    },
    {
      name: 'Admin',
      path: '//admin',
      component: AppLayout,
      children: [
        {
          name: 'dashboard',
          path: '/dashboard',
          component: () => import('../components/dashboard/Dashboard.vue'),
        },
        {
          name: 'csa',
          path: '/csa',
          component: () => import('../components/csa/csa.vue'),
        },
        {
          name: 'developers',
          path: '/developers',
          component: () => import('../components/developers/developers.vue'),
        },
        {
          name: 'portal',
          path: '/portal',
          component: () => import('../components/stud/stud.vue'),
          children: [
            {
              name: 'fame',
              path: 'fame',
              component: () => import('../components/stud/hall.vue'),
            },
            {
              name: 'startup',
              path: 'startup',
              component: () => import('../components/stud/startup.vue'),
            },
            {
              name: 'humanities',
              path: 'humanities',
              component: () => import('../components/stud/humanities.vue'),
            },
          ],
        },
      ],
    },
  ],
})
