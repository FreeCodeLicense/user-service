import { createApp } from 'vue'
import App from './App.vue'
import store from "./store/index"
import vueRouter from "./routes/index"

import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.withCredentials = true;

createApp(App).use(vueRouter).use(store).mount('#app')
