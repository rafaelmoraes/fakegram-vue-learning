import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import VeeValidate from 'vee-validate';
import msgs from './pt_BR';

import './assets/css/reset.css';

import './assets/js/Utilities.js';

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';

Vue.http.interceptors.push((req, next) => {
  console.info("Request intercepted");
  next(res => {
    console.info("Response intercepted");
  });
});

Vue.use(VueRouter);
const router = new VueRouter({ routes, mode: 'history' });

Vue.use(VeeValidate);
// Vue.use(VeeValidate, {
//   locale: 'pt_BR',
//   dictionary: {
//     pt_BR: {
//       messages: msgs
//     }
//   }
// });

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
