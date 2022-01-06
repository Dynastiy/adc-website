<template>
  <div>
    <div
      class="simplified-nav bg-white shadow-sm d-flex align-items-center justify-content-between"
    >
      <!-- <div class="content py-3">
        <router-link to="/">
          <img
            src="@/assets/img/brand_assets/logo_horizontal_dark.png"
            alt=""
            width="140"
          />
        </router-link>
      </div> -->
        <nav
          class="navbar navbar-expand-sm font-weight-bold bg-white"
        >
          <router-link to="/" class="navbar-brand">
            <img
              src="@/assets/img/brand_assets/logo_horizontal_dark.png"
              alt=""
              width="140"
            />
          </router-link>
          <button
            class="navbar-toggler bg-dark d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <a class="nav-link text-dark" href="#">About </a>
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
                  <a class="dropdown-item" href="#"
                    >Cardinal Commitments</a
                  >
                  <a class="dropdown-item" href="#">Aims of the Party</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#">Link</a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                JOIN ADC
              </button>
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                TAKE ACTION
              </button>
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                DONATE
              </button>
            </form>
          </div>
        </nav>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
  };
</script>

<style></style>
