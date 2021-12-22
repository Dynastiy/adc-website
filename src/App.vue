<template>
  <div id="app">
    <router-view />
    <app-footer v-if="currentRouteName !== 'Login' || currentRouteName !== 'Dashboard' || currentRouteName !== 'Forum' || currentRouteName !== 'eCard' || currentRouteName !== 'Home'   "  />
  </div>
</template>

<script>
  import appFooter from "@/components/appFooter";
  export default {
    components: { appFooter },
    data() {
      return {};
    },
    computed: {
      currentRouteName() {
        return this.$route.name;
      },
    },
  };
</script>

<style>
  @import url("https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css");
  @import url("assets/css/style.css");
  @import url("'https://fonts.googleapis.com/css2?family=Work+Sans:wght@500&display=swap");
  #app {
    font-family: Work Sans, sans-serif;
  }

</style>
