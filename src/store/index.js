import { createStore } from "vuex"
import error from "./modules/error"

export default new createStore({
    state:{
        user:null,
        token: ""
    },
    getters:{
        getUser(state){
            return state.user
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
        error: error
    }

})
