<template>
  <div class="">
    <div >
    <div class="party__structure">
      <div class="text-center" v-for="(item, i) in states" :key="i">
        <div class="shadow-sm py-2 bg-white rounded-lg">
          <div class="card_body">
            <h6 class="font-weight-bold card-title mt-3"> {{item.name}} State </h6>
            <p class="small text-orange font-weight-bold text-capitalize"> {{ item.chairman }} </p>
            <!-- <a href="javascript:void(0)" class="text-right text-main small"></a> -->
          </div>
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
     gap: 25px;
}
@media screen and (max-width: 746px) {
  .party__structure{
    display: unset;
  }
  .party__structure div {
    margin-bottom: 15px;
  }
  
}
</style>
