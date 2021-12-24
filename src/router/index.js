import { createRouter, createWebHashHistory } from 'vue-router';
// import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    component: () => import('../views/front/Layout.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/front/Login.vue'),
  },
  {
    path: '/dashboard',
    component: () => import('../views/dashboard/Dashboard.vue'),
    children: [
      {
        path: '',
        name: 'AdminProducts',
        component: () => import('../views/dashboard/AdminProducts.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
