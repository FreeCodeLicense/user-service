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
        getFoods(state){
            return state.foods
        }
    },
    mutations:{
        setFoods(state, payload){
            payload.forEach(elem=>{
                state.foods.push(elem)
            })
        }
    },
    actions:{
        setFoodAction({commit}, payload){
            commit('setFoods',payload)
        }
    }
}
