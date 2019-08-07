<template lang="html">
  <div class="slideshow">
    <!-- Slideshow container -->
    <div class="slideshow-container">

      <!-- Full-width images with number and caption text -->
      <div
        v-for="(slide, index) of slides" :key="index"
        class="slide fade" :class="{'is-active': curIdx === index}">

        <div class="numbertext" v-if="showNumberText">{{index + 1}} / {{slideLength}}</div>
        <img :src="slide.link ||slide.url" :alt="slide.text">
          
          <!-- text property -->
          <div class="text" :class="{'is-overlapped': overlapText}" v-if="showText">
            <p v-text="slide.text"></p>
          </div>
          <!-- indicators property inside -->
          <div class="dots-inside" v-if="showIndicator && indicatorPosition === 'inside'">
            <div v-if="dotproperty === 'dot'" v-for="(num, index) of slideLength" :key="index" class="dot" :class="{'is-active': curIdx === index }" @click="changeSlide(index)"></div>
            <div v-if="dotproperty === 'square'" v-for="(num, index) of slideLength" :key="index" class="square" :class="{'is-active': curIdx === index }" @click="changeSlide(index)"></div>
            <div v-if="dotproperty === 'ouval'" v-for="(num, index) of slideLength" :key="index" class="ouval" :class="{'is-active': curIdx === index }" @click="changeSlide(index)"></div>
          </div>
      </div>

      <!-- Next and previous buttons -->
      <a class="prev" @click.prevent="prevSlide()">&#10094;</a>
      <a class="next" @click.prevent="nextSlide()">&#10095;</a>
    <!-- thumbnail image -->
      <div class="gallery-container" v-if="isGallery">
        <div
          v-for="(slide, index) of slides" :key="index" class="column">
          <img :src="slide.link" :alt="slide.text" class="gallery" :class="{'is-active': curIdx === index}" @click="changeSlide(index)">
        </div>
      </div>
    </div>
    <!-- indicators property outside-->
    <div class="dots" v-if="showIndicator && indicatorPosition === 'outside'">
      <div v-if="dotproperty === 'dot'" v-for="(num, index) of slideLength" :key="index" class="dot" :class="{'is-active': curIdx === index }" @click="changeSlide(index)"></div>
      <div v-if="dotproperty === 'square'" v-for="(num, index) of slideLength" :key="index" class="square" :class="{'is-active': curIdx === index }" @click="changeSlide(index)"></div>
      <div v-if="dotproperty === 'ouval'" v-for="(num, index) of slideLength" :key="index" class="ouval" :class="{'is-active': curIdx === index }" @click="changeSlide(index)"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slideshow',
  props: {
    slides: {
      type: Array,
      required: true
    },
    isGallery: Boolean,
    showIndicator: Boolean,
    dotproperty:String,
    indicatorPosition:String,
    showText: Boolean,
    showNumberText: Boolean,
    overlapText: Boolean,
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      curIdx: this.activeIndex
    }
  },
  computed: {
    slideLength() {
      return this.slides.length
    }
  },
  watch: {
    activeIndex() {
      if (this.curIdx !== this.activeIndex) {
        this.curIdx = this.activeIndex
      }
    }
  },
  methods: {
    changeSlide(num) {
      this.curIdx = this.slideLength <= num ? 0 : num
      this.$emit('change-slide', this.curIdx)
      this.$emit('update:activeIndex', this.curIdx)
    },
    prevSlide() {
      this.changeSlide(this.curIdx > 0 ? this.curIdx - 1 : this.slideLength - 1)
    },
    nextSlide() {
      this.changeSlide(
        this.curIdx >= this.slideLength - 1 ? 0 : this.curIdx + 1
      )
    }
  }
}
</script>

<style >
/* Slideshow container */
/* .slideshow { */
  /* Hide the images by default */
  /* Next & previous buttons */
  /* Position the "next button" to the right */
  /* On hover, add a black background color with a little bit see-through */
  /* Caption text */
  /* Number text (1/3 etc) */
  /* The dots/bullets/indicators */
  /* Fading animation */
/* } */
.slideshow .slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
  /* outline: 1px dashed red; */
}
.slideshow .slide {
  display: none;
  flex-direction: column;
  /* outline: 1px dashed blue; */
}
.slideshow .slide.is-active {
  display: flex;
}
.slideshow .dots {
  text-align: center;

}
.slideshow .slide img {
  display: inline-block;
  position: relative;
}
.slideshow .dots-inside {
  text-align: center;
  position: relative;
  background-color: transparent;
  float: right;
  right: 10px;
  top: -30px;
}
.slideshow .prev, .slideshow .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
}
.slideshow .next {
  right: 0;
  border-radius: 3px 0 0 3px;
}
.slideshow .prev:hover, .slideshow .next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
.slideshow .text {
  font-size: 15px;
  padding: 2px 15px;
  color: white;
  background-color: #222;
  text-align: center;
  position: relative;
}
.slideshow .text.is-overlapped {
  position: absolute;
  width: 100%;
  top: 0px;
  padding: 0;
  color: #f2f2f2;
  background-color: rgba(0, 0, 0, 0.2);
}
.slideshow .numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
}
.slideshow .dot {
  cursor: pointer;
  height: 10px;
  width: 10px;
  margin: 4px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}
.slideshow .dot.is-active, .slideshow .dot:hover {
  background-color: #717171;
}
.slideshow .square {
  cursor: pointer;
  height: 10px;
  width: 10px;
  margin: 0 4px;
  background-color: #bbb;
  border-radius: 10%;
  display: inline-block;
  transition: background-color 0.6s ease;
}
.slideshow .square.is-active, .slideshow .square:hover {
  background-color: #717171;
}
.slideshow .ouval {
  cursor: pointer;
  height: 4px;
  width: 20px;
  margin: 0 4px;
  background-color: #bbb;
  border-radius: 25%;
  display: inline-block;
  transition: background-color 0.6s ease;
}
.slideshow .ouval.is-active, .slideshow .ouval:hover {
  background-color: #717171;
}

.slideshow .gallery-container {
  display: flex;
  max-width: 1000px;
  overflow-y: hidden;
  overflow-x: auto;
  /* outline: 1px dashed red; */
}
.slideshow .gallery-container .column {
  max-width: 20%;
  min-width: 15%;
  /* height: 110px; */
  margin: 2px;
  /* outline: 1px dashed #222; */
}
.slideshow .gallery-container .column .gallery {
  width: 100%;
  height: 100%;
  opacity: 0.6;
  cursor: pointer;
}
.slideshow .gallery-container .column .gallery.is-active, .slideshow .gallery-container .column .gallery:hover {
  opacity: 1;
}
.slideshow .fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}
@-webkit-keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

</style>
