<template>
    <div id="card-product">
        <div class="image-container">
            <img :src="image" alt="produk image" width="200">
        </div>
        <div class="text-container">
            <a href="#" class="simply-product__item__name">
            {{name}}
            </a>
            <!-- <br> -->
            <span class="simply-product__item__price">
            {{numberToRupiah=price}}
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name:'card-product',
    props:['image','name','price'],
    methods:{
        numberToRupiah(string){
            var 	bilangan = string
	
var	number_string = bilangan.toString(),
	split	= number_string.split(','),
	sisa 	= split[0].length % 3,
	rupiah 	= split[0].substr(0, sisa),
	ribuan 	= split[0].substr(sisa).match(/\d{1,3}/gi);
		
if (ribuan) {
	let separator = sisa ? '.' : '';
	rupiah += separator + ribuan.join('.');
}
rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;

// Cetak hasil	
            return rupiah // Hasil 23.456.789,32
        }
    }
}
</script>

<style>
.image-container{
    background-color: cornsilk;
}
.text-container{
    display: flex;
    flex: 0 1 auto;
    flex-direction: column;
    border-top: none;
    padding: 6px;
    margin: 5px;
}

</style>

