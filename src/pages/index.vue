<template>
  <div id="appRoot">
    <div class="">
      <div class="header-area">
        <mobile-nav />
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
                <router-link to="/resources"
                  >RESOURCES
                  <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i
                ></router-link>
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
            <div class="navigations">
              <li>
                <router-link to="/about">About</router-link>
              </li>
              <li>
                <a href="javascript:void(0)" id="where_we_stand_trigger"
                  >Where we Stand  <ion-icon name="arrow-dropdown"></ion-icon></a
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
            <li data-target="#carouselExampleCaptions" data-slide-to="6"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="7"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active" data-interval="3000">
              <img
                src="@/assets/img/image4.jpg"
                class="d-block w-100"
                alt="Image Here"
              />
              <div class="carousel-caption d-md-flex">
                <h1>
                  Agriculture is our <br /><span class="nigeria">National</span> Asset 
                </h1>
              </div>
            </div>
            <div class="carousel-item" data-interval="3000">
              <img
                src="@/assets/img/image3.jpg"
                class="d-block w-100"
                alt="Image Here"
              />
              <div class="carousel-caption d-md-flex">
                <h1>
                 Solar power electricity <br />
                  is <span class="nigeria">an option</span>
                </h1>
              </div>
            </div>
            <div class="carousel-item" data-interval="3000">
              <img
                src="@/assets/img/image8.jpg"
                class="d-block w-100"
                alt="Image Here"
              />
              <div class="carousel-caption d-md-flex">
                <h1>
                  Children formal education<br />
                  is a <span class="nigeria">priority </span>
                </h1>
              </div>
            </div>
            <div class="carousel-item" data-interval="3000">
              <img
                src="@/assets/img/image1.jpg"
                class="d-block w-100"
                alt="Image Here"
              />
              <div class="carousel-caption d-md-flex">
                <h1>
                  Agriculture development<br />
                  is a <span class="nigeria">major initiative </span>
                </h1>
              </div>
            </div>
            <div class="carousel-item" data-interval="3000">
              <img
                src="@/assets/img/image2.jpg"
                class="d-block w-100"
                alt="Image Here"
              />
              <div class="carousel-caption d-md-flex">
                <h1>
                  Technology advancement 
                  throughout<span class="nigeria"> our Nation</span>
                </h1>
              </div>
            </div>
            <div class="carousel-item" data-interval="3000">
              <img
                src="@/assets/img/image6.jpg"
                class="d-block w-100"
                alt="Image Here"
              />
              <div class="carousel-caption d-md-flex">
                <h1>
                  Youths - the current <br />
                  and future <span class="nigeria">generation</span>
                </h1>
              </div>
            </div>
             <div class="carousel-item" data-interval="3000">
              <img
                src="@/assets/img/image9.jpg"
                class="d-block w-100"
                alt="Image Here"
              />
              <div class="carousel-caption d-md-flex">
                <h1>
                 Hope after hardship<br />
                  for our <span class="nigeria">Nation</span>
                </h1>
              </div>
            </div>
            <div class="carousel-item" data-interval="3000">
              <img
                src="@/assets/img/image10.jpg"
                class="d-block w-100"
                alt="Image Here"
              />
              <div class="carousel-caption d-md-flex">
                <h1>
                  Empowering women through<br />
                  commerce and <span class="nigeria">industry</span>
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
            placeholder="Search State"
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

    <div class="news-category content">
      <h1 class="core-values-text">News</h1>
      <div class="news-container">
        <!-- <div class="shadow-sm ">
            <img src="@/assets/img/1.png" width="100%" height="30%" alt="img" class="handshake-img" />

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
          </div> -->
        <!-- <div class="shadow-sm d-lg-flex">
          <img src="@/assets/img/1.png" alt="img" class="handshake-img" />

          <div class="news-content">
            <p class="news-date p-1">November 2 2021</p>
            <div class="p-3">
              <h5 class="font-weight-bold">
                IMPACT OF EXTRISINCT MOTIVATION ON INTRISINCT MOVE FORWARD
              </h5>
              <p>
                Lorem ipsum dolor sit amet, sed do Lorem ipsum doloradipisicing
                elit, do eiusmod et dolore magna aliqua. Ut enim ad minim veniam
                od tempor incididunt ut lab.
              </p>
              <a href="#" class="text-orange small font-weight-bold"
                >View More</a
              >
            </div>
          </div>
        </div>
        <div class="shadow-sm d-lg-flex">
          <img src="@/assets/img/1.png" alt="img" class="handshake-img" />

          <div class="news-content">
            <p class="news-date p-1">November 2 2021</p>
            <div class="p-3">
              <h5 class="font-weight-bold">
                IMPACT OF EXTRISINCT MOTIVATION ON INTRISINCT MOVE FORWARD
              </h5>
              <p>
                Lorem ipsum dolor sit amet, sed do Lorem ipsum doloradipisicing
                elit, do eiusmod et dolore magna aliqua. Ut enim ad minim veniam
                od tempor incididunt ut lab.
              </p>
              <a href="#" class="text-orange small font-weight-bold"
                >View More</a
              >
            </div>
          </div>
        </div>
        <div class="shadow-sm d-lg-flex">
          <img src="@/assets/img/1.png" alt="img" class="handshake-img" />

          <div class="news-content">
            <p class="news-date p-1">November 2 2021</p>
            <div class="p-3">
              <h5 class="font-weight-bold">
                IMPACT OF EXTRISINCT MOTIVATION ON INTRISINCT MOVE FORWARD
              </h5>
              <p>
                Lorem ipsum dolor sit amet, sed do Lorem ipsum doloradipisicing
                elit, do eiusmod et dolore magna aliqua. Ut enim ad minim veniam
                od tempor incididunt ut lab.
              </p>
              <a href="#" class="text-orange small font-weight-bold"
                >View More</a
              >
            </div>
          </div>
        </div>
        <div class="shadow-sm d-lg-flex">
          <img src="@/assets/img/1.png" alt="img" class="handshake-img" />

          <div class="news-content">
            <p class="news-date p-1">November 2 2021</p>
            <div class="p-3">
              <h5 class="font-weight-bold">
                IMPACT OF EXTRISINCT MOTIVATION ON INTRISINCT MOVE FORWARD
              </h5>
              <p>
                Lorem ipsum dolor sit amet, sed do Lorem ipsum doloradipisicing
                elit, do eiusmod et dolore magna aliqua. Ut enim ad minim veniam
                od tempor incididunt ut lab.
              </p>
              <a href="#" class="text-orange small font-weight-bold"
                >View More</a
              >
            </div>
          </div>
        </div>
      </div>
      <router-link
        to="/news"
        class="text-orange mt-3 d-block text-right font-weight-bold"
        >See All</router-link
      > -->
        <!-- <VueRssFeed :feedUrl="feedUrl" :name="name" :limit="limit"/> -->
    </div>
    </div>

    <div class="gallery">
      <h1 class="core-values-text mt-4">Gallery</h1>
      <div class="gallery">
        <carousel-area />
      </div>
    </div>
  </div>
