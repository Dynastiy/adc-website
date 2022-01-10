<template>
  <div class="sticky-top">
    <header class="simplified-nav shadow-sm bg-white">
      <div class="navbar navbar-expand-sm navbar-light  shadow-lg">
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
              <div class="dropdown-menu" aria-labelledby="dropdownId">
                <a class="dropdown-item" href="#">Our Manifesto</a>
                <a class="dropdown-item" href="#">Our Priorities</a>
                <a class="dropdown-item" href="#">ADC Objectives</a>
                <a class="dropdown-item" href="#">Cardinal Commitments</a>
                <a class="dropdown-item" href="#">Aims of the Party</a>
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
            <li class="nav-item bg-darker py-1 px-4">
              <router-link to="/join_adc" class="nav-link text-white"
                >TAKE ACTION
              </router-link>
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
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    mounted() {
      // When the user scrolls the page, execute myFunction
      window.onscroll = function () {
        myFunction();
      };

      // Get the navbar
      var navbar = document.getElementById("navbar");

      // Get the offset position of the navbar
      var sticky = navbar.offsetTop;

      // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
      function myFunction() {
        if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
      }
    },
  };
</script>

<style scoped>
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
