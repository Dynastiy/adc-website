<template>
  <div id="appRoot">
    <div class="">
      <div class="header-area">
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
        <!-- overlay -->
        <div class="take-action-overlay bg-darker" id="take-action-overlay">
          <div class="close" @click="closeDialog">
            <ion-icon name="close"></ion-icon>
            <!-- <p class="text-white dialog-close"  >X</p> -->
          </div>
          <div class="">
            <ul class="list-unstyled">
              <li class="mb-3">
                <router-link to="/login"
                  >LOGIN
                  <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                </router-link>
              </li>
              <li>
                <a href=""
                  >RESOURCES
                  <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="header-content">
          <div class="logo-navs content pt-0">
            <div class="logo">
              <router-link to="/"
                ><img src="@/assets/img/logo.png" alt="logo" width="180"
              /></router-link>
            </div>

            <input type="checkbox" id="check" />
            <label for="check">
              <i class="fa fa-bars text-white" id="bars" aria-hidden="true"></i>
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
      </div>
      <div class="welcome-text">
        <div
          id="carouselExampleCaptions"
          class="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active" data-interval="2000">
              <img
                src="@/assets/img/image4.jpg"
                class="d-block w-100"
                alt="Image Here"
              />
              <div class="carousel-caption d-none d-md-flex">
                <h1>
                  Welcome to a <br />
                  new <span class="nigeria">Nigeria</span>
                </h1>
              </div>
            </div>
            <div class="carousel-item" data-interval="2000">
              <img
                src="@/assets/img/image13.jpg"
                class="d-block w-100"
                alt="Image Here"
              />
              <div class="carousel-caption d-none d-md-flex">
                <h1>
                  A <span class="nigeria">Nigeria</span> <br />
                  of Limitless <br />
                  <span class="nigeria">Possibilities</span>
                </h1>
              </div>
            </div>
            <div class="carousel-item" data-interval="2000">
              <img
                src="@/assets/img/image3.jpg"
                class="d-block w-100"
                alt="Image Here"
              />
              <div class="carousel-caption d-none d-md-flex">
                <h1>
                  Welcome to a <br />
                  new <span class="nigeria">Nigeria</span>
                </h1>
              </div>
            </div>
            <div class="carousel-item" data-interval="2000">
              <img
                src="@/assets/img/image5.jpg"
                class="d-block w-100"
                alt="Image Here"
              />
              <div class="carousel-caption d-none d-md-flex">
                <h1>
                  A <span class="nigeria">Nigeria</span> <br />
                  of Limitless <br />
                  <span class="nigeria">Possibilities</span>
                </h1>
              </div>
            </div>
            <div class="carousel-item" data-interval="2000">
              <img
                src="@/assets/img/image7.jpg"
                class="d-block w-100"
                alt="Image Here"
              />
              <div class="carousel-caption d-none d-md-flex">
                <h1>
                  Welcome to a <br />
                  new <span class="nigeria">Nigeria</span>
                </h1>
              </div>
            </div>
            <div class="carousel-item" data-interval="2000">
              <img
                src="@/assets/img/image10.jpg"
                class="d-block w-100"
                alt="Image Here"
              />
              <div class="carousel-caption d-none d-md-flex">
                <h1>
                  A <span class="nigeria">Nigeria</span> <br />
                  of Limitless <br />
                  <span class="nigeria">Possibilities</span>
                </h1>
              </div>
            </div>
          </div>
          <!-- <button
            class="carousel-control-prev"
            type="button"
            data-target="#carouselExampleCaptions"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-target="#carouselExampleCaptions"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </button> -->
        </div>
      </div>
    </div>
    <div class="search-support">
      <div class="support">
        <i class="fa fa-angle-down" aria-hidden="true" id="angle-icon"></i>
        <div class="support-campaign bg-main">
          <h5 class="font-weight-bold">Support Our Campaign</h5>
          <div class="price-buttons">
            <paystack
              :amount="500 * 100"
              :email="email"
              :paystackkey="PUBLIC_KEY"
              :reference="reference"
              :callback="processPayment"
              :close="close"
            >
              N500
            </paystack>
            <paystack
              :amount="1000 * 100"
              :email="email"
              :paystackkey="PUBLIC_KEY"
              :reference="reference2"
              :callback="processPayment"
              :close="close"
            >
              N1000
            </paystack>

            <router-link to="/donate"><button>Other</button></router-link>
          </div>
        </div>
      </div>
      <div class="search">
        <h3 class="search-text">Find State Chairperson</h3>

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="search-icon"
              ><i class="fa fa-search" aria-hidden="true"></i
            ></span>
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="State Chairperson"
            placeholder="Search Chairperson"
          />
          <div class="input-group-append">
            <span class="input-group-text" id="arrow-icon">
              <i class="fa fa-arrow-right" aria-hidden="true"></i
            ></span>
          </div>
        </div>
      </div>
    </div>

    <!-- <hero-text/> -->

    <div class="content">
      <aboutus />

      <core-values />
    </div>

    <div class="news-category">
      <h1 class="core-values-text">News</h1>
     <VueRssFeed :feedUrl="feedUrl" :name="name" :limit="limit"/>
      <!-- <div class="news-div">
        <div>
          <img
            src="@/assets/img/adc17.png"
            alt="img"
            class="flag-img"
            width="100%"
          />

          <div class="news-content shadow-sm">
            <p class="news-date p-1">November 2 2021</p>
            <div class="p-3">
              <h5 class="font-weight-bold">
                IMPACT OF EXTRISINCT MOTIVATION ON INTRISINCT MOVE FORWARD
              </h5>
              <p class="small">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam od tempor incididunt ut lab. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam od tempor incididunt ut lab.
              </p>
              <a href="#" class="font-weight-bold small text-orange"
                >View More</a
              >
            </div>
          </div>
        </div>

        <div>
          <div class="second-news-content shadow-sm">
            <img src="@/assets/img/1.png" alt="img" class="handshake-img" />

            <div class="news-content">
              <p class="news-date p-1">November 2 2021</p>
              <div class="p-3">
                <h5 class="font-weight-bold">
                  IMPACT OF EXTRISINCT MOTIVATION ON INTRISINCT MOVE FORWARD
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, sed do Lorem ipsum
                  doloradipisicing elit, do eiusmod et dolore magna aliqua. Ut
                  enim ad minim veniam od tempor incididunt ut lab.
                </p>
                <a href="#" class="text-orange small font-weight-bold"
                  >View More</a
                >
              </div>
            </div>
          </div>

          <div class="second-news-content shadow-sm">
            <img src="@/assets/img/1.png" alt="img" class="handshake-img" />

            <div class="news-content">
              <p class="news-date p-1">November 2 2021</p>
              <div class="p-3">
                <h5 class="font-weight-bold">
                  IMPACT OF EXTRISINCT MOTIVATION ON INTRISINCT MOVE FORWARD
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, sed do Lorem ipsum
                  doloradipisicing elit, do eiusmod et dolore magna aliqua. Ut
                  enim ad minim veniam od tempor incididunt ut lab.
                </p>
                <a href="#" class="text-orange small font-weight-bold"
                  >View More</a
                >
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>

    <div class="gallery">
      <h1 class="core-values-text mt-4">Gallery</h1>
      <div class="gallery">
        <carousel-area/>
      </div>
      
    </div>
  </div>
