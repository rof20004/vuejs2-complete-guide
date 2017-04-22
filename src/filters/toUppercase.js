import Vue from 'vue'

Vue.filter('toUppercase', value => {
  return value.toUpperCase()
})