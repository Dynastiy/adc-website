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

    <div class="content bg-light-accent">
      <div class="priorities__container ">
        <div class="priorities__content ">
          <div
            class="card-content shadow  bg-white"
            v-for="(priority, index) in priorities"
            :key="index">
            <div>
              <img :src="priority.avatar" alt="Image Here" srcset="" width="100%">
            </div>
            <div
              class="p-2"
              :style="{ 'background-color': `${priority.color}` }"
            >
               <h5 class="font-weight-bold text-center m-0 card-title text-white text-capitalize">
                {{ priority.title }}
              </h5>
            </div>
            <div class="right__content p-4">
              <p class="card-text">
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
  import AppHeader from "../../../../components/appHeader.vue";
  import priorities from "@/assets/js/priorities";
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
.right__content p {
  font-size: 0.9rem;
}
.priorities__container{
  padding: 2rem 8rem;
}
.header{
  background: url(../../../../assets/img/priorities.jpg);
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
    grid-gap: 40px;
  }
  .card-content {
    background-color: transparent;
    /* padding: 1rem; */
  }
  .priorities__content img{
    width:100%;
  height:10rem;
  object-fit:cover;
  }
  /* .card-content:hover {
      transform: scale(1.1);
      transition: 0.4s;
  } */
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
    .priorities__container{
      padding: 2rem 1rem;
    }
      .priorities__content {
          display: unset;
      }
      .card-content {
          margin-bottom: 15px;
      }
  }
</style>
