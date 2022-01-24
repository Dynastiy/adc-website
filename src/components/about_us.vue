<template>
    <div class="">
      <div class=" bg-light-accent mt-5">
        <div class="about-us content">
        <div class="our-mission-div rounded bg-white animate__animated animate__backInLeft">
          <img src="@/assets/img/icons/mission.svg" alt="" width="50px" height="50px" srcset="">
          <h4 class="font-weight-bold">
            OUR MISSION
          </h4>
          <p class="large__text">
            To reengineer a political party system that is free from domination
            by wheeler-dealer political elites, money- bags and “god-fathers
            through transparency and accountability; as well as propagate
            inclusion and diversity of values for Women, Youths, Diaspora
            Network and Persons with Disabilities (PWDs)
          </p>
        </div>

        <div class="our-vision-div rounded bg-white animate__animated animate__backInUp">
          <img src="@/assets/img/icons/vision.svg" alt="" width="50px" height="50px" srcset="">
          <h4 class="font-weight-bold">
            OUR VISION
          </h4>
          <p class="large__text">
            To consolidate Nigeria's democracy beyond (flawed) elections,
            political rhetorics and theatrics, and usher in super power economy,
            just and resilient institutions, systems, and processes for a more
            egalitarian society: '23+20 ADC Strategic compass
          </p>
        </div>

        <div class="our-manifesto-div rounded bg-white animate__animated animate__backInRight">
         <img src="@/assets/img/icons/manifesto.svg" alt="" width="50px" height="50px" srcset="">
          <h4 class="font-weight-bold">
            OUR MANIFESTO
          </h4>
          <p class="large__text">
            To consolidate Nigeria's democracy beyond (flawed) elections,
            political rhetorics and theatrics, and usher in super power economy,
            just and resilient institutions, systems, and processes for a more
            egalitarian society: '23+20 ADC Strategic compass
          </p>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
      data() {
return{
  
}
  }
}
</script>

<style>
/* .our-mission-div:hover {
  background: #ff7300;
  color: #fff !important;
  transition: 1s;
} */
.large__text{
  font-size: 1.02rem !important;
}
.our-mission-div .fa {
  color: #ff7300
}
.our-vision-div .fa {
  color: #00a54f;
}
.our-manifesto-div .fa {
  color: #224f5a;
}
.our-manifesto-div h4, .our-mission-div h4, .our-vision-div h4{
  margin: 1rem 0;
  font-weight: 900 !important;
}
.our-manifesto-div , .our-mission-div , .our-vision-div {
  padding: 2rem;
}
/* .our-vision-div:hover {
  background: #00a54f;
  color: #fff !important;
  transition: 1s;
} */
/* .our-manifesto-div:hover {
  background: #224f5a;
  color: #fff !important;
  transition: 1s;
} */

</style>