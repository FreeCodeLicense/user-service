import { createStore } from "vuex"
import error from "./modules/error"
import foods from "./modules/foods"

export default new createStore({
    state:{
        user:null,
        token: ""
    },
    getters:{
        getUser(state){
            return state.user
        },
        getToken(state){
            return state.token
        }
    },
    mutations:{
        setUser(state,payload){
            state.user=payload
        },
        setToken(state,payload){
            state.token=payload
        }
    },
    actions:{
        setUserAction({commit},payload){
            commit("setUser",payload)
        },
        setTokenAction({commit}, payload){
            commit("setToken",payload)
        }
        
    },
    modules:{
        error: error,
        foods: foods
    }

})
