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

    <div class="content">
      <p>No activities here yet</p>
    </div>
  </div>
</template>

<script>
  import AppHeader from "../../components/appHeader.vue";
  import priorities from "../../assets/js/priorities";
  export default {
    components: { AppHeader },
    data() {
      return {
        priorities: priorities,
      }
    },
  };
</script>

<style scoped>
  .activity-header {
      background: url(../../assets/img/gallery/8.jpeg);
       background-position:bottom;
       background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #000000c7;
    background-blend-mode: overlay;
  }
  @media (max-width: 990px){
      
  }
</style>
