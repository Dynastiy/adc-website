<template>
    <div>
        <div class=" bg-light-accent mb-0">
            <div class="content-tab">
                <div class="bg-white shadow-sm" id="printMe"  style="padding:3rem 4rem; font-family: Work Sans, sans-serif;">
                    <div class="" style="margin-bottom: 10rem; text-align:right"><img
                        src="@/assets/img/brand_assets/logo_horizontal_dark.png"
                        alt=""
                        srcset=""
                        width="120"
                        /></div>
                    <h3>Now you are a registered member!</h3> <pre></pre>
                    <p>
                        [Name], welcome to the African Democratic Congress! <pre></pre>
                        By registering with the ADC, you are taking action to help grow the most progressive and inclusive movement in 
                        Nigerian politics - at a crucial time for our party. <pre></pre>
                        Nigerians like you from every part of our country are stepping up to keep Nigeria moving forward. Thank you for your leadrship, [name]. <pre></pre>
                        There are a number of ways you can make an immediate contibution to our movement, and help ensure our party can continue building a strong 
                        middle class, growing the economy, keeping our communities safe and protecting our environment. <br>
                        Find the one (or more!) that works for you.
                        <pre></pre>
                        <pre></pre>
                        <b>Kola Akinwale</b><br>
                        National Membership Mobilization Secretary
                    </p>
                </div>
                <button class="btn bg-main btn-content mr-3" @click="print">PRINT</button>
            <p>Please Login to access your personalized Dashboard</p>
            <p class="lead">
                <router-link to="/login" class="btn text-white bg-darker" role="button">Go to Login</router-link>
            </p>
            </div>
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

<style>
  @import url("https://fonts.googleapis.com/css2?family=Work+Sans&display=swap");
.content-tab{
    padding: 2rem 8rem;
}
@media (max-width: 990px){
    .content-tab {
        padding: 1rem 1rem;
    }
    #printMe{
        padding: 1rem 1rem !important;
    }
}
</style>