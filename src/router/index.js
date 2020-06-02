import Vue from 'vue'
import Router from 'vue-router'
import AppLayout from '../components/admin/AppLayout'

Vue.use(Router)

const EmptyParentComponent = {
  template: '<router-view></router-view>',
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '//auth',
      component: EmptyParentComponent,
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
          name: 'update',
          path: '/update',
          component: () => import('../components/auth/update/Update.vue'),
        },
        {
          name: 'login1',
          path: '/login1',
          component: () => import('../components/auth/login1/Login1.vue'),
        },
        {
          name: 'init',
          path: '/init',
          component: () => import('../components/auth/init/init.vue'),
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
          default: true,
        },
        {
          name: 'stud',
          path: '/stud',
          component: () => import('../components/stud/stud.vue'),
        },
        {
          name: 'hall',
          path: '/hall',
          component: () => import('../components/hall/hall.vue'),
        },
        {
          name: 'startup',
          path: '/startup',
          component: () => import('../components/startup/startup.vue'),
        },
        {
          name: 'clubs',
          path: '/clubs',
          component: () => import('../components/clubs/Clubs.vue'),
        },
      ],
    },
  ],
})
