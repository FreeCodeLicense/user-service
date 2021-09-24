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
              <input type="text" placeholder="Name" class="form-control">
            </div>
            <div class="form-group mb-3">
              <input type="text" placeholder="Surname" class="form-control">
            </div>
            <div class="form-group mb-3">
              <input type="text" placeholder="Phone" class="form-control">
            </div>
            <div class="form-group mb-3">
              <input type="text" placeholder="Login" class="form-control">
            </div>
            <div class="form-group mb-3">
              <input type="password" placeholder="Password" class="form-control">
            </div>
            <div class="form-group mb-3">
              <input type="password" placeholder="Confirm password" class="form-control">
            </div>
            <button class="btn btn-outline-secondary" >Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register"
}
</script>

<style scoped>
.register{
  height: 85vh;
}
</style>