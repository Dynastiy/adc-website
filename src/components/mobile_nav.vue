<template>
  <div class="mobile__nav sticky-top">
  
 <nav class="navbar navbar-expand-sm navbar-light bg-light shadow-lg" id="mobile-nav">
  <router-link to="/" class="navbar-brand" >
     <span class="logo-spread">
              <img src="@/assets/img/logo-spread.png" width="140" />
      </span>
  </router-link>
  <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
      aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavId">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0 text-dark font-weight-bold">
      <li class="nav-item ">
        <router-link to="/join_adc" class="nav-link text-dark" >Join ADC </router-link>
      </li>
      <li class="nav-item ">
        <router-link to="/about" class="nav-link text-dark" >About Us </router-link>
      </li>
      <li class="nav-item ">
        <router-link to="/our_manifesto" class="nav-link text-dark" >Our Manifesto </router-link>
      </li>
      <li class="nav-item ">
        <router-link to="/our_priorities" class="nav-link text-dark" >Our Priorities </router-link>
      </li>
      <li class="nav-item ">
        <router-link to="/donate" class="nav-link text-dark" >Donate</router-link>
      </li>
      <li class="nav-item ">
        <a href="https://adc-dn.org/" class="nav-link text-dark" >ADC in Diaspora </a>
      </li>
      <li class="nav-item ">
        <router-link to="/resources" class="nav-link text-dark" >Resources </router-link>
      </li>
      <li class="nav-item ">
        <router-link to="/news" class="nav-link text-dark" >News </router-link>
      </li>
      <li class="nav-item ">
        <a href="https://paystack.shop/adc-shop" class="nav-link text-dark" >Shop </a>
      </li>
      <li class="nav-item ">
        <router-link to="/login" class="nav-link text-dark" >Login </router-link>
      </li>
    </ul>
  </div>
</nav>
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
    }
  };
</script>
