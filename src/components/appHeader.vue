<template>
  <div class="">
    <div id="navbar">
      <div class="request-links">
      <div class="top-links bg-main">
        <router-link to="/join_adc">JOIN ADC</router-link>
      </div>
      <div class="top-links bg-darker" id="take-action" @click="openDialog1">
        <a href="javascript:void(0)">TAKE ACTION</a>
      </div>
      <div class="top-links bg-orange">
        <router-link to="/donate">DONATE</router-link>
      </div>
    </div>

    <div class="header-content">
      <div class="logo-navs content pt-0">
        <div class="logo">
          <router-link to="/"
            ><img src="@/assets/img/logo.png" alt="logo" width="180"
          /></router-link>
        </div>

        <div class="nav-area">
          <ul class="list-unstyled">
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <li class="dropdown">
              <a
                class="dropdown-toggle"
                href="#"
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Where we Stand</a
              >
              <div class="dropdown-menu bg-darker" aria-labelledby="dropdownId">
                <router-link to="/our_manifesto" class="dropdown-item"
                  >Our Manifesto</router-link
                >
                <router-link to="/our_priorities" class="dropdown-item"
                  >Our Priorities</router-link
                >
                <router-link to="/cardinal_commitments" class="dropdown-item"
                  >Cardinal Commitments</router-link
                >
              </div>
            </li>
            <li>
              <a href="https://adc-dn.org/" target="_blank">ADC Diaspora</a>
            </li>
            <li><router-link to="/login">Login</router-link></li>
            <li>
              <router-link to="/news">News</router-link>
            </li>
          </ul>
        </div>
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
              <li class="mb-3">
                <a href="https://paystack.shop/adc-shop" target="_blank">
                  ADC SHOP
                  <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                </a>
              </li>
              <li class="mb-3">
           <router-link to="/volunteer">VOLUNTEER
            <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i
            ></router-link>
          </li>
          <li class="mb-3">
           <router-link to="/testimonials">TESTIMONIALS
            <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i
            ></router-link>
          </li>
              <li>
                <router-link to="/resources"
                  >ADC RESOURCES
                  <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i
                ></router-link>
              </li>
            </ul>
      </div>
    </div>

    <!-- Sticky Nav component  -->
    <simplified id="simplified"/>
    <!-- Mobile Navigation Component -->
    <mobile-nav />
  </div>
</template>

<script>
  import simplified from './simplified_nav.vue'
  import mobileNav from "./mobile_nav.vue";
  export default {
    components: {
      mobileNav, simplified
    },
    data() {
      return {
        overlay: false,
      };
    },
    methods: {
      openDialog1() {
        const overlay = document.getElementById("take-action-overlay");
        overlay.classList.add("active");
      },
      closeDialog() {
        const overlay = document.getElementById("take-action-overlay");
        overlay.classList.remove("active");
      },
    },
    mounted() {
      window.onscroll = function() {myFunction()};
      var navbar = document.getElementById("navbar");
      var simplified = document.getElementById("simplified")
      var sticky = simplified.offsetTop;

      function myFunction() {
        if (window.pageYOffset > sticky) {
          simplified.classList.add("sticky")
          navbar.style.display = 'none';
          simplified.style.display = "block"
        } else {
          simplified.classList.remove("sticky");
          navbar.style.display = "block";
          simplified.style.display = "none"
        }
      }

    
    },
  };
</script>

<style>
#simplified {
  display: none;
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
.sticky + .content {
  padding-top: 60px;
}
  .where-we-stand a {
    /* color: #fff !important; */
    /* pa
  dding: 1rem; */
  }
  .where-we-stand a:hover {
    /* color: #00a54f !important; */
    /* transition: 1s ease-in-out; */
  }
  hr {
    margin: 0;
  }
  .take-action-overlay {
    min-height: 100vh;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999999;
    /* display: none; */
    left: 5000px;
    transition: 0.6s;
  }
  .take-action-overlay.active {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 2s;
    left: 0px;
    transition: 0.6s;
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
  .nav-area ul{
    display: flex;
    gap: 40px;
    align-items:center;
    margin-top: 1rem;
  }
  .nav-area a {
    color: #fff;
    font-weight: bold;
  }
  .nav-area a:hover {
    text-decoration: none;
  }
  .nav-area a .router-linnk-exact-active {
    color:#ff7300;
  }
  @media (max-width: 990px) {
    .logo-navs {
      display: none !important;
    }
  }
</style>
