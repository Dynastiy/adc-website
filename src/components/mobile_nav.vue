<template>
  <div class="mobile__nav">
    <div class="mobile_nav_links">
      <div class="bg-main">
        <router-link to="/join_adc">JOIN ADC</router-link>
      </div>
      <div class="bg-darker" id="take-action">
        <a href="javascipt:void(0)">TAKE ACTION</a>
      </div>
      <div class="bg-orange">
        <router-link to="/donate">DONATE</router-link>
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center content mb-5">
      <div class="">
        <router-link to="/"
          ><img src="@/assets/img/logo2.png" alt="logo" width="50"
        /></router-link>
      </div>
      <div id="bar">
        <ion-icon name="list" id="bar"></ion-icon>
      </div>
    </div>
    <div class="mobile-navigation" id="side-bar">
      <ul>
          <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <a href="#">Where we Stand</a>
      </li>
      <li>
        <a href="https://adc-dn.org/">ADC Diaspora</a>
      </li>
      <li>
        <a href="#">Shop</a>
      </li>
      <li>
        <router-link to="/news">News</router-link>
      </li>
      </ul>
    </div>
  </div>
</template>

<style>
  .mobile__nav {
    display: none;
  }
  .mobile_nav_links {
    display: flex;
  }
  .mobile_nav_links div {
    width: 100%;
    padding: 1rem;
    text-align: center;
    vertical-align: middle;
    font-weight: bold;
  }
  .mobile_nav_links a {
    color: #fff;
  }
  #bar ion-icon {
    color: #fff;
    font-size: 32px;
  }
  .mobile-navigation {
    position: fixed;
    background: #224f5a;
    left: 800px;
    top: 0;
    width: 80%;
  min-height: 100vh;
  box-shadow: 0px 0px 5px 0px rgba(8, 8, 8, 0.5);
  font-size: 1.3rem;
  transition: 0.6s;
  z-index: 999;
  padding: 1rem;
  }
  .mobile-navigation li {
      list-style: none;
  }
  .mobile-navigation a{
      color: #fff;
      font-weight: bold;
      display: block;
      padding: 2rem;
  }
  .mobile-navigation .router-link-exact-active {
      color:#3ee987;
  }
  .mobile-navigation.active {
    left: 30%;
  }
  @media (max-width: 990px) {
    .mobile__nav {
      display: block !important;
    }
  }
</style>

<script>
  export default {
    mounted() {
      const menu_toggle = document.getElementById("bar");
      const app_drawer = document.getElementById("side-bar");
      document.onclick = function (e) {
        if (e.target.id !== "bar" && e.target.id !== "side-bar") {
          app_drawer.classList.remove("active");
          // menu_toggle.style.opacity = '1'
        }
      };
      menu_toggle.onclick = function () {
        app_drawer.classList.toggle("active");
        // menu_toggle.style.opacity = '0'
      };
    },
  };
</script>
