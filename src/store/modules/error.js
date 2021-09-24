export default{
    namespaced: true,
    state:{
        error: "Not error found",
        mayShow: true
    },
    getters:{
        getError(state){
            return state.error
        },
        getMayShow(state){
            return state.mayShow
        }
    },
    mutations:{
        setError(state,message){
            state.error=message
        },
        setMayShow(state,message){
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
}