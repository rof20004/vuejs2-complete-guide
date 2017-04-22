import Vue from 'vue'
import App from './App.vue'
import toUppercase from  './filters/toUppercase.js'
import toLowercase from  './filters/toLowercase.js'

new Vue({
  el: '#app',
  render: h => h(App)
})
