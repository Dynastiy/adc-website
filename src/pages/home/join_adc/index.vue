<template>
  <div class=" bg-light-accent"> 
    <simplified-nav />
    <div class="content-tab container">
      <h1 class="font-weight-bold text-darker mb-2 mt-5">Join ADC</h1>
      <hr class="mb-4">
      <p class="font-weight-bold text-darker larger-text w-75 mb-5"> 
        We have come a long way together and our
        supporters made everything possible. Membership is the best way to
        protect what we have achieved together and keep our progress going. You
        started it, now be part of it!
      </p>
      <h2 class="font-weight-bold mt-5 text-darker mb-5 text-center" >Choose Membership</h2>
     <div class="reg__cards rounded pb-5">
         <div class="shadow-lg rounded card__item p-4 ">
           <div class="card_item_header d-flex">
             <div class="icon__header d-flex align-items-center justify-content-center p-2 mr-3">
               <ion-icon name="person"></ion-icon>
             </div>
             <div>
               <p class="font-weight-bold">Youths &amp; Persons with Disability</p>
              <small>Ages 18 to 35</small>
             </div>
           </div>
           <hr class="mt-4 mb-4">
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
         <div class="shadow-lg rounded card__item p-4 ">
           <div class="card_item_header d-flex">
             <div class="icon__header d-flex p-2 mr-3">
               <ion-icon name="person"></ion-icon>
             </div>
             <div>
               <p class="font-weight-bold"> Adults</p>
              <small>Ages 35 and Above</small>
             </div>
           </div>
           <hr class="mt-4 mb-4">
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
           <router-link to="/reg_form">
           <button class=" mt-4 btn bg-darker btn-choose">
             Choose
           </button></router-link>
         </div>
        <div class="shadow-lg rounded card__item p-4 ">
           <div class="card_item_header d-flex">
             <div class="icon__header d-flex align-items-center justify-content-center p-2 mr-3">
               <ion-icon name="person"></ion-icon>
             </div>
             <div>
               <p class="font-weight-bold">Renew Membership</p>
              <small>Already Registered</small>
             </div>
           </div>
           <hr class="mt-4 mb-4">
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
.btn-choose {
  color: #fff;
  font-weight: bold;
  border-radius: 20px;
  width: 100%;
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
.content h1 {
    font-weight: 900;
}
.larger-text{
    font-size: 1rem;
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
  }
</style>
