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
  mode: process.env.VUE_APP_ROUTER_MODE_HISTORY === 'true' ? 'history' : 'hash',
  routes: [
    ...demoRoutes,
    {
      path: '*',
      redirect: { name: 'dashboard' },
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          name: 'login',
          path: 'login',
          component: () => import('../components/auth/login/Login.vue'),
        },
        {
          name: 'signup',
          path: 'signup',
          component: () => import('../components/auth/signup/Signup.vue'),
        },
        {
          name: 'recover-password',
          path: 'recover-password',
          component: () => import('../components/auth/recover-password/RecoverPassword.vue'),
        },
        {
          path: '',
          redirect: { name: 'login' },
        },
      ],
    },
    {
      path: '/404',
      component: EmptyParentComponent,
      children: [
        {
          name: 'not-found-advanced',
          path: 'not-found-advanced',
          component: () => import('../components/pages/404-pages/VaPageNotFoundSearch.vue'),
        },
        {
          name: 'not-found-simple',
          path: 'not-found-simple',
          component: () => import('../components/pages/404-pages/VaPageNotFoundSimple.vue'),
        },
        {
          name: 'not-found-custom',
          path: 'not-found-custom',
          component: () => import('../components/pages/404-pages/VaPageNotFoundCustom.vue'),
        },
        {
          name: 'not-found-large-text',
          path: '/pages/not-found-large-text',
          component: () => import('../components/pages/404-pages/VaPageNotFoundLargeText.vue'),
        },
      ],
    },
    {
      name: 'Admin',
      path: '/admin',
      component: AppLayout,
      children: [
        {
          name: 'dashboard',
          path: 'dashboard',
          component: () => import('../components/dashboard/Dashboard.vue'),
          default: true,
        },
        {
          name: 'statistics',
          path: 'statistics',
          component: EmptyParentComponent,
          children: [
            {
              name: 'progress-bars',
              path: 'progress-bars',
              component: () => import('../components/statistics/progress-bars/ProgressBars.vue'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Progress-Bars',
              },
            },
          ],
        },
        {
          name: 'forms',
          path: 'forms',
          component: EmptyParentComponent,
          children: [
            {
              name: 'form-elements',
              path: 'form-elements',
              component: () => import('../components/forms/form-elements/FormElements.vue'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/inputs',
              },
            },
            {
              name: 'medium-editor',
              path: 'medium-editor',
              component: () => import('../components/forms/medium-editor/MediumEditor.vue'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Medium-Editor',
              },
            },
          ],
        },
        {
          name: 'tables',
          path: 'tables',
          component: EmptyParentComponent,
          children: [
            {
              name: 'markup',
              path: 'markup',
              component: () => import('../components/markup-tables/MarkupTables.vue'),
              wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Tables', // TODO Update docs
            },
          ],
        },
        {
          name: 'ui',
          path: 'ui',
          component: EmptyParentComponent,
          children: [
            {
              name: 'buttons',
              path: 'buttons',
              component: () => import('../components/ui/buttons/Buttons'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Buttons',
              },
            },
            {
              name: 'rating',
              path: 'rating',
              component: () => import('../components/ui/rating/Rating'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Rating',
              },
            },
            {
              name: 'timelines',
              path: 'timelines',
              component: () => import('../components/ui/timelines/Timelines'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Timelines',
              },
            },
            {
              name: 'notifications',
              path: 'notifications',
              component: () => import('../components/ui/notifications/Notifications'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Notifications',
              },
            },
            {
              path: 'icons',
              component: () => import('../components/ui/icons/Icons'),
              children: [
                {
                  name: 'icon-sets',
                  path: '', // Default route
                  component: () => import('../components/ui/icons/SetsList'),
                  meta: {
                    wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Icons',
                  },
                },
                {
                  name: 'icon-set',
                  path: ':name',
                  component: () => import('../components/ui/icons/IconSet'),
                  props: true,
                  meta: {
                    wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Icons',
                  },
                },
              ],
            },
            {
              name: 'spinners',
              path: 'spinners',
              component: () => import('../components/ui/spinners/Spinners'),
            },
            {
              name: 'grid',
              path: 'grid',
              component: () => import('../components/ui/grid/Grid'),
            },
            {
              name: 'modals',
              path: 'modals',
              component: () => import('../components/ui/modals/Modals'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Modals',
              },
            },
            {
              name: 'cards',
              path: 'cards',
              component: () => import('../components/ui/cards/Cards'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Cards',
              },
            },
            {
              name: 'file-upload',
              path: 'file-upload',
              component: () => import('../components/ui/file-upload/FileUpload'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/File-Upload',
              },
            },
            {
              name: 'tree-view',
              path: 'tree-view',
              component: () => import('../components/ui/tree-view/TreeView'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Tree-view',
              },
            },
            {
              name: 'collapses',
              path: 'collapses',
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Collapse',
              },
              component: () => import('../components/ui/collapse/Collapses'),
            },
            {
              name: 'sliders',
              path: 'sliders',
              component: () => import('../components/ui/sliders/Sliders'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Sliders',
              },
            },
            {
              name: 'tabs',
              path: 'tabs',
              component: () => import('../components/ui/tabs/Tabs'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Tabs',
              },
            },
            {
              name: 'lists',
              path: 'lists',
              component: () => import('../components/lists/Lists.vue'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Lists',
              },
            },
          ],
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
          name: 'developers',
          path: 'developers',
          component: () => import('../components/developers/developers.vue'),
          default: true,
        },
        {
          name: 'stud',
          path: 'stud',
          component: () => import('../components/stud/stud.vue'),
          default: true,
        },
        {
          name: 'hall',
          path: 'hall',
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
