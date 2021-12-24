<template>
  <div>
    <div class="header">
      <app-header />
      <div class="content">
        <h2 class="font-weight-bold headerss text-white text-center pb-5">
          Our Priorities
        </h2>
      </div>
    </div>

    <div class="content">
      <div class="priorities__container">
        <div class="priorities__content">
          <div
            class="card-content shadow d-flex align-items-start"
            v-for="(priority, index) in priorities"
            :key="index">
            <div
              class="left_icon"
              :style="{ 'background-color': `${priority.color}` }"
            >
              <h2 class="font-weight-bold">
                {{ priority.id }}
              </h2>
            </div>
            <div class="right__content ml-2">
              <h5 class="font-weight-bold card-title">
                {{ priority.title }}
              </h5>
              <p class="small card-text">
                {{ priority.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AppHeader from "../../components/appHeader.vue";
  import priorities from "../../assets/js/priorities";
  export default {
    components: { AppHeader },
    data() {
      return {
        priorities: priorities,
      }
    },
  };
</script>

<style scoped>
.header{
  background: url(../../assets/img/priorities.jpg);
       background-position:bottom;
       background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #000000c7;
    background-blend-mode: overlay;
}
  .priorities__content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
  }
  .card-content {
    background-color: transparent;
    padding: 1rem;
  }
  .card-content:hover {
      transform: scale(1.1);
      transition: 0.4s;
  }
  .left_icon {
    /* padding: 0.3rem; */
    width: 3rem;
    height: 1.5rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .left_icon ion-icon {
    color: #fff;
  }
  @media (max-width: 990px){
      .priorities__content {
          display: unset;
      }
      .card-content {
          margin-bottom: 15px;
      }
  }
</style>
