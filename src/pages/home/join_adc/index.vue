<template>
  <div class=" bg-light-accent"> 
    <simplified-nav />
    <div class="join-header d-flex align-items-center justify-content-center">
       <div class="text-center">
         <h1 class="font-weight-bold headerss text-accent">Join ADC</h1>
         <!-- <i class="fa fa-angle-down fa-3x" aria-hidden="true"></i> -->
       </div>
       
    </div>
    <div class="content-tab container mt-5">
     
      <p class="font-weight-bold text-darker larger-text w-75 mb-5"> 
        We have come a long way together and our
        supporters made everything possible. Membership is the best way to
        protect what we have achieved together and keep our progress going. You
        started it, now be part of it!
      </p>
      <h1 class="font-weight-bold mt-5 text-darker mb-5 text-center" >Choose Membership</h1>
     <div class="reg__cards rounded pb-5">
         <div class="shadow-lg rounded bg-white card__item p-4 ">
           <div class="card_item_header">
             <!-- <div class="icon__header d-flex align-items-center justify-content-center p-2 mr-3">
               <ion-icon name="person"></ion-icon>
             </div> -->
             <div>
               <h3 class="font-weight-bold">Youths &amp; Persons with Disability</h3>
              <p>Ages 18 to 35</p>
             </div>
           </div>
           <hr class="">
           <div class="card_list">
             <div class="card_list_item d-flex mt-4">
               <div class="mr-2">
                 <ion-icon name="checkmark-circle"></ion-icon>
               </div>
               <p class="small font-weight-bold">Above 18, but below 35</p>
             </div>
             <div class="card_list_item d-flex mt-4">
               <div class="mr-2">
                 <ion-icon name="checkmark-circle"></ion-icon>
               </div>
               <p class="small font-weight-bold">Persons with Disability</p>
             </div>
           </div>
          <router-link to="/registration_form">
           <button class=" mt-4 btn bg-darker btn-choose">
             Choose
           </button></router-link>
         </div>
         <div class="shadow-lg rounded bg-white card__item p-4 ">
           <div class="card_item_header">
             <!-- <div class="icon__header d-flex p-2 mr-3">
               <ion-icon name="person"></ion-icon>
             </div> -->
             <div>
               <h3 class="font-weight-bold"> Adults</h3>
              <p>Ages 35 and Above</p>
             </div>
           </div>
           <hr class="">
           <div class="card_list">
             <div class="card_list_item d-flex mt-4">
               <div class="mr-2">
                 <ion-icon name="checkmark-circle"></ion-icon>
               </div>
               <p class="small font-weight-bold">Persons above 35 years</p>
             </div>
             <!-- <div class="card_list_item d-flex mt-4">
               <div class="mr-2">
                 <ion-icon name="checkmark-circle"></ion-icon>
               </div>
               <p class="small font-weight-bold">Persons without Disability</p>
             </div> -->
           </div>
           <router-link to="/register">
           <button class=" mt-4 btn bg-darker btn-choose">
             Choose
           </button></router-link>
         </div>
        <div class="shadow-lg rounded bg-white card__item p-4 ">
           <div class="card_item_header d-flex">
             <!-- <div class="icon__header d-flex align-items-center justify-content-center p-2 mr-3">
               <ion-icon name="person"></ion-icon>
             </div> -->
             <div>
               <h3 class="font-weight-bold">Renew Membership</h3>
              <p>Already Registered</p>
             </div>
           </div>
           <hr class="">
           <div class="card_list">
             <div class="card_list_item d-flex mt-4">
               <div class="mr-2">
                 <ion-icon name="checkmark-circle"></ion-icon>
               </div>
               <p class="small font-weight-bold">Existing ADC registered Member</p>
             </div>
             <div class="card_list_item d-flex mt-4">
               <div class="mr-2">
                 <ion-icon name="checkmark-circle"></ion-icon>
               </div>
               <p class="small font-weight-bold">ADC Card Holder</p>
             </div>
           </div>
           <button @click="renewMembership" class=" mt-4 btn bg-darker btn-choose">
             Choose
           </button>
         </div>
     </div>
      
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert'
  import SimplifiedNav from "../../../components/simplified_nav.vue";
  export default {
    components: { SimplifiedNav },
    data() {
      return {};
    },
    methods:{
      renewMembership(){
       if (!this.$store.getters.isLoggedIn) {
              swal({
          title: "Oops!",
          text: "You are not logged in",
          icon: "error",
          // button: "Go Home!",
        });
            this.$router.push('/login');
        } 
        else{
          this.$router.push('/dashboard/home')
        }
      }
    }
  };
</script>

<style>
.join-header {
  background: url("../../../../src/assets/img/adc17.png");
  background-position: bottom;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.6);
  background-blend-mode: overlay;
  height: 20rem;
}
.card__item {
  display: grid;
  grid-template-rows: 1fr auto 1fr;
}
.btn-choose {
  color: #fff;
  font-weight: bold;
  border-radius: 20px;
  width: 100%;
}
.btn-choose:hover {
  background-color: #fff !important;
  color: #224f5a ;
  border: 2px solid #224f5a !important;
  transition: 0.4s;
}
.icon__header {
  border-radius: 1rem;
  /* background: #989d9e60; */
}
.icon__header ion-icon {
  font-size: 32px;
  color: #000;
  background: #989d9e60;
  padding: 10px;
  border-radius: 20px;
}
.card_list_item ion-icon {
  color: #989d9e60;
}
.reg__cards p{
  margin: 0;
}
.below_30 {
    /* background:#effff6; */
    border-radius: 5px;
    width: 100%;
}
hr {
  margin: 0;
}
.content h1 {
    font-weight: 900;
}
.larger-text{
    font-size: 1.2rem;
}
.reg__cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
}
  .small-btn-text {
    font-size: 1rem !important;
    padding: 0.8rem 1.8rem;
  }
  .div__line {
    height: 1px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 990px){
    .reg__cards {
      display: unset;
    }
    .reg__cards div {
      margin-bottom: 20px;
    }
    .content-tab.container {
      padding: 0.2rem 2rem;
    }
    .larger-text {
      width: 100% !important;
    }
  }
</style>
