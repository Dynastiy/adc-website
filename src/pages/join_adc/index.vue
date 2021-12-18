<template>
    <div>
        <simplified-nav/>
        <div class="content">
            <h1 class="font-weight-bold text-main mb-2">Join ADC</h1>
            <h6 class="font-weight-bold mb-2">Choose a Membership Rate</h6>
            <div class="below_30 shadow-sm mb-3 p-3">
                <h5 class="font-weight-bold text-main">Are you between 18 and 30?</h5>
                <p class="small text-muted">Below is the Registration link for Persons between 18-30 years & Persons with Disabilities.</p>
                <router-link to="reg_form"><button class="bg-main btn font-weight-bold text-white small-btn-text">CLICK HERE</button></router-link>
            </div>
            <div class="below_30 shadow-sm p-3">
                <h5 class="font-weight-bold text-main">Are you above 30?</h5>
                <p class="small text-muted">Below is the Registration link for Persons above 30 years of age</p>
                <router-link to="reg_form"><button class="bg-main btn font-weight-bold text-white small-btn-text">CLICK HERE</button></router-link>
            </div>
            <div class="my-3 d-flex align-items-center">
                <div class="div__line"></div>
                <h4 class="ml-3 mr-3">OR</h4>
                <div class="div__line"></div>
            </div>
            <div>
                <button class="bg-main w-100 btn font-weight-bold text-white small-btn-text">I AM ALREADY A MEMBER, RENEW MY MEMBERSHIP</button>
            </div>
        </div>
    </div>
</template>

<script>
import SimplifiedNav from '../../components/simplified_nav.vue'
export default {
    components:{SimplifiedNav },
    data(){
        return{

      
         }
    }
}
</script>

<style>
.small-btn-text {
    font-size: 0.6rem !important;
    padding: 0.2rem 1.8rem;
}
.div__line {
    height:1px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
}
</style>