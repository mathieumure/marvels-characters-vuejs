// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import store from './store'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const API_KEY = '4f4d174932f3a7fb7967670e69c43400'

Vue.http.interceptors.push((request, next) => {
  // add apikey in each request
  request.params = request.params || []
  request.params['apikey'] = API_KEY
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
