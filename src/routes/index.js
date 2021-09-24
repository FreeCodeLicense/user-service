
import { createRouter,createWebHistory } from "vue-router"

import Home from "../components/home"
import Login from "../components/login"
import Menu from "../components/menu"
import Register from "@/components/register";

export default createRouter({
    history:createWebHistory(),
    routes:[
        {
            component:Home,
            path:"/"
        },
        {
            component:Login,
            path:"/login"
        },
        {
            component:Register,
            path:"/register"
        },
        {
            component:Menu,
            path:"/menu"
        }
    ]
})