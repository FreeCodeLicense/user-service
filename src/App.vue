<template>
  <nav class="navbar navbar-expand-lg shadow navbar-light bg-light">
    <div class="container-fluid container-lg ">
      <a class="navbar-brand" href="/">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse justify-content-md-end navbar-collapse" id="navbarNavAltMarkup">
        <div v-if="getUser" class="navbar-nav">
          <router-link tag="a" to="/" class="nav-link " aria-current="page" href="#">Home</router-link>
          <router-link tag="a" to="/menu" class="nav-link ">Menu</router-link>
          <div @click="logout" class="nav-link">Logout</div>
          <div class="nav-link cart" ><img class="cart-img" src="@/assets/images/korzinka.png" alt="Yuklanmdi"><span class="cart-load-number">1</span></div>
        </div>
        <div v-else class="navbar-nav">
          <router-link tag="a" to="/" class="nav-link " aria-current="page" href="#">Home</router-link>
          <router-link tag="a" to="/login" class="nav-link" href="#">Login</router-link>
          <router-link tag="a" to="/register" class="nav-link" href="#">Register</router-link>
        </div>
      </div>
    </div>
  </nav>
  <div class="body">
    <router-view></router-view>
  </div>

  <error-component v-if="getMayShow" />
  
  <div class="footer p-lg-4 p-md-3 p-2 ">
    <div class="col text-center text-white">
      Website was made by Abrorbek!
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import { onMounted } from '@vue/runtime-core'

import errorComponent from "./components/showerror.vue"
// import axios from 'axios'

export default {
  name: 'App',
  created(){
    let cookies=document.cookie.split(' ').map(elem=>{ let values=elem.split('='); return { [values[0]] : values[1] }  }) 
    let token=cookies.find(elem=>{ return elem.token })
    if(!token){
      return
    }
    if(token.token ===""){
      return
    }
    axios.get(`/api/restore?token=${token.token}`).then(({data})=>{
      if(data.status==="ok"){
        this.$store.dispatch("setTokenAction",token.token)
        this.$store.dispatch("setUserAction",data.user)
      } else {
        this.$store.dispatch('error/setErrorAction', data.message)
        this.$store.dispatch('error/setMayShowAction',true)
      }
    })

    axios.get(`/api/menu?token=${token.token}`).then(({data})=>{
      if(data.status==="ok"){
        this.$store.dispatch("foods/setFoodAction",data.foods)
      } else {
        this.$store.dispatch('error/setErrorAction', data.message)
        this.$store.dispatch('error/setMayShowAction',true)
      }
    })
  },
  methods:{
    logout(){
      document.cookie="token=''"
      this.$store.dispatch("setTokenAction",null)
      this.$store.dispatch("setUserAction","")
      this.$router.push("/")
    }
  },
  components:{
    errorComponent
  },
  computed:{
    getMayShow(){
      return this.$store.getters['error/getMayShow']
    },
    getUser(){
      return this.$store.getters.getUser
    }
  }
}
</script>

<style>
.body{
  background-color:  #e5e5e5;
}
.nav-link{
  cursor: pointer;
}
.footer{
  background-color: #333333;
}
.cart{
  width: 55px;
  position: relative;
}
.cart .cart-img{
  width: 100%;
}
.cart-load-number{
  font-size: 12px;
  color: white;
  text-align: center;
  position: absolute;
  background-color: cadetblue;
  width: 18px;
  height: 18px;
  border-radius: 100%;
  bottom: 0;
  right: 0;
}
</style>
