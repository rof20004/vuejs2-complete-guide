import Vue from 'vue'

Vue.filter('toLowercase', value => {
  return value.toLowerCase()
})