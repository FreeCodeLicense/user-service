<template>
  <div class="body login">
    <div class="container-lg h-100 container-xl container-fluid ">
      <div class="row h-100 align-items-center">
        <div class="col-md-6 d-none text-center d-lg-block d-md-block">
          <img class="w-75" src="@/assets/images/img-01.png" alt="Yuklanmadi">
        </div>
        <div class="col-md-6">
          <div class="p-5">
            <div class="form-group mb-3">
              <input type="text" v-model="email" placeholder="Email" class="form-control">
            </div>
            <div class="form-group mb-3">
              <input type="password" v-model="password" placeholder="Password" class="form-control">
            </div>
            <button @click="submitLogin" class="btn btn-outline-secondary" >Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data(){
    return{
      email:"",
      password:""
    }
  },
  methods:{
    submitLogin(){
      axios.post(`/api/login`,{
        email: this.email,
        password: this.password,
      }).then(({data})=>{
        if(data.status=="error"){
          this.$store.dispatch('error/setErrorAction',data.message)
          this.$store.dispatch('error/setMayShowAction',true)
        } else if(data.status=="ok"){
         this.$store.dispatch('setUserAction',data.user)
         this.$store.dispatch('setTokenAction',data.token)
         this.$store.dispatch('error/setErrorAction',"Auth successfully complited!")
         this.$store.dispatch('error/setMayShowAction',true)
         document.cookie=`token=${data.token}`
         this.$router.push("/menu")
        }
        
      })
    }
  }
}
</script>

<style>
.login{
  height: 85vh;
}
</style>