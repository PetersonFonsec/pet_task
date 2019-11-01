import Vue from 'vue';
import Auth from './services/auth'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/auth/',
  },
  {
    path: '/auth/',
    name: 'auth',
    component: () => import(/* webpackChunkName: "auth" */ './views/Login.vue'),
    children: [
      {
        path: 'signup',
        component: () => 
          import(/* webpackChunkName: "signup" */ './components/login/form_create_user.vue')
      },
      {
        path: 'login',
        component: () => 
          import(/* webpackChunkName: "login" */ './components/login/form_login.vue')
      },
    ]
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
    meta: {
      requiresAuth: false
    }
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes,
});

router.beforeEach( async ( to, from, next ) => {

  const { requiresAuth } = to.meta

  if ( requiresAuth && ! await Auth.validToken() ) next('/auth/')
  else next()
  
})

export default router;
