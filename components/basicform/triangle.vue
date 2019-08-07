<template>
    <div class="container">
	<div class="rotator">
		<div class="triangle"></div>
		<div class="triangle"></div>
		<div class="triangle"></div>
		<div class="triangle"></div>
	</div>
</div>
</template>
<style lang="scss" scoped>
$duration: 3s;
$colors: #55efc4 #ffeaa7 #fd79a8;

html, body {
	height: 100%;
}

body {
	margin: 0;
	overflow: hidden;
	background: #2d3436;
	color: #fab1a0;
}

@keyframes rotateTriangleRotate {
	from {
		transform: rotate(0deg);
	}
	
	50%, to {
		transform: rotate(180deg);
	}
}

.rotator {
	animation: rotateTriangleRotate 2 * $duration steps(1) infinite;
}

@keyframes shrinkTriangleShrink {
	from {
		transform: scale(1);
	}
	to {
		transform: scale(0.5);
	}
}

.container {
	position: absolute;
	top: 50%;
	left: 50%;
	font-size: 100px;
	animation: shrinkTriangleShrink $duration linear infinite;
	// &::after {
	// 	content: "";
	// 	position: absolute;
	// 	width: 2px;
	// 	height: 2px;
	// 	top: 50%;
	// 	left: 50%;
	// 	transform: translate(-50%, -50%);
	// 	background: #f00;
	// }
}

.triangle {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 1em;
	height: .866em;
	margin-left: -0.5em;
	margin-top: -0.5774em;
	overflow: hidden;
	transform-origin: 50% 66.666%;
	
	&::before {
		content: "";
		display: block;
		position: absolute;
		bottom: 0;
		left: 50%;
		width: 0.707em;
		height: 0.707em;
		background: currentColor;
		transform: translate(-50%, 50%) scaleY(1.732) rotate(45deg);		
	}
	
	@for $i from 1 through 3 {
		&:nth-child(#{$i}) {
			animation: growTrianglesGrow-#{$i} $duration infinite; 
		}
		
		@keyframes growTrianglesGrow-#{$i} {
			from, #{$i * 10%} {
				transform: scale(0) rotate(60deg + 120deg * $i) translateY(-66.1%);
				color: nth($colors, $i);
			}
			75% {
				transform: scale(1) rotate(60deg + 120deg * $i) translateY(-66.1%);
				color: nth($colors, $i);
			}
			to {
				transform: scale(1) rotate(60deg + 120deg * $i) translateY(-66.1%);
				color: currentColor;
			}
		}		
	}
}


</style>
