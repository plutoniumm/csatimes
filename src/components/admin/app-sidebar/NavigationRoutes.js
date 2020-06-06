export const navigationRoutes = {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'dashboard',
      displayName: 'Feed',
      meta: {
        iconClass: 'vuestic-iconset vuestic-iconset-image',
      },
    },
    {
      name: 'stud',
      displayName: 'Student Portal',
      meta: {
        iconClass: 'vuestic-iconset vuestic-iconset-user',
      },
    },
    {
      name: 'csa',
      displayName: 'Assistance',
      meta: {
        iconClass: 'vuestic-iconset vuestic-iconset-comments',
      },
    },
    {
      name: 'developers',
      displayName: 'Site Info',
      meta: {
        iconClass: 'vuestic-iconset vuestic-iconset-files',
      },
    },
    {
      name: '',
      displayName: 'Settings (Soon...)',
      meta: {
        iconClass: 'vuestic-iconset vuestic-iconset-settings',
      },
    },
  ],
}
