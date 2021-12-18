<template>
  <div>
    <div class="party__structure">
      <div class="text-center" v-for="(item, i) in states" :key="i">
        <div class="shadow-sm py-2">
          <div class="card_body">
            <h6 class="font-weight-bold card-title mt-3"> {{item.name}} {{ item.capital }} </h6>
            <p class="small text-orange"> Name of Chairman </p>
            <!-- <p class="">
              <ion-icon name="logo-linkedin"></ion-icon>
              <ion-icon name="logo-twitter"></ion-icon>
              <ion-icon name="logo-facebook"></ion-icon>
            </p> -->
            <a href="javascript:void(0)" class="text-right text-main small">Go to Website</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import states from '@/assets/js/states.js'
  export default {
    data() {
      return {
          states: states
      };
    },
   methods:{
   }
  };
</script>

<style scoped>
.party__structure {
    display: grid;
    grid-template-columns: auto auto auto auto;
     gap: 5px;
}
@media screen and (max-width: 746px) {
  .party__structure{
    display: unset;
  }
  
}
</style>
