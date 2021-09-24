
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
            path:"/menu",
            beforeEnter(to, from , next){
                let cookies=document.cookie.split(' ').map(elem=>{ let values=elem.split('='); return { [values[0]] : values[1] }  }) 
                let token=cookies.find(elem=>{ return elem.token })

                if(typeof token.token == undefined || token.token===''){
                    next("/login")
                } else {
                    next()
                }
    
            }
        }
    ]
})