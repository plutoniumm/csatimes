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
          name: 'hallOfFame',
          path: '/hallOfFame',
          component: () => import('../components/hallOfFame/hallOfFame.vue'),
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
        {
          name: 'sports',
          path: '/sports',
          component: () => import('../components/sports/Sports.vue'),
        },
        {
          name: 'departments',
          path: '/departments',
          component: () => import('../components/departments/Departments.vue'),
        },
      ],
    },
  ],
})
