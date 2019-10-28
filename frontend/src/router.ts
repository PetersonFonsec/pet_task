import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ './views/Login.vue'),
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import(/* webpackChunkName: "auth" */ './views/Login.vue'),
    children: [
      {
        path: 'signup',
        component: () => import(/* webpackChunkName: "signup" */ './components/login/form_create_user.vue')
      },
      {
        path: 'login',
        component: () => import(/* webpackChunkName: "login" */ './components/login/form_login.vue')
      },
    ]
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
