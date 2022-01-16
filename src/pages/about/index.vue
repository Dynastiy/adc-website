<template>
  <div>
    <div class="header">
      <app-header />
      <div class="content">
        <h2 class="font-weight-bold headerss text-white text-center pb-5">
          About Us
        </h2>
        <ul>
          <li class="tab__item">
            <router-link to="/about/party_structure"
              >Party Structure</router-link
            >
          </li>
          <li class="tab__item">
            <router-link to="/about/chairmans_message"
              >Chairman's Message</router-link
            >
          </li>
          <li class="tab__item">
            <router-link to="/about/our_candidates">our candidates</router-link>
          </li>
          <li class="tab__item">
            <router-link to="/about/state_chapters">state chapters</router-link>
          </li>
          <li class="tab__item">
            <router-link to="/about/contact_us">contact us</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="content-tab">
      <router-view/>
    </div>
    <app-footer/>
  </div>
</template>

<script>
 import appFooter from "@/components/appFooter";
  import AppHeader from "../../components/appHeader.vue";
  export default {
    components: { AppHeader, appFooter },
    data() {
      return {};
    },
  };
</script>

<style scoped>
  .header {
    background: url(../../assets/img/image5.jpg);
    background-position: bottom;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #000000c7;
    background-blend-mode: overlay;
  }
  .content-tab {
    padding: 2rem 10rem;
  }
  ul .tab__item {
    list-style: none;
    text-transform: uppercase;
  }
  ul a {
    padding: 1rem;
    border-radius: 5px;
    text-decoration: none;
  }
  ul {
    display: flex;
    justify-content: space-between;
    background: #fff;
    padding: 1rem;
  }
  ul .router-link-exact-active {
    background: #224f5a;
    color: #fff !important;
    text-decoration: none;
  }
  .header .content h2 {
    text-shadow: 0px 2px rgba(0, 0, 0, 0.8);
  }
  .nav-pills .nav-link.active,
  .nav-pills .show > .nav-link {
    background-color: #00a54f;
    color: #fff;
  }
  .nav-pills .nav-link {
    border-radius: 5px;
  }
  .header .content .nav {
    justify-content: space-around;
    background: #fff;
    padding: 1.2rem 0.1rem;
    border-radius: 5px;
  }
  .header .content a {
    color: #000;
    font-weight: bold;
    font-size: 0.8rem;
  }
  @media (max-width : 990px){
    .content-tab {
      padding: 2rem 1rem;
    }
  }
</style>
