<template>
  <div class="body">
    <div class="container-lg container-xl container-fluid ">
      <div class="row p-lg-5 p-md-5 p-2">
        <div class="col">
          <h1 class="menu-header text-center">
            Menu
          </h1>
          <p class="menu-text text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Architecto dolores minima nemo nihil quos tempore voluptas voluptatibus!
          </p>
        </div>
      </div>
      <div class="row">
        <div v-for="food in getFoods" :key="food._id" class="col-md-6  col-lg-6 mb-3 col-xl-6">
          <div class="card">
            <div class="container p-3">
              <div class="row">
                <div class="col-md-6">
                  <img class="w-100" src="@/assets/images/salami.jpg" alt="Yuklamadi">
                </div>
                <div class="col-md-6">
                  <h4 class="food-name">
                    {{ food.name }}
                  </h4>
                  <p class="food-text">
                    {{ food.text }}
                  </p>
                  <span class="food-price">
                  {{ food.pri }}
                  </span>
                  <button class="btn  btn-secondary" >Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    getFoods(){
      return this.$store.getters["foods/getFoods"]
    }
  }
}
</script>

<style scoped>
  .food-name{
    font-size: 14px;
  }
  .food-text{
    font-size: 14px;
  }
  .food-price{
    margin-right: 10px;
  }
</style>