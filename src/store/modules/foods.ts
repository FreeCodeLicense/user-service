import { Module } from "vuex"

export default {
    namespaced: true,
    state: {
        foods: [
            {
                name: "Original food",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, quasi!",
                price:  18
            },
            {
                name: "Original food",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, quasi!",
                price:  18
            },
            {
                name: "Original food",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, quasi!",
                price:  18
            },
            {
                name: "Original food",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, quasi!",
                price:  18
            },
            {
                name: "Original food",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, quasi!",
                price:  18
            },
        ]
    },
    getters:{
        getFoods(state: any){
            return state.foods
        }
    },
    mutations:{
        setFoods(state : any, payload){
            payload.forEach((elem: any)=>{
                state.foods.push(elem)
            })
        }
    },
    actions:{
        setFoodAction({commit}, payload){
            commit('setFoods',payload)
        }
    }

} as Module<any, any>

