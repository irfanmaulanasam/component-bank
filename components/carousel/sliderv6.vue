<template>
    <div id="sliderv6">
        <h1>Flexbox Slider</h1>
        <div class="wrap">
        <button onclick="prev()">&laquo;</button>
        <div class="sticky">♥</div>
        <div class="scroller">
            <ul class="items">
            <li class="item" style="background-image:url(https://farm6.staticflickr.com/5076/14164379250_71c3a5b32a_b.jpg);">HAMBURG</li>
            <li class="item" style="background-image:url(https://farm3.staticflickr.com/2937/14371160993_186df4a083_b.jpg);">URBAN LIGHTS</li>
            <li class="item" style="background-image:url(https://farm3.staticflickr.com/2914/14185397280_e51c40b1df_b.jpg);">SOUNDS</li>
            </ul>
        </div>
        <button onclick="next()">&raquo;</button>
        </div>
    </div>
</template>

<script>
import Modernizr from '../../plugins/modernizr-custom'
export default {
    name:'sliderv6',
    data(){
        return {
            wrap: Document.querySelector('.wrap'),
            items: Document.querySelector('.items'),
            itemCount: Document.querySelectorAll('.item').length,
            scroller: Document.querySelector('.scroller'),
            pos: 0,
            transform:Modernizr.prefixed('transform')
        }
    },methods:{
        setTransform() {
            this.items.style[transform] = 'translate3d(' + (-this.pos * items.offsetWidth) + 'px,0,0)';
        },
        prev() {
           this.pos = Math.max(this.pos - 1, 0);
            setTransform();
        }
    },
     computed:{
        resize(){
            return this.setTransform()
        } 
    }
}
</script>
<style>
@import url(https://fonts.googleapis.com/css?family=Noto+Sans:400,700);

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html{
  font: 18px 'Noto Sans', Arial, sans-serif;
  background: #333;
}

body{
  padding: 20px;
}

h1{
  text-align: center;
  color: #f0f0f0;
  margin-bottom: 1em;
}

.sticky{
  width: 100px;
  text-align: center;
  color: #be2221;
  font-size: 16px;
  background: #f0f0f0;
  line-height: 250px;
}

.wrap{
  display: flex;
  align-items: stretch;
  width: 90%;
  margin: auto;
}

button{
  width: 30px;
  border: none;
  background: transparent;
  color: #fff;
  font-size: 40px;
  text-align: center;
  outline: none;
  opacity: 0.5;
  transition: opacity 300ms ease-out;
  
}

button:hover{
opacity: 1;
}

.scroller{
  flex: 1;
  overflow: hidden;
}

.items{
  list-style-type: none;
  white-space: nowrap;
  font-size: 0;
  line-height: 0;
  transition: transform 1s ease-in-out;
}

.item{
  padding: 30px 20px;
  display: inline-block;
  width: 100%;
  height: 250px;
  font-size: 25px;
  letter-spacing: -0.03em;
  line-height: 1;
  font-weight: bold;
  background-size: cover;
  background-position: 50% 50%;
  text-transform: uppercase;
  box-shadow: inset 0 0 10px rgba(0,0,0,0.5);
  
}
.item:nth-child(2) {
color: #fff;
}
</style>
