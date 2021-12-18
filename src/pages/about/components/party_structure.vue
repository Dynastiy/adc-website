<template>
  <div>
    <div class="party__structure">
      <div class="" v-for="(exec, i) in executives" :key="i">
        <div class="shadow-sm py-2">
          <div class="card_body text-center">
            <img
              :src="exec.avatar"
              class="rounded-circle"
              alt=""
              width="80"
              height="80"
            />
            <h6 class="font-weight-bold card-title mt-3"> {{ exec.name }} </h6>
            <p class="small text-muted"> {{ exec.position }}  </p>
            <!-- <p class="">
              <ion-icon name="logo-linkedin"></ion-icon>
              <ion-icon name="logo-twitter"></ion-icon>
              <ion-icon name="logo-facebook"></ion-icon>
            </p> -->
          </div>
          <!-- <a href="javascript:void(0)" class="small font-weight-bold view text-right pr-4 text-main">View More</a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import items from '@/assets/js/party_execs.js'
  export default {
    data() {
      return {
        executives: items,
      }
    },

    mounted(){
      console.log(this.executives);
    }
  };
</script>

<style scoped>
.party__structure {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
     gap: 5px;
}
.view {
     font-size: 0.8rem;
     display: block;
}
.view:hover {
    text-decoration: none;
}
ion-icon{
    color: #000 !important;
    font-size: 16px;
    margin-right: 10px;
}
@media screen and (max-width: 746px) {
  .party__structure{
    display: unset;
  }
  
}
</style>
