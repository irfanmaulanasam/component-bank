<template>
    <div id="infiniteScroll">
        <h1>Random User
        {{persons.length}} persons
        </h1>
        <div class="listing" id="infinite-grid">
            <transition name="fade">
                <div class="loading" v-show="loading">
                    <span class="fa fa-spinner fa-spin"></span> Loading
                </div>
            </transition>
            <div class="person" v-for="person in persons" :key="person.id">
              <productCard
              :imageUrl="person.picture.large"
              :productName="`${person.name.first} ${person.name.last}`"
              :productPrice=1466524524431
              :currency="'USD'"
              />
            <!-- <div class="left">
                <img :src="person.picture.large">
            </div>
            <div class="right">
                <p>{{ person.name.first }} {{ person.name.last }}</p>
                <ul>
                <li>
                    <strong>Birthday:</strong> {{ formatDate(person.dob) }}
                </li>
                <li class="text-capitalize">
                    <strong>Location:</strong> {{ person.location.city }},
                    {{ person.location.state }}
                </li>
                </ul>
            </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import productCard from '../card/cardv3'
export default {
    name:'infiniteScroll',
    components:{
      productCard
    },
    data() {
       return {
        loading: false,
        persons:[],
        nextItem: 1,
        items: [],
        }
    },
    mounted () {
        // Detect when scrolled to bottom.
        const listElm = document.querySelector('#infinite-grid');
        listElm.addEventListener('scroll', e => {
        if(listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
          this.getInitialUsers()
        }
        });
        // Initially load some items.
        this.getInitialUsers()
    },
    methods: {
        formatDate(input){
            let date = new Date(input.date).toDateString()
            return `${date}\n age: ${input.age}`
        },
        getInitialUsers () {
          this.loadingPerson = true
            for (var i = 0; i < 5; i++) {
            axios.get(`https://randomuser.me/api/`)
                .then(response => {
                this.persons.push(response.data.results[0]);
                });
            }
            this.loadingPerson = false
        }
    }
}
</script>
<style scoped>
/* style for person */
/* Optional Styles */
.listing{
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  height: 150px;
  border: 2px solid #f706b392;
  border-radius: 5px;
  background-color: #5c4084;
}

.loading {
  text-align: center;
  position: absolute;
  color: #fff;
  z-index: 9;
  background: #6800fa;
  padding: 8px 18px;
  border-radius: 5px;
  left: calc(-50%);
  top: calc(-50%);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
