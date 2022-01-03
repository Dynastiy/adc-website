<template>
  <div>
    <h1 class="text-center font-weight-bold mt-3 mb-3">Our Candidates</h1>
    <hr class="mx-auto mb-4">
    <!-- Candidate One   -->
    <div class="aspirants">
      <div class="candidate shadow">
        <div class="favor"></div>
        <div class="details p-3">
          <h5 class="font-weight-bold text-main">Favor Ayodele</h5>
          <hr />
          <p class="font-weight-bold">Presidential Aspirant</p>
          <!-- <button class="btn bg-main text-white font-weight-bold small">
            View More
          </button> -->
        </div>
      </div>

       <div class="candidate shadow">
        <div class="moghalu"></div>
        <div class="details p-3">
          <h5 class="font-weight-bold text-main">Professor Kingsley Chiedu Moghalu</h5>
          <hr />
          <p class="font-weight-bold">Presidential Aspirant</p>
          <!-- <button class="btn bg-main text-white font-weight-bold small">
            View More
          </button> -->
        </div>
      </div>

       <div class="candidate shadow">
       <div class="akachukwu"></div>
        <div class="details p-3">
          <h5 class="font-weight-bold text-main">Akachukwu Nwankpo</h5>
          <hr />
          <p class="font-weight-bold">Gubernatorial Aspirant</p>
          <!-- <button class="btn bg-main text-white font-weight-bold small">
            View More
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },

    mounted() {},
  };
</script>

<style scoped>
.favor {
  background-image: url("../../../assets/img/gallery/favor.jpeg");
  height: 20rem;
  background-position: center right;
  background-size: cover;
}
.akachukwu {
  background-image: url("../../../assets/img/gallery/akachukwu.jpeg");
  height: 20rem;
  background-position: top center;
  background-size: cover;
}
.moghalu {
  background-image: url("../../../assets/img/gallery/moghalu.jpeg");
  height: 20rem;
  background-position: top center;
  background-size: cover;
}
  hr {
    width: 3rem;
    background: #000;
    height: 2px;
    margin: 1rem 0;
  }
  .aspirants {
    display: flex;
    gap: 40px;
  }
  .aspirants div {
    width: 100%;
  }
  .small {
    font-size: 0.8rem;
  }
  @media (max-width: 990px){
    .aspirants{
      display: unset;
    }
    .aspirants div {
      margin-bottom: 30px;
    }
  }
</style>
