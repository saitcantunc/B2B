const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      {
        name: 'Login',
        path: 'login',
        component: () => import('pages/Login/LoginPage.vue')
      }
    ]
  },

  {
    path: '/dashboard',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      {
        name: 'Dashboard',
        path: '',
        component: () => import('pages/Main/DashboardPage.vue'),
        meta: {
          title: 'Dashboard'
        }
      }
    ]
  },

  {
    path: '/users',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'Users',
        path: '',
        component: () => import('pages/Main/UsersPage.vue'),
        meta: {
          title: 'Users'
        }
      },
      {
        name: 'User-Form',
        path: 'user-form',
        component: () => import('layouts/FormLayout.vue'),
        props: true,
        children: [
          {
            name: 'User-Form-Edit',
            path: ':id',
            component: () => import('pages/Main/UserFormPage.vue')
          },
          {
            name: 'User-Form-Create',
            path: '',
            component: () => import('pages/Main/UserFormPage.vue')
          }
        ]
      }
    ]
  }

  // Always leave this as last one,
  // but you can also remove it
];

export default routes;
