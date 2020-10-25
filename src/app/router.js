import Vue from 'vue'
import Router from 'vue-router'
import AppLayout from '../components/admin/AppLayout'

Vue.use( Router )

const EmptyParentComponent = {
  template: '<router-view></router-view>',
}

const router = new Router( {
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/student'
    },
    {
      path: '//auth',
      component: EmptyParentComponent,
      children: [
        {
          name: 'login',
          path: '/login',
          component: () => import( '../components/auth/login/Login.vue' ),
        },
        {
          name: 'signup',
          path: '/signup',
          component: () => import( '../components/auth/signup/Signup.vue' ),
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
          component: () => import( '../components/dashboard/Dashboard.vue' ),
        },
        {
          name: 'csa',
          path: '/csa',
          component: () => import( '../components/csa/csa.vue' ),
        },
        {
          name: 'student',
          path: '/student',
          component: () => import( '../components/student/Student.vue' ),
        },
        {
          name: 'hallOfFame',
          path: '/hallOfFame',
          component: () => import( '../components/student/components/HallOfFame.vue' ),
        },
        {
          name: 'startup',
          path: '/startup',
          component: () => import( '../components/student/components/Startup.vue' ),
        },
        {
          name: 'clubs',
          path: '/clubs',
          component: () => import( '../components/student/components/Clubs.vue' ),
        },
        {
          name: 'sports',
          path: '/sports',
          component: () => import( '../components/student/components/Sports.vue' ),
        },
        {
          name: 'departments',
          path: '/departments',
          component: () => import( '../components/student/components/Departments.vue' ),
        },
        {
          name: 'settings',
          path: '/settings',
          component: () => import( '../components/settings/Settings.vue' ),
        },
        {
          name: 'logout',
          path: '/logout',
          redirect: to => {
            // document.cookie = `uToken=; expires=${ new Date().getTime() }`
            // document.cookie = `emailID=; expires=${ new Date().getTime() }`
            // document.cookie = `shortID=; expires=${ new Date().getTime() }`
            // document.cookie = `userName=; expires=${ new Date().getTime() }`
            return '/login'
          },
        },
      ],
    },
  ],
} )

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'login' && !isAuthenticated) {
//     alert(isAuthenticated)
//     next({ name: 'login' })
//   } else {
//     next()
//   }
// })

export default router
