<template>
  <div>
    <div class="national_working_committe">
      <h2 class="font-weight-bold text-center py-3 sticky-top bg-white">
        National Working Committee
      </h2>
      <hr class="hr-line">
      <div class="party__structure">
        <div class="" v-for="(member, i) in national_working_committee" :key="i">
          <div class="shadow-sm bg-dark pb-2"  >
            <div class="card_body text-center">
              <div
                class="bg-image"
                :style="{ 'background-image': `url(${member.avatar})` }"
              ></div>
              <h6 class="font-weight-bold text-white card-title mt-3">{{ member.name }}</h6>
              <p class="small text-orange font-weight-bold">
                {{ member.position }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- State Chairpersons  -->
     <div class="national_working_committe mt-5">
      <h2 class="font-weight-bold text-center py-3 bg-white sticky-top">
        State Chairpersons
      </h2>
      <hr class="hr-line">
      <div class="party__structure">
        <div class="" v-for="(executive, i) in executives" :key="i">
          <div class="shadow-sm bg-dark pb-2">
            <div class="card_body text-center">
              <div
                class="bg-image"
                :style="{ 'background-image': `url(${executive.avatar})` }"
              ></div>
              <h6 class="font-weight-bold text-white card-title mt-3">{{ executive.name }}</h6>
              <p class="small text-orange font-weight-bold">
                {{ executive.position }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import items from "@/assets/js/nwc.js";
  import executives from "@/assets/js/party_execs.js"
  export default {
    data() {
      return {
        national_working_committee: items,
        executives: executives,
      };
    },

    mounted() {
      console.log(this.executives);
    },
  };
</script>

<style scoped>
  .bg-image {
    height: 20rem;
    width: 100%;
    background-position: top;
    background-size: cover;
  }
  .bg-image:hover {
    transform: scale(1.1);
    transition: 1s;
  }
  .party__structure {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
  }
  .view {
    font-size: 0.8rem;
    display: block;
  }
  .view:hover {
    text-decoration: none;
  }
  ion-icon {
    color: #000 !important;
    font-size: 16px;
    margin-right: 10px;
  }
  .hr-line {
    width: 5%;
    height: 0.1rem;
    margin: 0 auto;
    margin-bottom: 2rem;
    background-color: #224f5a;
  }
  .separation ion-icon {
    font-size: 64px;
    color: #00a54f;
  }
  @media screen and (max-width: 990px) {
    .party__structure {
      display: unset;
    }
    .bg-image {
    height: 30rem;
    width: 100%;
    background-position: top;
    background-size: cover;
  }
  }
</style>
