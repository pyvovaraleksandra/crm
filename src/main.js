import Vue from 'vue'
import Vuelidate from "vuelidate"
import App from './App.vue'
import router from './router'
import store from './store/index'
import dateFilter from '@/filters/date.filter.js'
import messagePlugin from '@/utils/message.plugin.js'
import 'materialize-css/dist/js/materialize.min'

import firebase from "firebase/app";
import "firebase/auth"
import "firebase/database"

Vue.filter('date', dateFilter);
Vue.use(Vuelidate);
Vue.use(messagePlugin);

firebase.initializeApp({
    apiKey: "AIzaSyCnCscpnYeq7NazwewVSgUArPOudPBRVG8",
    authDomain: "vue-alemyk-crm.firebaseapp.com",
    databaseURL: "https://vue-alemyk-crm.firebaseio.com",
    projectId: "vue-alemyk-crm",
    storageBucket: "vue-alemyk-crm.appspot.com",
    messagingSenderId: "93536701766",
    appId: "1:93536701766:web:4df51163357a5940"
});

let app;

firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            router,
            store,
            el: '#app',
            render: h => h(App)
        });
    }

});



