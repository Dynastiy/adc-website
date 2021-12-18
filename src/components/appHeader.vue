<template>
  <div>
    <div class="request-links">
      <div class="top-links bg-main">
        <router-link to="/join_adc">JOIN ADC</router-link>
      </div>
      <div class="top-links bg-darker" id="take-action" @click="openDialog">
        <a href="javascipt:void(0)">TAKE ACTION</a>
      </div>
      <div class="top-links bg-orange">
        <router-link to="/donate">DONATE</router-link>
      </div>
    </div>

   
    <div class="header-content">
      <div class="logo-navs content pt-0">
        <div class="logo">
          <router-link to="/"><img src="@/assets/img/logo.png" alt="logo" width="180"/></router-link>
        </div>

        <input type="checkbox" id="check" />
        <label for="check">
          <!-- <i class="fa fa-bars text-white" id="bars" aria-hidden="true"></i> -->
          <div id="bars">
            <ion-icon name="list"></ion-icon>
          </div>
        </label>

        <div class="navigations">
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
        </div>
      </div>
    </div>

     <div class="take-action-overlay bg-darker" id="take-action-overlay">
      <div class="close" @click="closeDialog">
        <ion-icon name="close"></ion-icon>
        <!-- <p class="text-white dialog-close"  >X</p> -->
      </div>
      <div>
        <ul class="list-unstyled">
          <li class="mb-3"><router-link to="/login">LOGIN <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i> </router-link></li>
          <li><a href="">RESOURCES  <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        overlay: false,
      };
    },
    methods: {
      openDialog() {
        const overlay = document.getElementById("take-action-overlay");
        overlay.classList.add("active");
      },
      closeDialog() {
        const overlay = document.getElementById("take-action-overlay");
        overlay.classList.remove("active");
      },
    },
  };
</script>

<style>
  .take-action-overlay {
    min-height: 100vh;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999999;
    /* display: none; */
    left: 5000px;
    transition: .6s;
  }
  .take-action-overlay.active {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 2s;
    left: 0px;
    transition: .6s;
  }
  .take-action-overlay a {
    color: #fff;
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 2rem;
    
  }
  .take-action-overlay a:hover {
    text-decoration: none;
    color: #3ee987;
    transition: 2s;
  }
  .close {
      position: absolute;
      top: 3%;
      right: 3%;
  }
  .dialog-close {
      font-size: 4rem;
      font-weight: lighter;
  }
  .dialog-close:hover {
      cursor: pointer;
  }
  .close ion-icon {
  font-size: 64px;
  color: #fff;
}
</style>
