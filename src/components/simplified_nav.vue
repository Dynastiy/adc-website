<template>
  <div class="sticky-top shadow-lg bg-white simp-nav">
    <header class="simplified-nav ">
      <div class="logo__nav pl-5 ">
        <router-link to="/" class="">
          <span class="logo-spread">
            <img src="@/assets/img/logo-spread.png" width="140" />
          </span>
        </router-link>
      </div>
      <div class="menu__options ">
        <div class="menu__items">
          <ul class="list-unstyled menu font-weight-bold">
            <li class="">
              <router-link to="/about" class=" text-dark"
                >About Us
              </router-link>
            </li>
            <li class=" dropdown">
              <a
                class=" text-dark dropdown-toggle"
                href="#"
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Where we Stand</a
              >
              <div class="dropdown-menu bg-darker" aria-labelledby="dropdownId">
                <router-link to="/our_manifesto" class="dropdown-item text-white"
                  >Our Manifesto</router-link
                >
                <router-link to="/our_priorities" class="dropdown-item text-white"
                  >Our Priorities</router-link
                >
                <router-link to="/adc_objectives" class="dropdown-item text-white"
                  >ADC Objectives</router-link
                >
                <router-link to="/cardinal_commitments" class="dropdown-item text-white"
                  >Cardinal Commitments</router-link
                >
                <router-link to="/aims_of_the_party" class="dropdown-item text-white"
                  >Aims of the Party</router-link
                >
              </div>
            </li>
            <li class="">
              <a href="https://adc-dn.org/" class=" text-dark"
                >ADC in Diaspora
              </a>
            </li>
            <li class="">
              <router-link to="/login" class=" text-dark"
                >Login
              </router-link>
            </li>
            <li class=" mr-3">
              <router-link to="/news" class=" text-dark"
                >News
              </router-link>
            </li>
          </ul>
        </div>
        <div class="card__links">
              <router-link to="/join_adc" class=" text-white btn bg-main btn22"
                >JOIN ADC
              </router-link>
              <a href="javascript:void(0)" @click="openDialog2" class="btn bg-darker text-white btn22"
                >TAKE ACTION
              </a>
              <router-link to="/donate" class="text-white btn bg-orange btn22"
                >DONATE</router-link
              >
        </div>
      </div>
    </header>

      <!-- Dialog Drawer  -->
     <div class="take-action-overlay bg-darker" id="take-action-overlay">
      <div class="close" @click="closeDialog2">
        <ion-icon name="close"></ion-icon>
        <!-- <p class="text-white dialog-close"  >X</p> -->
      </div>
      <div>
         <ul class="list-unstyled">
              <li class="mb-3">
                <a href="https://paystack.shop/adc-shop">
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
    <mobile-nav />
  </div>
</template>

<script>
 import mobileNav from "./mobile_nav.vue";
  export default {
    components:{mobileNav},
    data() {
      return {};
    },
    methods:{
      openDialog2() {
        const overlay = document.getElementById("take-action-overlay");
        overlay.classList.add("active");
      },
      closeDialog2() {
        const overlay = document.getElementById("take-action-overlay");
        overlay.classList.remove("active");
      },
    },
    mounted() {
     
    },
  };
</script>

<style>
.simplified-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.simplified-nav .dropdown-item:hover {
  background:#ff7300 ;
}
.simplified-nav a:hover {
  text-decoration: none;
  color: #3ee987  !important;
}
.menu li  {
  font-size: 0.9rem;
}
.menu__options ul {
  margin-bottom: 0 !important;
  display: flex;
  /* width: 50% */
  gap: 20px;
}
.menu__options {
  display: flex;
  align-items: center
}
.top-card {
    font-weight: bold;
}
.btn22 {
  border-radius: 0px !important;
  padding: 0.7rem 3.2rem;
  font-weight: bold;
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
.sticky + .content {
  padding-top: 60px;
}
  .nav-link {
    font-size: 0.9rem;
  }
  .navbar-nav {
    align-items: unset !important;
  }
  /* The sticky class is added to the navbar with JS when it reaches its scroll position */
  .sticky {
    position: fixed;
    top: 0;
    width: 100%;
  }

  /* Add some top padding to the page content to prevent sudden quick movement (as the navigation bar gets a new position at the top of the page (position:fixed and top:0) */
  .sticky + .content {
    padding-top: 60px;
  }
  @media (max-width:990px){
    .simplified-nav {
      display: none;
    }
  }
</style>
