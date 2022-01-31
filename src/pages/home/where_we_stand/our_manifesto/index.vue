<template>
  <div>
    <div class="header">
      <app-header />
      <div class="content container">
        <h2 class="font-weight-bold headerss text-white text-center pb-5">
          Our Manifesto
        </h2>
      </div>
    </div>
    <div class="bg-light-accent">
      <div class="content container ">
        <!-- <blockquote class="blockquote col-md-6"> -->
          <p class="">
            At ADC, it is about Intense and Intentional Leadership – an activity
            that identifies challenges, gets the people to see the realities in
            these challenges, collectively evolve adaptive or technical
            solutions to these problems with a view to a ensuring Excellent
            living conditions for all Nigerian. Leadership is the key word here
            that the ADC is going to be driven by, noting that moving a people
            from ‘Good to Great’ takes a process. Sadly, Nigeria has over the
            years adopted a culture of mediocrity occasioned by our ‘clan’
            mentality or man-know-man syndrome. You have to know somebody
            somewhere for things to happen to or for you. Leadership must
            inspire all our activities henceforth, it may sound scary to some,
            who are used to doing things the old way but nobody should be afraid
            as every body will be groomed and taught the new way of doing things
            the better way
          </p>
        <!-- </blockquote> -->
        <div class="manifesto-images ">
          <div class="animate__animated animate__delay-1s animate__fadeInLeft">
            <img src="@/assets/img/image4.jpg" alt="" />
          </div>
          <div class="animate__animated animate__delay-2s animate__fadeInUp">
            <img src="@/assets/img/image3.jpg" alt="" />
          </div>
          <div class="animate__animated animate__delay-3s animate__fadeInDown">
            <img src="@/assets/img/image8.jpg" alt="" />
          </div>
          <div class="animate__animated animate__delay-4s animate__fadeInRight">
            <img src="@/assets/img/image2.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "../../../../components/appHeader.vue";

export default {
  components: { AppHeader },
  data() {
    return {};
  },
};
</script>

<style scoped>
.blockquote {
  padding: 60px 80px 40px;
  position: relative;
}
.blockquote p {
  /* font-family: "Utopia-italic"; */
  font-size: 15px;
  font-weight: 500;
  /* text-align: center; */
}

.blockquote:before {
  position: absolute;
  font-family: "FontAwesome";
  top: -8%;
  left: -5%;
  content: "\f10d";
  font-size: 200px;
  color: #ff73001c;
}
.manifesto-images {
  display: grid;
  grid-template-columns: auto auto;
}
.manifesto-images img {
  width: 100%;
  height: 30rem;
  object-fit: cover;
  border-radius: 1px;
}
.manifesto-images div:nth-child(1),
.manifesto-images div:nth-child(4) {
  margin-left: -3rem;
  margin-top: -2rem;
}
.blockquote::after {
  content: "";
  top: 20px;
  /* left: 50%; */
  /* margin-left: -100px; */
  position: absolute;
  border-bottom: 3px solid #ff73001c;
  height: 3px;
  width: 200px;
}

@import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic);
.otro-blockquote {
  font-size: 1.4em;
  width: 60%;
  margin: 50px auto;
  font-family: Open Sans;
  font-style: italic;
  color: #555555;
  padding: 1.2em 30px 1.2em 75px;
  border-left: 8px solid #78c0a8;
  line-height: 1.6;
  position: relative;
  background: #ededed;
}

.otro-blockquote::before {
  font-family: Arial;
  content: "\201C";
  color: #78c0a8;
  font-size: 4em;
  position: absolute;
  left: 10px;
  top: -10px;
}

.otro-blockquote::after {
  content: "";
}

.otro-blockquote span {
  display: block;
  color: #333333;
  font-style: normal;
  font-weight: bold;
  margin-top: 1em;
}
.header {
  background: url(../../../../assets/img/handshake.jpg);
  background-position: bottom;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: #000000c7;
  background-blend-mode: overlay;
}
.quotes {
  font-size: 5rem;
}
.sub_Adc_objectives {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  text-align: center;
}
.objective_one_to_ten {
  padding: 1rem;
  /* background-color: #fff; */
  background: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  font-weight: bold;
  vertical-align: middle;
  backdrop-filter: blur(5px);
  /* border-top: 1px solid rgba(255, 255, 255, 0.2); */
  /* border-left: 1px solid rgba(255, 255, 255, 0.2); */
  box-shadow: 0px 0px 3px 0px rgba(225, 225, 225, 0.2);
}
.larger-text {
  font-size: 3.2rem;
}
.row {
  padding: 0;
  margin: 0;
}
@media (max-width: 990px) {
  .larger-text {
    font-size: 2.3rem;
  }
}
</style>
