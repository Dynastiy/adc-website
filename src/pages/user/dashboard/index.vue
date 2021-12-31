<template>
  <div class="dashboard">
    <sidebar />
    <router-view />
  </div>
</template>
<script>
  import sidebar from "../dashboard/static/sidebar.vue";
  export default {
    components: { sidebar },
    async created() {
      if (!this.$store.getters.isLoggedIn) {
        alert("please, login");
        this.$router.push("/login");
      }
    },
  };
</script>
