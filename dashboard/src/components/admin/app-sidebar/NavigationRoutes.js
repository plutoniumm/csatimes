export const navigationRoutes = {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'dashboard',
      displayName: 'menu.dashboard',
      meta: {
        iconClass: 'vuestic-iconset vuestic-iconset-dashboard',
      },
    },
    {
      name: 'statistics',
      displayName: 'menu.statistics',
      meta: {
        iconClass: 'vuestic-iconset vuestic-iconset-statistics',
      },
      disabled: true,
      children: [
        {
          name: 'progress-bars',
          displayName: 'menu.progressBars',
        },
      ],
    },
    {
      name: 'forms',
      displayName: 'menu.forms',
      meta: {
        iconClass: 'vuestic-iconset vuestic-iconset-forms',
      },
      disabled: true,
      children: [
        {
          name: 'form-elements',
          displayName: 'menu.formElements',
        },
        {
          name: 'medium-editor',
          displayName: 'menu.mediumEditor',
        },
      ],
    },
    {
      name: 'tables',
      displayName: 'menu.tables',
      meta: {
        iconClass: 'vuestic-iconset vuestic-iconset-tables',
      },
      children: [
        {
          name: 'markup',
          displayName: 'menu.markupTables',
        },
        {
          name: 'data',
          displayName: 'menu.dataTables',
        },
      ],
    },
    {
      name: 'ui',
      displayName: 'menu.uiElements',
      meta: {
        iconClass: 'vuestic-iconset vuestic-iconset-ui-elements',
      },
      disabled: true,
      children: [
        {
          name: 'buttons',
          displayName: 'menu.buttons',
        },
        {
          name: 'cards',
          displayName: 'menu.cards',
        },
        {
          name: 'collapses',
          displayName: 'menu.collapses',
        },
        {
          name: 'file-upload',
          displayName: 'menu.fileUpload',
        },
        {
          name: 'grid',
          displayName: 'menu.grid',
        },
        {
          name: 'icon-sets',
          displayName: 'menu.icons',
          children: [
            {
              displayName: 'concrete',
              name: 'icon-set',
            },
          ],
        },
        {
          name: 'lists',
          displayName: 'menu.lists',
        },
        {
          name: 'modals',
          displayName: 'menu.modals',
        },
        {
          name: 'notifications',
          displayName: 'menu.notifications',
        },
        {
          name: 'rating',
          displayName: 'menu.rating',
        },
        {
          name: 'sliders',
          displayName: 'menu.sliders',
        },
        {
          name: 'spinners',
          displayName: 'menu.spinners',
        },
        {
          name: 'tabs',
          displayName: 'menu.tabs',
        },
        {
          name: 'timelines',
          displayName: 'menu.timelines',
        },
        {
          name: 'tree-view',
          displayName: 'menu.treeView',
        },
      ],
    },
    {
      name: 'pages',
      displayName: 'menu.pages',
      meta: {
        iconClass: 'vuestic-iconset vuestic-iconset-files',
      },
      disabled: true,
      children: [
        {
          name: 'login',
          displayName: 'Login/Signup',
        },
        {
          name: '404-pages',
          displayName: '404 Pages',
        },
      ],
    },
    {
      name: 'pr',
      displayName: 'PR',
      meta: {
        iconClass: 'vuestic-iconset vuestic-iconset-dashboard',
      },
    },
    {
      name: 'campus',
      displayName: 'Campus Life',
      meta: {
        iconClass: 'vuestic-iconset vuestic-iconset-dashboard',
      },
    },
    {
      name: 'imp',
      displayName: 'Important Links',
      meta: {
        iconClass: 'vuestic-iconset vuestic-iconset-dashboard',
      },
    },
    {
      name: 'csa',
      displayName: 'CSA',
      meta: {
        iconClass: 'vuestic-iconset vuestic-iconset-dashboard',
      },
    },
    {
      name: 'developers',
      displayName: 'Developers',
      meta: {
        iconClass: 'vuestic-iconset vuestic-iconset-dashboard',
      },
    },
  ],
}
