<template>
    <div id="sliderv10">

<div class="slider" id="slider">
  <div class="slide" id="slide-left">
    <div class="slide-holder">
      <div class="slide-bg bg-previous"></div>
      <div class="slide-bg bg-current"></div>
      <div class="slide-bg bg-next"></div>
    </div>
  </div>
  <div class="slide" id="slide-center">
    <div class="slide-holder">
      <div class="slide-bg bg-previous"></div>
      <div class="slide-bg bg-current"></div>
      <div class="slide-bg bg-next"></div>
    </div>
  </div>
  <div class="slide" id="slide-right">
    <div class="slide-holder">
      <div class="slide-bg bg-previous"></div>
      <div class="slide-bg bg-current"></div>
      <div class="slide-bg bg-next"></div>
    </div>
  </div>
</div><a class="arrow" href="#" id="left-arrow"><i class="fa fa-arrow-circle-o-left"></i></a><a class="arrow" href="#" id="right-arrow"><i class="fa fa-arrow-circle-o-right"></i></a>
    </div>
</template>
<script>
export default {
//     # Inspiration:
// # http://coolcarousels.frebsite.nl/c/59/
// # & 
// # https://css-tricks.com/slider-with-sliding-backgrounds/

// $right_arrow = $('#right-arrow')
// $left_arrow = $('#left-arrow')

// $right_arrow.click (e) ->
//   e.preventDefault()
//   $('.slide-holder').velocity('finish') # finish any current animations
//   animate_next('#slide-right')
//   animate_next('#slide-center', 175)
//   animate_next('#slide-left', 350)

// $left_arrow.click (e) ->
//   e.preventDefault()
//   $('.slide-holder').velocity('finish') # finish any current animations
//   animate_previous('#slide-left')
//   animate_previous('#slide-center', 175)
//   animate_previous('#slide-right', 350)
  
// animate_next = (selector, delay=0, cb=null) ->
//   setTimeout ->
//     $el = $("#{selector} .slide-holder") # select the elements
//     $bg_prev = $el.find('.bg-previous')
//     $bg_curr = $el.find('.bg-current')
//     $bg_next = $el.find('.bg-next')
//     $.Velocity.hook($el, "translateX", "-#{100/3}%") # set transform before animating
//     $.Velocity.animate($el, { # animate the transform
//       translateX: "-#{200/3}%"
//       duration: 350
//     }).then (elms) -> # reorder the slide-bg's and recenter the slide-holder
//       next_bg_image = $.Velocity.hook($bg_prev, "background-image")
//       $.Velocity.hook($bg_prev, "background-image", $.Velocity.hook($bg_curr, "background-image"))
//       $.Velocity.hook($bg_curr, "background-image", $.Velocity.hook($bg_next, "background-image"))
//       $.Velocity.hook($el, "translateX", "-#{100/3}%")
//       $.Velocity.hook($bg_next, "background-image", next_bg_image)
//       cb(elms) if typeof cb is 'function'
//   , delay
  
// animate_previous = (selector, delay, cb) ->
//   setTimeout ->
//     $el = $("#{selector} .slide-holder") # select the elements
//     $bg_prev = $el.find('.bg-previous')
//     $bg_curr = $el.find('.bg-current')
//     $bg_next = $el.find('.bg-next')
//     $.Velocity.hook($el, "translateX", "-#{100/3}%") # set transform before animating
//     $.Velocity.animate($el, { # animate the transform
//       translateX: "0"
//       duration: 350
//     }).then (elms) -> # reorder the slide-bg's and recenter the slide-holder
//       prev_bg_image = $.Velocity.hook($bg_next, "background-image")
//       $.Velocity.hook($bg_next, "background-image", $.Velocity.hook($bg_curr, "background-image"))
//       $.Velocity.hook($bg_curr, "background-image", $.Velocity.hook($bg_prev, "background-image"))
//       $.Velocity.hook($el, "translateX", "-#{100/3}%")
//       $.Velocity.hook($bg_prev, "background-image", prev_bg_image)
//       cb(elms) if typeof cb is 'function'
//   , delay
}
</script>
<style>
html, body {
  margin: 0;
  height: 100%;
  background: #F4F1E9;
}

.arrow {
  font-size: 2em;
  color: #363f85;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  transition: 0.2s;
}
.arrow#left-arrow {
  -webkit-transform: translate(-11em, -50%);
  -moz-transform: translate(-11em, -50%);
  -ms-transform: translate(-11em, -50%);
  -o-transform: translate(-11em, -50%);
  transform: translate(-11em, -50%);
}
.arrow#right-arrow {
  -webkit-transform: translate(10em, -50%);
  -moz-transform: translate(10em, -50%);
  -ms-transform: translate(10em, -50%);
  -o-transform: translate(10em, -50%);
  transform: translate(10em, -50%);
}
.arrow:hover {
  color: #B3B2AD;
}

.slider {
  position: relative;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 600px;
  height: 200px;
}

.slide {
  float: left;
  position: relative;
  width: 33.3333333333%;
  height: 100%;
  overflow-x: hidden;
  border-radius: 0%;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
}
.slide#slide-center {
  z-index: 1;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.75);
  -webkit-transform: scale(1.3);
  -moz-transform: scale(1.3);
  -ms-transform: scale(1.3);
  -o-transform: scale(1.3);
  transform: scale(1.3);
}

.slide-holder {
  width: 300%;
  height: 100%;
  display: block;
  position: relative;
  top: 0;
  -webkit-transform: translateX(-33.3333333333%);
  -moz-transform: translateX(-33.3333333333%);
  -ms-transform: translateX(-33.3333333333%);
  -o-transform: translateX(-33.3333333333%);
  transform: translateX(-33.3333333333%);
}

.slide-bg {
  width: 33.3333333333%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: inline-block;
  margin: 0;
}

#slide-left .bg-previous {
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/7/72/Peter_Paul_Rubens_(taller)_-_Rapto_de_las_Sabinas.jpg");
}
#slide-left .bg-current {
  background-image: url("http://images.metmuseum.org/CRDImages/ep/original/46_160.jpg");
}
#slide-left .bg-next {
  background-image: url("http://uploads6.wikiart.org/images/pablo-picasso/the-abduction-of-sabines-1962-1.jpg");
}

#slide-center .bg-previous {
  background-image: url("http://images.metmuseum.org/CRDImages/ep/original/46_160.jpg");
}
#slide-center .bg-current {
  background-image: url("http://uploads6.wikiart.org/images/pablo-picasso/the-abduction-of-sabines-1962-1.jpg");
}
#slide-center .bg-next {
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/7/72/Peter_Paul_Rubens_(taller)_-_Rapto_de_las_Sabinas.jpg");
}

#slide-right .bg-previous {
  background-image: url("http://uploads6.wikiart.org/images/pablo-picasso/the-abduction-of-sabines-1962-1.jpg");
}
#slide-right .bg-current {
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/7/72/Peter_Paul_Rubens_(taller)_-_Rapto_de_las_Sabinas.jpg");
}
#slide-right .bg-next {
  background-image: url("http://images.metmuseum.org/CRDImages/ep/original/46_160.jpg");
}

</style>

