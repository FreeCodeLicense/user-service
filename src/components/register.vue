<template>
  <div class="body register">
    <div class="container-lg h-100 container-xl container-fluid ">
      <div class="row h-100 align-items-center">
        <div class="col-md-6 d-none text-center d-lg-block d-md-block">
          <img class="w-75" src="@/assets/images/img-01.png" alt="Yuklanmadi">
        </div>
        <div class="col-md-6">
          <div class="p-5">
            <div class="form-group mb-3">
              <input type="text" v-model="name" placeholder="Name" class="form-control">
              {{ name }}
            </div>
            <div class="form-group mb-3">
              <input type="text" v-model="surname" placeholder="Surname" class="form-control">
            </div>
            <div class="form-group mb-3">
              <input type="text" v-model="email" placeholder="Email" class="form-control">
            </div>
            <div class="form-group mb-3">
              <input type="password" v-model="password" placeholder="Password" class="form-control">
            </div>
            <div class="form-group mb-3">
              <input type="password" v-model="confirmPassword" placeholder="Confirm password" class="form-control">
            </div>
            <button @click="register" class="btn btn-outline-secondary" >Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "register",
  data(){
    return{
      name:'',
      surname:'',
      email:'',
      password:'',
      confirmPassword:''

    }
  },
  methods:{
    async register(){
      if(this.password!==this.confirmPassword){
        console.log("Hello world")
        return
      }
      let request={
        name: this.name,
        surname: this.surname,
        email: this.email,
        logim: this.logim,
        password: this.password,
        confirmPassword: this.confirmPassword
      }
      let {data}=await axios.post("/api/register",request)

      if(data.status==='ok'){
        this.$store.dispatch("setTokenAction",data.token)
        this.$store.dispatch("setUserAction",data.user)
        this.$store.dispatch('error/setErrorAction',"Registration successfully complited!")
        this.$store.dispatch('error/setMayShowAction',true)
        document.cookie=`token=${data.token}`
        this.$router.push("/menu")
      } else {
        this.$store.dispatch('error/setErrorAction', data.message)
        this.$store.dispatch('error/setMayShowAction',true)
      }

    }
  }
}
</script>

<style scoped>
.register{
  height: 85vh;
}
</style>