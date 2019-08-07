<template>
    <div id="product-card-list">
        <div class="product-image">
            <img :src="imageUrl">
        </div>
        <div class="product-info">
            <h5>Winter Jacket</h5>
            <p>
                {{limitWord(productDescription)}}
            </p>
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
    name:'product-card-list',
    props:{
        imageUrl:{
            type:String,
            required:true,
            default:'http://lorempixel.com/400/250/'
        },
        productName:{
            type:String,
            required:true,
        },
        productDescription:{
            type:String,
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
    data(){
        return{
            character:null,
            maxLength:null
        }
    },
    methods:{
        numberWithCommas(number) {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },
        limitWord(str){
            this.character = str; //replace with your string.
            this.maxLength = 6 // maximum number of characters to extract
            //trim the string to the maximum length
            let trimmedString = character.substr(0, maxLength);
            //re-trim if we are in the middle of a word
            trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
            return trimmedString+'...'
        },
        printCurrency(str){
            let price = this.numberWithCommas(str)
            return `${this.Currency} ${price}.00`
        }
    },
}
</script>

<style>
</style>
