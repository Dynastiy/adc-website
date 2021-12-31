<template>
  <div>
    <simplified-nav />
    <div class="content-tab container">
      <h1 class="font-weight-bold text-darker mb-2">Join ADC</h1>
      <p class="font-weight-bold text-darker larger-text w-75 mb-5"> 
        We’ve come a long way together. And our
        supporters made everything possible. <pre></pre> Membership is the best way to
        protect what we’ve achieved together and keep our progress going. You
        started it, now be part of it!
      </p>
      <h2 class="font-weight-bold mt-5 text-darker mb-5 text-center" >Choose a Membership Rate</h2>
     <div class="reg__cards">
          <div class="below_30 shadow p-3">
        <!-- <h4 class="font-weight-bold text-center mt-2">Are you between 18 and 30?</h4> -->
        <!-- <h5 class="text-center font-weight-bold"> &#8358;200</h5> -->
        <p class="font-weight-bold mt-5">
          Registration link for Persons between 18-30 years &
          Persons with Disabilities.
        </p>
        <router-link to="reg_form"
          ><button
            class="bg-darker mt-3 w-100 btn font-weight-bold text-white small-btn-text"
          >
            Choose
          </button></router-link
        >
      </div>
      <div class="below_30 shadow p-3">
        <!-- <h4 class="font-weight-bold text-darker text-center mt-2">Are you above 30?</h4> -->
        <!-- <h5 class="text-center font-weight-bold"> &#8358; 500</h5> -->
        <p class="font-weight-bold mt-5">
          Below is the Registration link for Persons above 30 years of age
        </p>
        <router-link to="reg_form"
          ><button
            class="w-100 mt-3 bg-darker btn font-weight-bold text-white small-btn-text"
          >
            Choose
          </button></router-link
        >
      </div>
      <!-- <div class="below_30 shadow p-3">
        <h4 class="font-weight-bold text-orange">Registered Member</h4>
        <p class="text-muted">
          Already a member?
        </p>
        <router-link to="reg_form"
          ><button
            class="bg-orange mt-3 btn font-weight-bold text-white small-btn-text"
          >
            Renew Membership
          </button></router-link
        >
      </div> -->
     </div>
      <div class="my-5 d-flex align-items-center">
        <div class="div__line"></div>
        <h4 class="ml-3 mr-3 font-weight-bold">OR</h4>
        <div class="div__line"></div>
      </div>
      <div>
        <button
          class="bg-darker w-100 btn font-weight-bold text-white small-btn-text"
        >
          I AM ALREADY A MEMBER, RENEW MY MEMBERSHIP
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import SimplifiedNav from "../../components/simplified_nav.vue";
  export default {
    components: { SimplifiedNav },
    data() {
      return {};
    },
  };
</script>

<style>
.content-tab {
  padding: 2rem 8rem;
}
.below_30 {
    /* background:#effff6; */
    border-radius: 5px;
    width: 100%;
}
.content h1 {
    font-weight: 900;
}
.larger-text{
    font-size: 1rem;
}
.reg__cards {
    display: flex;
    grid-gap: 20px;
}
  .small-btn-text {
    font-size: 1rem !important;
    padding: 0.8rem 1.8rem;
  }
  .div__line {
    height: 1px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
</style>
