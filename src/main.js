import Vue from 'vue'
import Vuelidate from "vuelidate"
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter.js'
import 'materialize-css/dist/js/materialize.min'


Vue.filter('date', dateFilter);
Vue.use(Vuelidate);

new Vue({
    router,
    store,
  el: '#app',
  render: h => h(App)
});