</template>

<script>
  import paystack from "vue-paystack";
  import aboutus from "../components/about_us.vue";
  import coreValues from "../components/core.vue";
  import VueRssFeed from "vue-rss-feed"
  import carouselArea from '../components/carousel.vue'
  export default {
    components: {
      paystack,
      aboutus,
      coreValues,
      VueRssFeed,
      carouselArea
    },
    data() {
      return {
        slides: 5,
        feedUrl: "https://rss.app/feeds/Qb5AfPKhd7PRQhE4.xml",
        name: "",
        limit: 4,
        full_name: " ",
        email: "donor@email.com",
        PUBLIC_KEY: "pk_live_6c2684fe83cd844c750932b184a1bbe26f380912",
      };
    },

    methods: {
      processPayment: () => {
        window.alert("Payment recieved");
      },
      close: () => {
        console.log("You closed checkout page");
      },
      openDialog() {
        const overlay = document.getElementById("take-action-overlay");
        overlay.classList.add("active");
      },
      closeDialog() {
        const overlay = document.getElementById("take-action-overlay");
        overlay.classList.remove("active");
      },
    },
    computed: {
      reference() {
        let text = "";
        let possible =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 10; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
      },
      reference2() {
        let text = "";
        let possible =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 10; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
      },
    },
  };
</script>

<style scoped>
.gallery {
  height: 500px;
}
.feed .articles-container {
  display: flex !important;
  /* grid-template-columns: 1fr 1fr; */
}
  .carousel img {
    /* height: 800px; */

    object-fit: cover;
    opacity: 0.3;
  }
  .carousel-item {
    max-height: 100vh;
    background: black;
    overflow: hidden;
  }
  .carousel-caption {
    position: absolute;
    top: 30%;
  }
  .carousel-caption h1 {
    font-size: 5rem;
    text-align: left;
    line-height: 5.3rem;
    text-shadow: 2px 2px #000;
  }
  .carousel {
    position: relative;
  }
  .carousel-indicators {
    position: absolute;
    bottom: 40%;
    /* width: 100%; */
    left: 80%;
    /* background-color: red; */
    z-index: 999;
    display: block;
  }
  .carousel-indicators li {
    /* background-color: red; */
    width: 7px;
    height: 7px;
    border-radius: 50%;
  }
  .header-area {
    position: absolute;
    top: 0;
    z-index: 999;
    width: 100%;
    text-align: right;
  }
  .navigations a {
    color: #fff;
    font-weight: bold;
    text-shadow: 0px 0px rgba(0, 0, 0, 0.5);
  }
  .take-action-overlay {
    min-height: 100vh;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 000000;
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

  @media screen and (max-width: 764px) {
    .carousel img {
      height: 400px;
    }
  }
</style>
