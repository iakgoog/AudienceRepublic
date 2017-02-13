// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './css/bootstrap.min.css'
// import './css/bootstrap-select.min.css'
import './css/font-awesome.min.css'
import './css/style.css'

import './js/jquery.min.js'
import './js/bootstrap.min.js'
// import './js/bootstrap-select.min.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
