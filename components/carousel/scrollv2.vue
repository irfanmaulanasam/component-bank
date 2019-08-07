<template>
    <div id="scroll">
        <p>
        offsetWidth
         is:   {{offsetWidth}}
         offsetHeight is:
            {{offsetHeight}}
        </p>
      <section class="card">
            <section v-for="item in products" :key="item.id" >
                  <div class="card--content" >
                      <cardProduct 
                      :image="item.image"
                      :name="item.name"
                      :price="item.price" 
                      />
                  </div>
            </section>
        </section>
  </div>
</template>
<script>
import cardProduct from './cardv1.vue'
export default {
    name:'scroll',
    components:{
      cardProduct,
    },
    props:{
      products:{
        type:Array,
        required:true
      }
    },
    data(){
        return {
            offsetWidth: null,
            offsetHeight:null
        }
    },
    mounted(){
       var elmnt = document.getElementsByClassName("card");
        var y = elmnt.scrollHeight;
        var x = elmnt.scrollWidth;
        document.getElementById ("scroll").innerHTML = "Height: " + y + "px<br>Width: " + x + "px";
    }
}
</script>
<style scoped>
body {
  width: 90%;
  height: 90%;
}
body {
  background-color: #2980b9;
  margin: 0;
  display: flex;
  justify-content: left;
  align-items: center;
}
.card {
  display: flex;
  min-width: 100%;
  min-height: 200px;
  padding-left: 5%;
  overflow-x: auto;
}
.card::-webkit-scrollbar {
  display: none;
}
.card--content {
  background-color: #ecf0f1;
  min-width: 200px;
  margin: 5px;
  padding: 0px;
  color: #34495e
}
</style>