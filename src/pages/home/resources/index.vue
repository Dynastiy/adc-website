<template>
  <div>
    <div class="header">
      <app-header />
      <div class="content">
        <h2 class="font-weight-bold headerss text-white text-center pb-5">
          Resources
        </h2>
      </div>
    </div>

    <div class="content">
      <div class="resources-cards">
          <div class="resource-card shadow p-4">
              <h4 class="card-title font-weight-bold">Voter Registration</h4>
              <p class="card-text">As a New Voter, you can Pre-Register online, or as a Registered Voter, you can Review your Voter Registration, Request to Update your Information or Transfer your Voter Registration to another Polling Unit.</p>
              <a href="https://cvr.inecnigeria.org/"><button class="btn bg-main text-white font-weight-bold">Click to Continue</button></a>
          </div>
          <div class="resource-card shadow p-4">
              <h4 class="card-title font-weight-bold">Polling Units</h4>
              <p class="card-text">At a polling unit, a citizen can either register to vote or vote. It is advisable to select a Polling Unit close to your area of residence due to the restricted movement on election days.</p>
              <a href="https://www.inecnigeria.org/elections/polling-units/"><button class="btn bg-main text-white font-weight-bold">Click to Continue</button></a>
          </div>
          <div class="resource-card shadow p-4">
              <h4 class="card-title font-weight-bold">Our Activities</h4>
              <p class="card-text">Stay up to date with our activities and programs</p>
              <router-link to="/resources/our_activities"><button class="btn bg-main text-white font-weight-bold">View Activities</button></router-link>
          </div>
          <div class="resource-card shadow p-4">
              <h4 class="card-title font-weight-bold">Brand Assets</h4>
              <p class="card-text">View and Download our brand assets.</p>
              <router-link to="/resources/brand_assets"><button class="btn bg-main text-white font-weight-bold">View Brand Assets</button></router-link>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AppHeader from "../../../components/appHeader.vue";
  export default {
    components: { AppHeader },
    data() {
      return {
      }
    },
  };
</script>

<style scoped>
  .header {
      background: url(../../../assets/img/image7.jpg);
      background-attachment: fixed;
       background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #000000c7;
    background-blend-mode: overlay;
  }
  .resource-card {
      margin-bottom: 20px;
  }
  .resource-card:hover {
      background-color:#224f5a ;
      color: #fff;
      transition: 0.8s;
      cursor: pointer;
  }
  .resources-cards {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
  }
  @media (max-width: 990px){
        .resources-cards{
            display: unset;
        }
  }
</style>
