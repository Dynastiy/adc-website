<template>
  <div>
    <div class="mobile__nav sticky">
      <div id="">
        <div class="d-flex">
          <div class=" bg-main w-100 text-center font-weight-bold py-3">
            <router-link to="/join_adc" class="text-white">JOIN ADC</router-link>
          </div>
          <div class=" bg-darker w-100 text-center font-weight-bold py-3"  id="take-action">
            <a href="javascript:void(0)" class="text-white" @click="openDialog4">TAKE ACTION</a>
          </div>
          <div class=" bg-orange w-100 text-center font-weight-bold py-3">
            <router-link to="/donate" class="text-white">DONATE</router-link>
          </div>
        </div>
      </div>
      <nav
        class="navbar navbar-expand-sm navbar-light bg-light shadow-lg"
        id="mobile-nav"
      >
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
          <ul
            class="navbar-nav mr-auto mt-2 mt-lg-0 text-dark font-weight-bold"
          >
            <li class="nav-item">
              <router-link to="/join_adc" class="nav-link text-dark"
                >Join ADC
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link text-dark"
                >About Us
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/our_manifesto" class="nav-link text-dark"
                >Our Manifesto
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/our_priorities" class="nav-link text-dark"
                >Our Priorities
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/donate" class="nav-link text-dark"
                >Donate</router-link
              >
            </li>
            <li class="nav-item">
              <a href="https://adc-dn.org/" class="nav-link text-dark"
                >ADC in Diaspora
              </a>
            </li>
            <li class="nav-item">
              <router-link to="/news" class="nav-link text-dark"
                >News
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link text-dark"
                >Login
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
     <!-- Dialog Drawer  -->
     <div class="take-action-overlay bg-darker" id="take-action-overlay4">
      <div class="close" @click="closeDialog4">
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

  </div>
</template>

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
.mobile-navigation a {
  color: #fff;
  font-weight: bold;
  display: block;
  padding: 2rem;
}
.mobile-navigation .router-link-exact-active {
  color: #3ee987;
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
   methods:{
      openDialog4() {
        const overlay = document.getElementById("take-action-overlay4");
        overlay.classList.add("active");
      },
      closeDialog4() {
        const overlay = document.getElementById("take-action-overlay4");
        overlay.classList.remove("active");
      },
    },
  mounted() {},
};
</script>
