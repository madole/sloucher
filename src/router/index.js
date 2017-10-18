import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Timer from "@/components/Timer";
import SitUp from "@/components/SitUp";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/timer",
            name: "Timer",
            component: Timer,
        },
        {
            path: "/sit-up",
            name: "SitUp",
            component: SitUp,
        },
    ],
});
