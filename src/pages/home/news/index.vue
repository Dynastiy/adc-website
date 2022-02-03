<template>
  <div>
    <div class="header">
      <app-header />
      <div class="content">
        <h2 class="font-weight-bold text-white text-center headerss pb-5">
          News
        </h2>
      </div>
    </div>

    <!-- Main News Content  -->
   <div class="news__container bg-light-accent">
      <!-- <div class="news-container container">
      <div
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
            <a :href="news_item.link" class="text-orange small font-weight-bold"
              >View More</a
            >
          </div>
        </div>
      </div>
    </div> -->
    <VueRssFeed :feedUrl="feedUrl" :name="name" :limit="limit"/>
   </div>
  </div>
</template>

<script>
  import axios from "axios";
  import AppHeader from "../../../components/appHeader.vue";
  import VueRssFeed from "vue-rss-feed"
  export default {
    components: { AppHeader, VueRssFeed },
    data() {
      return {
        news: "",
        feedUrl: "https://rss.app/feeds/hBShOpOCBnULXzDT.xml"
      };
    },
    methods: {
      async getNews() {
        try {
          let res = await axios.get(
            "https://v1.nocodeapi.com/lizzy/medium/fFRmDLgGxupAJbEJ"
          );
          console.log(res);
          this.news = res.data;
          console.log(this.news);
        } catch (error) {
          console.log(error);
        }
      },
    },
    async created() {
      this.getNews();
    },
  };
</script>

<style scoped>
  .header {
    background: url(../../../assets/img/newsbg.jpg);
    background-position: bottom;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #000000d9;
    background-blend-mode: overlay;
  }
  .news__container{
    padding: 2rem 6rem;
  }
  .header .content h2 {
    text-shadow: 0px 2px rgba(0, 0, 0, 0.8);
  }
  .news-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 15px;
  }
  @media (max-width: 990px) {
    .news__container {
      /* display: unset; */
      padding: 2rem;
    }
    .news-container {
      display: unset;
    }
    .news-container div {
      margin-bottom: 15px;
    }
  }
</style>
