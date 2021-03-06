import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NProgress from 'nprogress'
//import VueCookies from 'vue-cookies'

import VueAnalytics from 'vue-analytics'

Vue.use(Router)

let access_token = function () {
    let access = window.$cookies.get('erociti_access_token')
    if (access) {
        return true;
    } else {
        return false;
    }
}

let router = new Router({
    mode: 'history',
    routes: [

        {
            path: '/init',
            name: 'init',
            component: () => import( /* webpackChunkName: "about" */ './views/Init.vue'),

    },
        {
            path: '/',
            name: 'home',
            component: Home,
            beforeEnter(to, from, next) {
                if (access_token()) {
                    // user doesn't have access token, redirect to login
                    next()
                } else {
                    // user has access token, user can open the page
                    next('/init')
                }
            }
    },
        {
            path: '/:cicode/:cislug/:category/',
            name: 'city',
            component: () => import( /* webpackChunkName: "about" */ './views/City.vue'),

            beforeEnter(to, from, next) {
                if (access_token()) {
                    // user doesn't have access token, redirect to login
                    next()
                } else {
                    // user has access token, user can open the page
                    next('/init')
                }
            }

    },
        {
            path: '/:cicode/:cislug/:category/:perslug/:perid/',
            name: 'profile',
            component: () => import( /* webpackChunkName: "about" */ './views/Profile.vue'),

            beforeEnter(to, from, next) {
                if (access_token()) {
                    // user doesn't have access token, redirect to login
                    next()
                } else {
                    // user has access token, user can open the page
                    next('/init')
                }
            }

    },
        {
            path: '/search/',
            name: 'search',
            component: () => import( /* webpackChunkName: "about" */ './views/Search.vue'),
            beforeEnter(to, from, next) {
                if (access_token()) {
                    // user doesn't have access token, redirect to login
                    next()
                } else {
                    // user has access token, user can open the page
                    next('/init')
                }
            }

    },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ './views/About.vue'),

    },
        {
            path: '/privacidade',
            name: 'privacidade',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ './views/Privacy.vue'),

    },
        {
            path: '/termo-de-uso',
            name: 'termo',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ './views/Termo.vue'),

    },

        {
            path: '*',
            name: 'not found',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ './views/urlerror.vue'),

    },

  ]
})


router.beforeResolve((to, from, next) => {
  if (to.path) {
      
    NProgress.start()
  }
  next()
});

router.afterEach(() => {
  NProgress.done(true)
});


Vue.use(VueAnalytics, {
  id: 'UA-143260985-1',
  //id: "dhdhdhd",
  router
})


export default router;