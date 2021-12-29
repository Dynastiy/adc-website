<template>
  <div>
    <simplified-nav />
  </div>
</template>

<script>
  import SimplifiedNav from "../../components/simplified_nav.vue";
  export default {
    components: { SimplifiedNav },
    data() {
      return {};
    },
  };
</script>

<style>
.content-tab {
  padding: 2rem 8rem;
}
.below_30 {
    /* background:#effff6; */
    border-radius: 5px;
    width: 100%;
}
.content h1 {
    font-weight: 900;
}
.larger-text{
    font-size: 1rem;
}
.reg__cards {
    display: flex;
    grid-gap: 20px;
}
  .small-btn-text {
    font-size: 1rem !important;
    padding: 0.8rem 1.8rem;
  }
  .div__line {
    height: 1px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
</style>
