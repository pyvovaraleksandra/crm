import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'

new Vue({
    router,
    store,
  el: '#app',
  render: h => h(App)
});
