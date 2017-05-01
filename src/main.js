import Vue from 'vue'
import App from './App.vue'
import toUppercase from  './filters/toUppercase.js'
import toLowercase from  './filters/toLowercase.js'

Vue.mixin({
  created () {
    console.log('Global Mixin - Created Hook')
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
