<template>
  <div>
    <div class="header">
      <app-header />
      <div class="content">
        <h2 class="font-weight-bold text-white text-center pb-5">News</h2>
      </div>
    </div>

    <!-- Main News Content  -->
    <div class="content">
        <div class="news-item">
            <img src="" alt="">
        </div>
    </div>
    
  </div>
</template>

<script>
  import AppHeader from "../../components/appHeader.vue";
  export default {
    components: { AppHeader },
    data() {
      return {};
    },
  };
</script>

<style scoped>
  .header .content h2 {
    text-shadow: 0px 2px rgba(0, 0, 0, 0.8);
  }
  
</style>
