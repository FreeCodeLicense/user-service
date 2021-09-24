<template>
  <div class="home">
      <div class="row">
        <div class="col-md-6 home-left"></div>
        <div class="col-md-6 home-right text-center text-white">
          <h1 class="display-2 text-white text-center pt-3" >Reviews</h1>
          <hr class="w-25 horizont" >
          <h5 class="display-6" >Organic Restaurant</h5>
          <p class="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolor doloremque dolorum
            ducimus excepturi fugiat iure nihil perspiciatis,
            placeat repellendus sequi, tempora velit voluptate voluptatum.
          </p>
          <h2>Ubaydullayev A</h2>
        </div>
      </div>
    </div>
</template>
<script>
export default {

}
</script>

<style scoped>

.home-left{
  background-image: url("../assets/images/home-back.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 90vh;

}
.home-right{
  background-color: #000000;
}
.horizont{
  height: 8px;
  color: white;
  display: block;
  margin-right: auto;
  margin-left: auto;
}
</style>