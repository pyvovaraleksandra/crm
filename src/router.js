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
            meta: {
                layout: "Main",
            },
            component: Home,
        },
        {
            path: "/login",
            name: "login",
            meta: {
                layout: "Auth",
            },
            component: () => import("./views/Login.vue"),
        },
        {
            path: "/register",
            name: "register",
            meta: {
                layout: "Auth",
            },
            component: () => import("./views/Register.vue"),
        },
        {
            path: "/categories",
            name: "categories",
            meta: {
                layout: "Main",
            },
            component: () => import("./views/Categories.vue"),
        },
        {
            path: "/history",
            name: "history",
            meta: {
                layout: "Main",
            },
            component: () => import("./views/History.vue"),
        },
        {
            path: "/history-record",
            name: "history-record",
            meta: {
                layout: "Main",
            },
            component: () => import("./views/HistoryRecord.vue"),
        },
        {
            path: "/new-record",
            name: "new-record",
            meta: {
                layout: "Main",
            },
            component: () => import("./views/NewRecord.vue"),
        },
        {
            path: "/profile",
            name: "profile",
            meta: {
                layout: "Main",
            },
            component: () => import("./views/Profile.vue"),
        },
        {
            path: "/planning",
            name: "planning",
            meta: {
                layout: "Main",
            },
            component: () => import("./views/Planning.vue"),
        }
    ]
});