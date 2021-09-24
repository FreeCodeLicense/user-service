<template>
  <div id="showerror">
        {{ getErrorMessage }}
        <div @click="exit" class="exit">x</div>
  </div>
</template>

<script>
export default {
    computed:{
        getErrorMessage(){
            return this.$store.getters['error/getError']
        }
    },
    methods:{
        exit(){
            this.$store.dispatch("error/setMayShowAction",false)
        }
    }
}
</script>

<style scoped>
#showerror{
    position: absolute;
    top: 30px;
    background-color: bisque;
    width: 50%;
    left: 25%;
    text-align: center;
    padding: 15px;
}


.exit{
    color: red;
    cursor: pointer;
    position: absolute;
    padding: 4px 10px;
    right: 0;
    top:0;

}

</style>