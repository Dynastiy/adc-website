<template>
    <div class="dash">
        <h2>E Card Page</h2>
        <div id="printMe" class="">
            <img  src="@/assets/img/1.png" alt="" srcset="" >
        </div>
        
        <div class="d-flex justify-content-center">
            <button class="btn bg-main btn-content mr-3" @click="print">PRINT</button>
            <button class="btn bg-main  btn-content">DOWNLOAD</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        print(){
            this.$htmlToPaper('printMe');
        }
    }
}
</script>

<style scoped>
.btn-content {
    font-size: 0.8rem;
    font-weight: bold;
    color: #fff;
    border-radius: 0.1rem;
}
/* #printMe img{
    display: block;
   text-align: center;
}  */
</style>