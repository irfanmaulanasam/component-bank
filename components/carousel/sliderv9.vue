<template>
  <div class="carousel">
    <div class="posts">
      <div class="postbox" v-for="(w,id) in works" :key="id" :class="{cur_item : id==((now_index + works.length - Math.floor(works.length / 2)) % 6),last_item : id==((last_index + works.length - Math.floor(works.length / 2)) % 6)}" :style="postleft(id)">
        <div class="cover" :style="bg_css(w.cover)">
          <div class="infos">
            <h1>{{w.title}}</h1>
            <h5>{{w.description}}</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="control_left" @click="delta(-1)">
      <i class="fa fa-angle-left" aria-hidden="true"></i>
    </div>
    <div class="control_right" @click="delta(1)">
      <i class="fa fa-angle-right" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
import Store from '../../store'
var works = [
  {
    title: 'set',
    description: 'what is this',
    cover: 'https://unsplash.it/400/300?image=1084'
  },
  {
    title: 'start',
    description: '不會游泳只好搭船',
    cover: 'https://unsplash.it/400/300?image=1083'
  },
  {
    title: '老年學鋼琴',
    description: '學習永遠不嫌晚！',
    cover: 'https://unsplash.it/400/300?image=1082'
  },
  {
    title: '高樓的一隅',
    description: '繁複的幾何線條構築',
    cover: 'https://unsplash.it/400/300?image=1081'
  },
  {
    title: '草莓來襲',
    description: '聽見果農的艱辛',
    cover: 'https://unsplash.it/400/300?image=1080'
  },
  {
    title: '探索宇宙',
    description: '看見光的速度與殘影',
    cover: 'https://unsplash.it/400/300?image=1079'
  }
]
export default {
  name: 'carousel',
  data () {
    return {
      now_index: Store.fetch() == null ? 3 : Store.fetch().now_index,
      works: works,
      span: 1430,
      last_index: Store.fetch() == null ? 3 : Store.fetch().last_index
    }
  },
  watch: {
    now_index: {
      handler: function (val, oldVal) {
        let item = {
          'now_index': val,
          'last_index': oldVal
        }
        Store.save(item)
        console.log(Store.fetch().now_index)
      },
      deep: true
    }
  },
  methods: {
    bg_css: function (url) {
      return {
        'background-image': 'url(' + url + ')'
      }
    },
    delta: function (d) {
      // (原本的id+變化+總長）% 總長
      // (0 + (-1) + 5) % 5 = 4
      this.last_index = this.now_index
      this.now_index = (this.now_index + d + this.works.length) % this.works.length
    },
    postleft: function (id) {
      var leftlength = -(this.span * ((this.now_index - id + this.works.length) % this.works.length - Math.floor(this.works.length / 2)))
      return {
        'left': leftlength + 'px'
      }
    }
  },
  computed: {
    computed_left () {
      return {
        'left': (-this.span * this.now_index) + 'px'
        //  左距離＝偏移負的單格距離＊現在正在瀏覽的index
      }
    }
  }
}
</script>
<style scoped>
@keyframes fadeIn {
	0% {
		opacity: 0;
		transform: translateX(30px);
		filter: saturate(0%);
	}

	100% {
		opacity: 1;
		transform: translateX(0px);
		filter: saturate(100%);
	}
}

@keyframes sliceIn {
	0% {
		transform: translateX(-50px);
	}

	100% {
		transform: translateX(0px);
	}
}

html, body {
	width: 100%;
	height: 100%;
	overflow: hidden;
	background-color: #1c1c1c;
}

#app {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.carousel {
	width: 1430px;
	height: 250px;
	white-space: nowrap;
}

.posts {
	transition: 0.5s 0s;
	height: 100%;
	position: relative;
}

.postbox {
	display: inline-block;
	height: 100%;
	cursor: pointer;
	position: absolute;
}

.postbox .cover {
	width: 330px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.5s 0s;
	margin-left: 550px;
	margin-right: 550px;
	background-size: cover;
	background-position: center center;
	cursor: pointer;
}

.postbox .cover:hover {
	width: 340px;
	height: 110%;
}

.postbox .cover:hover .infos {
	transform: translateX(-220px) translateY(-10px);
}

.postbox .infos {
	transition: 0.5s 0s;
	transform: translateX(-200px);
	color: white;
	text-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
}

.postbox .infos * {
	margin: 0;
}

.postbox .infos h1 {
	margin-bottom: 10px;
	font-size: 50px;
	font-weight: 400;
}

.postbox .infos h5 {
	background-color: white;
	color: black;
	padding: 4px 12px;
	font-size: 20px;
	font-weight: 300;
	box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
}

.control_left, .control_right {
	width: 40px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.5s 0s;
	position: fixed;
	top: 50%;
	border: solid 1px white;
	position: fixed;
	border-radius: 50%;
	color: white;
	font-size: 30px;
	cursor: pointer;
}

.control_left:hover, .control_right:hover {
	background-color: white;
	color: black;
}

.control_left {
	left: 50px;
}

.control_right {
	right: 50px;
}

.last_item {
	transition: 0.5s 0s;
}

trans .cover {
	animation: fadeIn 1.5s ease both;
}

.cur_item .infos h5 {
	animation: sliceIn 1.5s 0.1s ease;
}
</style>
