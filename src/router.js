import Router from "vue-router";
import Home from "./views/Home.vue"
import Vue from "vue"

Vue.use(Router);

export default new Router({
    mode: "history",

    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        }
    ]
});