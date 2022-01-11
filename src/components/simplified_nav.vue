<template>
  <div class="sticky-top">
    <header class="simplified-nav shadow-sm">
      <div class="navbar navbar-expand-sm navbar-light bg-white shadow-lg">
        <router-link to="/" class="navbar-brand">
          <span class="logo-spread">
            <img src="@/assets/img/logo-spread.png" width="140" />
          </span>
        </router-link>
        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav ml-auto align-items-center font-weight-bold">
            <li class="nav-item">
              <router-link to="/about" class="nav-link text-dark"
                >About Us
              </router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link text-dark dropdown-toggle"
                href="#"
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Where we Stand</a
              >
              <div class="dropdown-menu bg-darker" aria-labelledby="dropdownId">
                <a class="dropdown-item text-white" href="#">Our Manifesto</a>
                <a class="dropdown-item text-white" href="#">Our Priorities</a>
                <a class="dropdown-item text-white" href="#">ADC Objectives</a>
                <a class="dropdown-item text-white" href="#">Cardinal Commitments</a>
                <a class="dropdown-item text-white" href="#">Aims of the Party</a>
              </div>
            </li>
            <li class="nav-item">
              <a href="https://adc-dn.org/" class="nav-link text-dark"
                >ADC in Diaspora
              </a>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link text-dark"
                >Login
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/news" class="nav-link text-dark"
                >News
              </router-link>
            </li>
            <li class="nav-item bg-main py-1 px-4">
              <router-link to="/join_adc" class="nav-link text-white"
                >JOIN ADC
              </router-link>
            </li>
            <li class="nav-item bg-darker py-1 px-4" @click="openDialog2">
              <a href="javascript:void(0)" class="nav-link text-white"
                >TAKE ACTION
              </a>
            </li>
            <li class="nav-item bg-orange py-1 px-4">
              <router-link to="/donate" class="nav-link text-white"
                >DONATE</router-link
              >
            </li>
          </ul>
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
          <li>
            <a href="https://paystack.shop/adc-shop">ADC SHOP
            <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i
            ></a>
          </li>
           <li>
            <a href="https://paystack.shop/adc-shop">VOLUNTEER
            <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i
            ></a>
          </li>

          <li>
            <router-link to="/resources"
              >RESOURCES
              <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i
            ></router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
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
</style>
