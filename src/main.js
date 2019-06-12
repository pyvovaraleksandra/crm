import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter.js'
import 'materialize-css/dist/js/materialize.min'


Vue.filter('date', dateFilter);

new Vue({
    router,
    store,
  el: '#app',
  render: h => h(App)
});

