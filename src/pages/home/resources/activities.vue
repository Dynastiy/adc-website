<template>
  <div>
    <div class="activity-header">
      <app-header />
      <div class="content">
        <h2 class="font-weight-bold headerss text-white text-center pb-5">
          Our Activities
        </h2>
      </div>
    </div>

    <div class="activities__content bg-light-accent">
     <div class="activities container">
       <div class="activity shadow-sm d-flex" v-for="activity in activities" :key="activity.id">
         <div class="date bg-darker">
           <div class="text-center">
              <h6> {{activity.month}} </h6>
              <h1> {{ activity.date }} </h1>
           </div>
         </div>
         <div class="px-2 pt-2">
           <p> {{ activity.description }} </p>
           <div class="d-flex justify-content-between">
             <!-- <div>
               <small> {{ activity.venue }} </small>
             </div> -->
             <div>
               <small> {{ activity.range }} </small>
             </div>
           </div>
           
         </div>
       </div>
     </div>
    </div>
  </div>
</template>

<script>
  import AppHeader from "../../../components/appHeader.vue";
  import activities from '@/assets/js/activities.js'
  export default {
    components: { AppHeader },
    data() {
      return {
        activities: activities,
      }
    },
  };
</script>

<style scoped>
  .activity-header {
      background: url(../../../assets/img/gallery/8.jpeg);
       background-position:bottom;
       background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #000000c7;
    background-blend-mode: overlay;
  }
  .activities {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }
  .activities__content {
    padding: 2rem 8rem;
  }
  .date {
    width: 4.5rem;
    height: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
  .date h6, .date h1, p {
    margin: 0;
    font-weight: bold;
  }
  .date h6 {
    line-height: 20px;
  }
  .date h1 {
    line-height: 32px;
  }
  .activity {
    /* border-top: 1px solid #224f5a; */
    background: #fff;
  }
  @media (max-width: 990px){
      .activities{
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      .activities__content {
        padding: 2rem;
      }
      .date h6 {
        font-size: 0.8rem;
  }
  .date h1 {
    font-size: 1rem;
  }
  p {
    font-size: 0.8rem;
  }
  }
</style>
