<template>
  <div>
    <div class="header">
      <app-header />
      <div class="content">
        <h2 class="font-weight-bold headerss text-white text-center pb-5">About Us</h2>
        <ul class="nav nav-pills" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <a
              class="nav-link active"
              id="pills-structure-tab"
              data-toggle="pill"
              href="#pills-structure"
              role="tab"
              aria-controls="pills-structure"
              aria-selected="true"
              >PARTY STRUCTURE</a
            >
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link"
              id="pills-chairman-tab"
              data-toggle="pill"
              href="#pills-chairman"
              role="tab"
              aria-controls="pills-chairman"
              aria-selected="false"
              >CHAIRMAN'S MESSAGE</a
            >
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link"
              id="pills-obasanjo-tab"
              data-toggle="pill"
              href="#pills-obasanjo"
              role="tab"
              aria-controls="pills-obasanjo"
              aria-selected="false"
              >OBASANJO'S MESSAGE</a
            >
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link"
              id="pills-candidates-tab"
              data-toggle="pill"
              href="#pills-candidates"
              role="tab"
              aria-controls="pills-candidates"
              aria-selected="false"
              >OUR CANDIDATES</a
            >
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link"
              id="pills-state-tab"
              data-toggle="pill"
              href="#pills-state"
              role="tab"
              aria-controls="pills-state"
              aria-selected="false"
              >STATE CHAPTERS</a
            >
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link"
              id="pills-contact-tab"
              data-toggle="pill"
              href="#pills-contact"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="true"
              >CONTACT US</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-structure"
          role="tabpanel"
          aria-labelledby="pills-structure-tab">
          <partystructure/>
        </div>
        <div
          class="tab-pane fade"
          id="pills-chairman"
          role="tabpanel"
          aria-labelledby="pills-chairman-tab"
        >
          <chairmansmessage/>
        </div>
        <div
          class="tab-pane fade"
          id="pills-obasanjo"
          role="tabpanel"
          aria-labelledby="pills-obasanjo-tab"
        >
          <obasanjos-message/>
        </div>
        <div
          class="tab-pane fade"
          id="pills-candidates"
          role="tabpanel"
          aria-labelledby="pills-candidates-tab"
        >
          Page 5
        </div>
        <div
          class="tab-pane fade"
          id="pills-state"
          role="tabpanel"
          aria-labelledby="pills-state-tab"
        >
          <state-chapters/>
        </div>
        <div
          class="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab">
          <contact-us/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AppHeader from "../../components/appHeader.vue";
import chairmansmessage from './components/chairmans_message.vue';
import ContactUs from './components/contact_us.vue';
import ObasanjosMessage from './components/obasanjos_message.vue';
import partystructure from './components/party_structure.vue';
import StateChapters from './components/state_chapters.vue';
  export default {
    components: { AppHeader, chairmansmessage, ObasanjosMessage, ContactUs, partystructure, StateChapters },
    data() {
      return {
        };
    },
  };
</script>

<style scoped>
  .header .content h2 {
    text-shadow: 0px 2px rgba(0, 0, 0, 0.8);
  }
  .nav-pills .nav-link.active, .nav-pills .show>.nav-link {
      background-color: #00a54f;
      color: #fff;
  }
  .nav-pills .nav-link {
      border-radius: 5px;
  }
  .header .content .nav {
      justify-content: space-around;
      background: #fff;
      padding: 1.2rem 0.1rem;
      border-radius: 5px;
  }
   .header .content a {
       color: #000;
       font-weight: bold;
       font-size: 0.8rem;
   }
</style>
