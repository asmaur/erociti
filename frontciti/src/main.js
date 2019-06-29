import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'




//css third party
import 'bootstrap/dist/css/bootstrap.min.css'
import 'lightgallery/dist/css/lightgallery.min.css'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'




//js third party
//import 'jquery'
//import $ from "jquery";
//var $ = require("jquery");
//window.$ = require('jquery')
//window.JQuery = require('jquery')
import 'popper.js/dist/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'lightgallery/dist/js/lightgallery.min.js'
import 'owl.carousel/dist/owl.carousel.min.js'

import 'vuejs-noty/dist/vuejs-noty.css'

//import 'owl.carousel'


// custom
import "./assets/css/wizini.css"
import "./assets/css/style.css"


//custom
import "./assets/js/front.js"

import VueNoty from 'vuejs-noty'

Vue.use(VueNoty)

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faFeatherAlt, faExclamationCircle, faPlus} from '@fortawesome/free-solid-svg-icons'
import { faStar, faGem,} from '@fortawesome/free-regular-svg-icons'
import {faWhatsapp, faTwitter, faInstagram, faStudiovinari } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPhone, faTwitter, faWhatsapp, faInstagram, faFeatherAlt, faStar, faGem, faStudiovinari, faExclamationCircle, faPlus)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
