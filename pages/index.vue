<template>
  <div id="app">
    <ColorPicker :colors="colors" @setColor="setColor" />
    <ColorGrid :color="color" />
  </div>
</template>
<script>
import colorPicker from '@components/color/pickerv2.vue'
export default {
  name:'app',
  components:{
    colorPicker
  },
  data(){
    return {
      rating:2.5,
      height:null,
      width:null,
      clientHeight:null,
      clientWidth:null,
      menu,
      colors: ["#FFF", "#000", "#AF1E2D", "#00EEAE", "#FFCE00"],
      color: "#FFFFFF"
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
/* #app{
  padding: 0 10% 0 10%;
  align-self: center;
  min-width: 300px;
  max-width: 700px;
  background-color: aqua;
  margin: 0 5% 0 5%;
} */

</style>

