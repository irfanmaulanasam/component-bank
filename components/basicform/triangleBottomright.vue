<template>
    <div class="triangle-bottomright"></div>
</template>
<script>
export default {
    name:'triangleBottomRight',
    props:{
        size:{
            type:Number,
            required:true,
            default:5
        },
        color:{
            type:String,
            required:true,
            default:'black'
        }
    }
}
</script>

<style>
#triangle-bottomright {
      width: 0;
      height: 0;
      border-bottom: 100px solid red;
      border-left: 100px solid transparent;
    }
</style>
