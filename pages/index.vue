<template>
  <div id="app">
    <h2>
      ({{height}} x {{width}})screen size - ({{clientHeight}} x {{clientWidth}}) app dimension
    </h2>
    <infiniteScrollv1/>
    <infiniteScrollv2/>
  </div>
</template>
<script>
import infiniteScrollv1 from '../components/infiniteScroll/infiniteScrollv1.vue'
import infiniteScrollv2 from '../components/infiniteScroll/infiniteScrollv2.vue'
export default {
  name:'app',
  components:{
    infiniteScrollv1,
    infiniteScrollv2
  },
  data(){
    return {
      rating:2.5,
      height:null,
      width:null,
      clientHeight:null,
      clientWidth:null
    }
  },
  mounted(){
    this.width = screen.width || window.screen.height*window.devicePixelRatio
    this.height = screen.height || window.screen.width*window.devicePixelRatio
    let app = document.querySelector('#app')
    this.clientHeight= app.clientHeight
    this.clientWidth= app.clientWidth
  }
}
</script>
<style>
#app{
  /* padding: 0 10% 0 10%; */
  align-self: center;
  min-width: 300px;
  max-width: 700px;
  background-color: aqua;
  margin: 0 5% 0 5%;
}

</style>

