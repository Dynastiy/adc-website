<template>
  <div>
    <div class="header">
      <app-header />
      <div class="content">
        <h2 class="font-weight-bold headerss text-white text-center pb-5">
          Brand Assets
        </h2>
      </div>
    </div>

    <div class="content">
      <div class="assets__container">
        <div class="asset__card p-3">
          <img
            src="@/assets/img/brand_assets/logo_horizontal_dark.png"
            alt=""
            width="150"
          />
          <p class="font-weight-bold mt-2">Horizontal Logo with Dark text</p>
          <div class="asset__download bg-darker p-3">
            <p class="font-weight-bold text-white">Want to Use this Item?</p>
            <a href="https://wallsdesk.com/wp-content/uploads/2017/01/Pictures-of-Dublin-.jpg" download> Download
            </a>
          </div>
        </div>
        <div class="asset__card p-3">
          <img
            src="@/assets/img/brand_assets/logo_horizontal_white.png"
            alt=""
            width="150"
          />
          <p class="font-weight-bold mt-2">Horizontal Logo with White text</p>
          <div class="asset__download bg-darker p-3">
            <p class="font-weight-bold text-white">Want to Use this Item?</p>
            <button class="btn btn-light font-weight-bold">Download</button>
          </div>
        </div>
        <div class="asset__card p-3">
          <img
            src="@/assets/img/brand_assets/logo_vertical_dark.png"
            alt=""
            width="40"
          />
          <p class="font-weight-bold mt-2">Vertical Logo with Dark text</p>
          <div class="asset__download bg-darker p-3">
            <p class="font-weight-bold text-white">Want to Use this Item?</p>
            <button class="btn btn-light font-weight-bold">Download</button>
          </div>
        </div>
        <div class="asset__card p-3">
          <img
            src="@/assets/img/brand_assets/logo_vertical_white.png"
            alt=""
            width="40"
          />
          <p class="font-weight-bold mt-2">Vertical Logo with White text</p>
          <div class="asset__download bg-darker p-3">
            <p class="font-weight-bold text-white">Want to Use this Item?</p>
            <button class="btn btn-light font-weight-bold">Download</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AppHeader from "../../../components/appHeader.vue";
  //   import priorities from "../../assets/js/priorities";
  export default {
    components: { AppHeader },
    data() {
      return {
        // priorities: priorities,
      };
    },
  };
</script>

<style scoped>
  .header {
    background: url(../../../assets/img/image2.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #000000c6;
    background-blend-mode: overlay;
    background-attachment: fixed;
  }
  .assets__container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 20px;
  }
  .asset__card {
    position: relative;
    background-color: #effff6;
  }
  .asset__download {
    text-align: center;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  /* .asset__card:hover{
      background-color: red;
      transition: 1s;
  } */
  .asset__card:hover .asset__download {
    opacity: 1;
    transition: 0.2s;
    transition-timing-function: ease-in-out;
  }
  /* .asset__download, .asset__card {
    overflow: hidden;
    position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  backface-visibility: hidden;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.9);
} */
  @media (max-width: 990px) {
  }
</style>
