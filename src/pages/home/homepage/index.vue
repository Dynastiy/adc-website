<template>
  <div id="appRoot">
    <div class="">
      <div class="header-area">
        <mobile-nav />
        <div class="" id="navbar-main">
          <div class="request-links">
            <div class="top-links bg-main">
              <router-link to="/join_adc">JOIN ADC</router-link>
            </div>
            <div
              class="top-links bg-darker"
              id="take-action"
              @click="openDialog"
            >
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
                    <div
                      class="dropdown-menu bg-darker"
                      aria-labelledby="dropdownId"
                    >
                      <router-link to="/our_manifesto" class="dropdown-item"
                        >Our Manifesto</router-link
                      >
                      <router-link to="/our_priorities" class="dropdown-item"
                        >Our Priorities</router-link
                      >
                      <router-link
                        to="/cardinal_commitments"
                        class="dropdown-item"
                        >Cardinal Commitments</router-link
                      >
                    </div>
                  </li>
                  <li>
                    <a target="_blank" href="https://adc-dn.org/">ADC Diaspora</a>
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

        <simplified-nav id="simplified2"/>

        <!-- overlay -->
        <div class="take-action-overlay bg-darker" id="take-action-overlay1">
          <div class="close" @click="closeDialog">
            <ion-icon name="close"></ion-icon>
            <!-- <p class="text-white dialog-close"  >X</p> -->
          </div>
          <div class="">
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
                  Agriculture is our <br /><span class="nigeria">national</span>
                  asset
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
                  Renewable energy <br />
                  is <span class="nigeria">an undebateable</span> <br/>
                  solution
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
                  Formal education<br />
                  for children <br/>
                  is a <span class="nigeria">priority </span>
                </h1>
              </div>
            </div>
            <!-- <div class="carousel-item" data-interval="3000">
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
            </div> -->
            <div class="carousel-item" data-interval="3000">
              <img
                src="@/assets/img/image2.jpg"
                class="d-block w-100"
                alt="Image Here"
              />
              <div class="carousel-caption d-md-flex">
                <h1>
                  Focus on technology <br/> advancement throughout<span class="nigeria"> <br/>
                    our nation</span
                  >
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
                  for our <span class="nigeria">nation</span>
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
                  Empowering women <br/> through 
                  commerce <br/> and <span class="nigeria">industry</span>
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
        <!-- <ion-icon name="arrow-down"></ion-icon> -->
        <div class="support-campaign bg-main">
          <h5 class="font-weight-bold">Support Our Campaign</h5>
          <div class="price-buttons">
            <paystack
              :amount="500 * 100"
              :email="email"
              class="btn__white"
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
              class="btn__white"
              :paystackkey="PUBLIC_KEY"
              :reference="reference2"
              :callback="processPayment"
              :close="close"
            >
              N1000
            </paystack>

            <router-link to="/donate" ><button class="btn__white">Other</button></router-link>
          </div>
        </div>
      </div>
      <div class="search">
        <search-area/>
      </div>
    </div>
<div v-if="ress">
  <div  v-for="r of resultQuery" :key="r.id">{{r.title}} result</div>
</div>

    <!-- <hero-text/> -->

    
      <aboutus  />
<div class="content">
      <core-values />
    </div>

    <div class="news-category content">
      <h1 class="core-values-text">News</h1>
      <div class="news-container">
        <!-- <div
          class="shadow-sm bg-white"
          v-for="(news_item, index) in news"
          :key="index"
        >

          <div class="news-content">
            <p class="news-date p-1">{{ news_item.pubDate | formatDate }}</p>
            <div class="p-3">
              <h5 class="font-weight-bold text-uppercase">
                {{ news_item.title }}
              </h5>
              <p>
                {{ news_item.contentSnippet }}
              </p>
              <a
                :href="news_item.guid"
                class="text-orange small font-weight-bold"
                >View More</a
              >
            </div>
          </div>
        </div> -->
        <VueRssFeed :feedUrl="feedUrl" :name="name" :limit="4"/>
      </div>
      <div class="text-right font-weight-bold mt-4">
        <router-link to="/news" class="text-orange">View All</router-link>
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
  import axios from "axios";
  // import news from '../assets/js/news'
  import searchArea from '@/components/search.vue'
  import mobileNav from "../../../components/mobile_nav.vue";
  import paystack from "vue-paystack";
  import simplifiedNav from '../../../components/simplified_nav.vue';
  import aboutus from "../../../components/about_us.vue";
  import coreValues from "../../../components/core.vue";
  import VueRssFeed from "vue-rss-feed"
  import carouselArea from "../../../components/carousel.vue";