</template>

<script>
  import mobileNav from "../components/mobile_nav.vue";
  import paystack from "vue-paystack";
  import aboutus from "../components/about_us.vue";
  import coreValues from "../components/core.vue";
  // import VueRssFeed from "vue-rss-feed"
  import carouselArea from "../components/carousel.vue";
  export default {
    components: {
      mobileNav,
      paystack,
      aboutus,
      coreValues,
      // VueRssFeed,
      carouselArea,
    },
    data() {
      return {
        slides: 5,
        feedUrl: "https://rss.app/feeds/t9BumKhsA1cD9Lbv.xml",
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

<style>
  .where-we-stand {
    background: #224f5a;
    margin-top: -1rem;
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
  .news-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
  }
  /* .news-container div:nth-child(1){
  grid-row-start: 1;
  grid-row-end: 3;
} */
  .gallery {
    height: 500px;
  }
  .feed .articles-container {
    display: flex !important;
    /* grid-template-columns: 1fr 1fr; */
  }
  .carousel img {
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
    top: 20%;
    left: 0;
    padding-left: 3rem;
    padding-top: 3rem;
  }
  .carousel-caption h1 {
    font-size: 5rem;
    text-align: left;
    line-height: 5.3rem;
    font-weight: 900;
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
    /* text-align: right; */
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

  @media (max-width: 990px) {
    .carousel img {
      height: 400px;
    }
    .news-container {
      display: unset;
    }
    .news-container div {
      margin-bottom: 0.8rem;
      /* display: unset !important; */
    }
    .carousel-indicators {
      bottom: 20%;
    }
    .logo-navs {
      display: none !important;
    }
    .carousel-caption h1 {
      line-height: 2.5rem;
      font-size: 3rem;
    }
    .nigeria {
      font-size: 3rem !important;
    }
  }
</style>
