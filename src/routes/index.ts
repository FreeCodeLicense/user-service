
import { createRouter,createWebHistory, RouteRecordRaw } from "vue-router"

import Home from "@/components/home.vue"
import Login from "@/components/login.vue"
import Menu from "@/components/menu.vue"
import Register from "@/components/register.vue";
// import Admin from "@/components/admin";


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
                const cookies=document.cookie.split(' ').map(elem=>{ const values=elem.split('='); return { [values[0]] : values[1] }  }) 
                const token=cookies.find(elem=>{ return elem.token })

                if(!token){
                    next("/login")
                } else if(token.token ===""){
                    next("/login")
                } else next()
    
            }
        },
        // {
        //     path: "/admin",
        //     component: Admin,
        //     children:[

        //     ]
        // }
    ] as Array<RouteRecordRaw>
})