// import Search from '../../../components/search.vue';
  export default {
    components: {
      mobileNav,
      paystack,
  searchArea,
      aboutus,
      simplifiedNav,
      coreValues,
      VueRssFeed,
      carouselArea,
    },
    data() {
      return {
        feedUrl: "https://rss.app/feeds/hBShOpOCBnULXzDT.xml",
        searchQuery: null,
        ress: false,
      resources: [
        { id: 1, title: "javascript for dummies" },
        { id: 2, title: "vue for dummies" },
        { id: 3, title: "dos for dummies" },
        { id: 4, title: "windows for dummies" },
        { id: 5, title: "html for dummies" }
      ],
        username: "",
        showUsername: true,
        slides: 5,
        news: "",
        baseUrl: "https://api.adc.org.ng/api/",
        // feedUrl: "https://politics.einnews.com/rss/cZWEClscooCkMFvs",
        name: "",
        limit: 4,
        full_name: " ",
        email: "donor@email.com",
        PUBLIC_KEY: "pk_live_6c2684fe83cd844c750932b184a1bbe26f380912",
      };
    },

    methods: {
      async getNews() {
        try {
          let res = await axios.get(
            "https://v1.nocodeapi.com/lizzy/medium/fFRmDLgGxupAJbEJ"
          );
          console.log(res.data);
          let newsStuffs = res.data;
          this.news = newsStuffs.slice(0, 4);
        } catch (error) {
          console.log(error);
        }
      },
      processPayment: () => {
        window.alert("Payment received");
      },
      close: () => {
        console.log("You closed checkout page");
      },
      openDialog() {
        const overlay = document.getElementById("take-action-overlay1");
        overlay.classList.add("active");
      },
      closeDialog() {
        const overlay = document.getElementById("take-action-overlay1");
        overlay.classList.remove("active");
      },
    },
    mounted() {
       window.onscroll = function() {myFunction()};
      var navbar = document.getElementById("navbar-main");
      var simplified = document.getElementById("simplified2")
      var sticky = simplified.offsetTop;

      function myFunction() {
        if (window.pageYOffset > sticky) {
          simplified.classList.add("sticky2")
          navbar.style.display = 'none';
          simplified.style.display = "block"
        } else {
          simplified.classList.remove("sticky2");
          navbar.style.display = "block";
          simplified.style.display = "none"
        }
      }
    },
    async created() {
      this.getNews();
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
      resultQuery() {
      if (this.searchQuery) {
        return this.resources.filter(item => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every(v => item.title.toLowerCase().includes(v));
            
        });
      } else {
        return this.resources;
      }
    }
    },
  };
</script>

<style>
.btn__white{
  background: #fff ;
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
#simplified2 {
  display: none;
}
.sticky2 {
  position: fixed;
  top: 0;
  width: 100%;
}
.sticky2 + .content {
  padding-top: 60px;
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
    grid-gap: 15px;
  }
  /* .news-container div{
  grid-row-start: 1;
  grid-row-end: 3;
} */
  .gallery {
    height: 500px;
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
    bottom: 25%;
    /* width: 100%; */
    left: 80%;
    /* background-color: red; */
    z-index: 999;
    display: block;
  }
  .carousel-indicators li {
    /* background-color: red; */
    width: 8px;
    height: 8px;
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
    .carousel-caption {
    top: 25%
  }
    .carousel img {
      height: 500px;
    }
    .news-container {
      display: unset;
    }
    .news-container div {
      margin-bottom: 0.8rem;
      /* display: unset !important; */
    }
    .carousel-indicators {
      bottom: 4%;
    }
    .logo-navs {
      display: none !important;
    }
    .carousel-caption h1 {
      line-height: 2.5rem;
      font-size: 3rem;
      letter-spacing: -3px;
      text-transform:initial;
      width: 30%;
    }
    .nigeria {
      font-size: 3rem !important;
    }
    #simplified2, .sticky {
      display: none,
    }
  }
</style>
