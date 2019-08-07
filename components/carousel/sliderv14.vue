<template>
    <div id="wrapper">
        	<div id="big">
		<div class="carousel" v-for="(item,index) in image.big" :key="index">
			<img :src="item" alt="">
		</div>
	</div>
        <div id="small">
            <div class="carousel">
                <img src="http://coolcarousels.frebsite.nl/c/67/img/small/car1-a.jpg" width="100" height="100" />
                <img src="http://coolcarousels.frebsite.nl/c/67/img/small/car1-b.jpg" width="100" height="100" />
                <img src="http://coolcarousels.frebsite.nl/c/67/img/small/car1-c.jpg" width="100" height="100" />
                <img src="http://coolcarousels.frebsite.nl/c/67/img/small/car1-d.jpg" width="100" height="100" />
                <img src="http://coolcarousels.frebsite.nl/c/67/img/small/car2-a.jpg" width="100" height="100" />
                <img src="http://coolcarousels.frebsite.nl/c/67/img/small/car2-b.jpg" width="100" height="100" />
                <img src="http://coolcarousels.frebsite.nl/c/67/img/small/car2-c.jpg" width="100" height="100" />
                <img src="http://coolcarousels.frebsite.nl/c/67/img/small/car3-a.jpg" width="100" height="100" />
                <img src="http://coolcarousels.frebsite.nl/c/67/img/small/car3-b.jpg" width="100" height="100" />
            </div>
            <a id="next" href="#">&rsaquo;</a>
        </div>
    </div>
</template>
<script>
export default {
	name:'galery',
	data(){
		return {
			bigWidth:900,
			bigHeight:450,
			smallWidth:100,
			smallHeight:100,
			padding:10,
			image:{
				big:[
				"http://coolcarousels.frebsite.nl/c/67/img/big/car1-a.jpg",
                "http://coolcarousels.frebsite.nl/c/67/img/big/car1-c.jpg",
                "http://coolcarousels.frebsite.nl/c/67/img/big/car1-b.jpg",
                "http://coolcarousels.frebsite.nl/c/67/img/big/car1-d.jpg",
                "http://coolcarousels.frebsite.nl/c/67/img/big/car2-a.jpg",
                "http://coolcarousels.frebsite.nl/c/67/img/big/car2-b.jpg",
                "http://coolcarousels.frebsite.nl/c/67/img/big/car2-c.jpg",
                "http://coolcarousels.frebsite.nl/c/67/img/big/car3-a.jpg",
                "http://coolcarousels.frebsite.nl/c/67/img/big/car3-b.jpg",
				],
				small:[
				"http://coolcarousels.frebsite.nl/c/67/img/small/car1-a.jpg",
                "http://coolcarousels.frebsite.nl/c/67/img/small/car1-b.jpg",
                "http://coolcarousels.frebsite.nl/c/67/img/small/car1-c.jpg",
                "http://coolcarousels.frebsite.nl/c/67/img/small/car1-d.jpg",
                "http://coolcarousels.frebsite.nl/c/67/img/small/car2-a.jpg",
                "http://coolcarousels.frebsite.nl/c/67/img/small/car2-b.jpg",
                "http://coolcarousels.frebsite.nl/c/67/img/small/car2-c.jpg",
                "http://coolcarousels.frebsite.nl/c/67/img/small/car3-a.jpg",
                "http://coolcarousels.frebsite.nl/c/67/img/small/car3-b.jpg",
				]
			}
		}
	}
}
</script>

<style scoped>
#wrapper {
	background: #ddd;
	width: 900px;
	height: 450px;
	padding: 10px;
	margin: -235px 0 0 -460px;
	position: absolute;
	top: 50%;
	left: 50%;
}
  .big{
	  background-color: gray;
	  padding: 10px;
	  overflow: hidden;
	  outline:5px dashed aqua;
  }
  .big section {
	  padding: 3px dashed red;
	  background-color: aliceblue;
  }
  #small {
	width: 900px;
	height: 140px;
	overflow: hidden;
	position: absolute;
	bottom: 10px;
	left: 10px;
}
#small .carousel {
	float: left;
}
#small img,
#next {
	background: rgba( 255, 255, 255, 0.2 );
	display: block;
	width: 100px;
	height: 100px;
	padding: 10px;
	margin: 0 0 20px 20px;
	float: left;
	
	-webkit-transition: background 0.6s ease;
	-moz-transition: background 0.6s ease;
	transition: background 0.6s ease;
}
</style>
