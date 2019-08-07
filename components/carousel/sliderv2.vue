<template>
    <div id="slide">
        <div class="slideshow-container">
            <!-- <div class="mySlides fade">
                <div class="numbertext">1 / 3</div>
                    <img src="https://www.w3schools.com/howto/img_nature_wide.jpg" style="width:100%">
                <div class="text">Caption Text</div>
            </div>
            <div class="mySlides fade">
                <div class="numbertext">2 / 3</div>
                    <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" style="width:100%">
                <div class="text">Caption Two</div>
            </div> -->

            <div class="mySlides fade" v-for="(item,index) in arrSlide" :key="index">
                <div class="numbertext">{{index+1}} / {{arrSlide.length}} </div>
                  <div class="fill">
                      <img :src="item.download_url">
                  </div>
                <div class="text">{{item.author}}</div>
            </div>

        <a class="prev" @click="plusSlides(-1)">&#10094;</a>
        <a class="next" @click="plusSlides(1)">&#10095;</a>

        </div>
        <br>

        <div style="text-align:center">
        <span class="dot"  v-for="(item,index) in arrSlide" :key="index" @click="currentSlide(index+1)"></span> 
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'slide',
    data(){
        return {
            slideIndex:1,
            arrSlide:null
        }
    },
    computed: {
      getImage(){
        axios.get(`https://picsum.photos/v2/list?page=2&limit=45`)
        .then(Response=>{
          this.arrSlide = Response.data
          this.showSlides(1)
        })
      }
    },
    methods: {
        plusSlides(n){
            this.showSlides(this.slideIndex+= n)
        },
        currentSlide(n){
            this.showSlides(this.slideIndex = n)
        },
        showSlides(n){
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {this.slideIndex = 1}    
            if (n < 1) {this.slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[this.slideIndex-1].style.display = "block";  
            dots[this.slideIndex-1].className += " active";
        }
    }
}
</script>

<style>
* {box-sizing: border-box}
body {font-family: Verdana, sans-serif; margin:0}
.mySlides {display: none}
img {vertical-align: middle;}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}
.fill {
    display: flex;
    justify-content: fill;
    overflow: hidden;
    /* width:500px; */
    height:300px;
}
.fill img {
    flex-shrink: 0;
}
/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev, .next,.text {font-size: 11px}
}
</style>