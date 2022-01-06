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

        <div class="navigations">
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
                <a href="javascript:void(0)" id="where_we_stand_trigger"
                  >Where we Stand <ion-icon name="arrow-dropdown"></ion-icon> </a
                >
                <div class="where-we-stand" id="where_we_stand">
                  <ul>
                    <li><router-link to="/our_manifesto">Our Manifesto</router-link></li>
                    <hr />
                    <li><router-link to="/our_priorities">Our Priorities</router-link></li>
                  </ul>
                </div>
              </li>
          <li>
            <a href="https://adc-dn.org/">ADC Diaspora</a>
          </li>
          <li>
            <a href="https://paystack.shop/adc-shop">Shop</a>
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
          <li><router-link to="/resources">RESOURCES  <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></router-link></li>
        </ul>
      </div>
    </div>


<!-- Mobile Navigation Component -->
<mobile-nav/>
  </div>
</template>

<script>
import mobileNav from './mobile_nav.vue'
  export default {
    components: {
      mobileNav
    },
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
    mounted() {
      const drop_toggle = document.getElementById("where_we_stand_trigger");
      const drop_drawer = document.getElementById("where_we_stand");
      document.onclick = function (e) {
        if (
          e.target.id !== "where_we_stand_trigger" &&
          e.target.id !== "where_we_stand"
        ) {
          // drop_drawer.classList.remove("active");
          drop_drawer.style.transition = "0.3s";
          drop_drawer.style.opacity = "0";
        }
      };
      drop_toggle.onclick = function () {
        // drop_drawer.classList.toggle("active");
        if (drop_drawer.style.opacity === "1") {
          drop_drawer.style.transition = "0.3s";
          drop_drawer.style.opacity = "0";
        }
        else{
          drop_drawer.style.transition= '0.3s';
        drop_drawer.style.opacity = '1'
        }
      };
    },
  };
</script>

<style>
.where-we-stand {
    background: #224f5a;
    position: absolute;
    margin-top: -1.4rem;
    opacity: 0;
  }
  .where-we-stand a {
    color: #fff !important;
    /* pa
  dding: 1rem; */
  }
  .where-we-stand a:hover {
    color: #00a54f !important;
    transition: 1s ease-in-out;
  }
  hr {
    margin: 0;
  }
  .navigations .where-we-stand li {
    line-height: normal !important;
    padding: 1rem;
  }
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
@media (max-width: 990px){
  .logo-navs {
    display: none !important;
  }
}
</style>
