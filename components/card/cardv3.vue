<template>
    <div class="product-card">
        <div class="product-image">
            <img :src="imageUrl">
        </div>
        <div class="product-info">
            <h5>Winter Jacket</h5>
            <h6>{{ printCurrency(productPrice )}}</h6>
        </div>
        <div class="product-button">
            <button>
                add to cart
            </button>
            <button>
                buy
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name:'product-card-grid',
    props:{
        imageUrl:{
            type:String,
            required:true,
        },
        productName:{
            type:String,
            required:true,
        },
        productPrice:{
            type:Number,
            required:true
        },
        Currency:{
            type:String,
            default:'Rp.'
        }
    },
    methods:{
        numberWithCommas(number) {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },
        printCurrency(str){
            let price = this.numberWithCommas(str)
            return `${this.Currency} ${price}.00`
        }
    },
}
</script>

<style scoped>

.product-card {
  padding: 2%;
  flex-grow: 1;
  flex-basis: 16%;
  background-color: aquamarine;
  margin: 1%;
  border-radius: 5%;
}
.product-image img {
  border-radius: 5%;
  max-width: 100%;
}
.product-info {
  margin-top: auto;
}
@media (max-width: 920px) {
  .product-card {
    flex: 1 21%;
  }
}
.products .product-card:first-child, 
.products .product-card:nth-child(2) {
  flex: 2 46%;
}
@media (max-width: 600px) {
  .product-card {
    flex: 1 46%;
  }
}
</style>
