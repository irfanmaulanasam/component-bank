<template>
    <div id="infiniteList">
        <div class="container">
            <h1>
            {{items.length}} list
            </h1>
            <div class="list-group-wrapper">
                <transition name="fade">
                <div class="loading" v-show="loading">
                    <span class="fa fa-spinner fa-spin"></span> Loading
                </div>
                </transition>
                <ul class="list-group" id="infinite-list">
                    <li class="list-group-item" v-for="item in items" :key="item.id">
                      <productCard
                      :imageUrl="item.picture.large"
                      :productName="`${item.name.first} ${item.name.last}`"
                      :productDescription="'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui minus a animi, odit, quis veritatis rem veniam cupiditate error totam unde magni amet, dolor laudantium autem voluptatem facilis. Corrupti, commodi!'"
                      :productPrice=1466524524431
                      :currency="'USD'"
                      />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import productCard from '../card/cardv4'
export default {
    name:'infiniteList',
    components:{
      productCard,
    },
    data() {
       return {
        loading: false,
        items:[],
        nextItem: 1,
        items: []
        }
    },
    mounted () {
        // Detect when scrolled to bottom.
        const listElm = document.querySelector('#infinite-list');
        listElm.addEventListener('scroll', e => {
        if(listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
            this.loadMore();
        }
        });
        // Initially load some items.
        this.loadMore();
    },
    methods: {
        loadMore () {       
        /** This is only for this demo, you could 
            * replace the following with code to hit 
            * an endpoint to pull in more data. **/
            this.loading = true;
            for (var i = 0; i < 20; i++) {
              axios.get(`https://randomuser.me/api/`)
                .then(response => {
                this.items.push(response.data.results[0]);
                });
            }
            this.loading = false;
        /**************************************/
        
        }
    }
}
</script>
<style scoped>
.container {
  background-color: #fff;
  border-radius: 8px;
  max-width: 800px;
}
.list-group-wrapper {
  position: relative;
}

.list-group {
  overflow-y: scroll;
  list-style: none;
  height: 50vh;
  border: 2px solid #dce4ec;
  border-radius: 5px;
}

.list-group-item {
  margin-top: 1px;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 2px solid #dce4ec;
}

.loading {
  text-align: center;
  position: absolute;
  color: #fff;
  z-index: 9;
  background: #5c4084;
  padding: 8px 18px;
  border-radius: 5px;
  left: calc(50% - 45px);
  top: calc(50% - 18px);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>