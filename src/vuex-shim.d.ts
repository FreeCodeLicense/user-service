import { ComponentCustomProperties } from "vue"
import { Store } from "vuex"
import  { User, Product } from "@/models/index"

declare module "@vue/runtime-core" {
    
    interface State {
        user: User,
        token: string,
        foods: Array<Product>,
        error: string,
        mayShow: boolean
    }

    interface ComponentCustomProperties {
        $store: Store<State>
    }
}