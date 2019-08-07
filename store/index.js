import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

Vue.use(Vuex)

const store =()=>{
    return new Vuex.Store({
      state: {
        products:[]
      },
      mutations: {
        fetchProducts:(state,products)=>(state.todos = products),
        newProduct:(state,product)=>state.product.unshift(product),
        deleteProduct:(state,id)=>(state.products = state.products.filter(product => product.id !== id))
      },
      actions: {
        async fetchProducts({ commit }){
          const response = await Axios.get(`
          https://my-json-server.typicode.com/irfanmaulanasam/product/containt
          `);
          commit('fetchProducts', response.data) 
        },
        async AddProduct({ commit } ,objSource){
          const objTarget = {
            "id":objSource.id,
            "name": objSource.name,
            "price":objSource.price,
            "image":objSource.image
          }
          const response = await Axios.post(`
          https://jsonplaceholder.typicode.com/irfanmaulanasam/product/containt
          `,objTarget);
          commit('newProduct',response.data)
        },
        async deleteProduct({ commit }, id){
          await Axios.delete(`
          https://jsonplaceholder.typicode.com/irfanmaulanasam/product/containt/${id}
          `,id)
          commit('deleteProduct', id)
        }
      },
      getters:{
        products:(state)=>{
          return state.products
        }
      }
    })    
} 

export default store