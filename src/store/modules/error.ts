import { Module } from "vuex"

export default {
    namespaced: true,
    state:{
        error: "Not error found",
        mayShow: true
    },
    getters:{
        getError(state: any){
            return state.error
        },
        getMayShow(state: any){
            return state.mayShow
        }
    },
    mutations:{
        setError(state: any,message){
            state.error=message
        },
        setMayShow(state: any,message){
            state.mayShow=message
        }
    },
    actions:{
        setErrorAction({ commit},message){
            commit("setError",message)
        },
        setMayShowAction({commit},message){
            commit("setMayShow",message)
        }
    }
} as Module<any, any>