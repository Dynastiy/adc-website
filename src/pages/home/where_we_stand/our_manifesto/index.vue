<template>
  <div>
    <div class="header">
      <app-header />
      <div class="content container">
        <h2 class="font-weight-bold headerss text-white text-center pb-5 ">
          Our Manifesto
        </h2>
      </div>
    </div>
    <div class="bg-light-accent">
    <div class="content container ">
      <blockquote class="blockquote">
        <p>At ADC, it is about Intense and Intentional Leadership – an activity
          that identifies challenges, <br />
          gets the people to see the realities in these challenges, collectively
          evolve adaptive or <br />
          technical solutions to these problems with a view to a ensuring
          Excellent living conditions for <br />
          all Nigerian. <br /><br />
          Leadership is the key word here that the ADC is going to be driven by,
          noting that moving a <br />
          people from ‘Good to Great’ takes a process. Sadly, Nigeria has over
          the years adopted a <br />
          culture of mediocrity occasioned by our ‘clan’ mentality or
          man-know-man syndrome. You <br />
          have to know somebody somewhere for things to happen to or for you.
          Leadership must <br />
          inspire all our activities henceforth, it may sound scary to some, who
          are used to doing things <br />
          the old way but nobody should be afraid as every body will be groomed
          and taught the new <br />
          way of doing things. The better way.</p>
        </blockquote>
<!-- <br />
<blockquote class="otro-blockquote">
  Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while. That's because they were able to connect experiences they've had and synthesize new things.
  <span>Steve Jobs</span>
</blockquote> -->
      <!-- <div class="manifesto d-md-flex d-block justify-content-center mb-3">
        <div>
          <img
            src="@/assets/img/open__quote.svg"
            class="d-none d-md-block"
            alt=""
            srcset=""
          />
        </div>
        <p class="text-center font-weight-bold mx-3">
          At ADC, it is about Intense and Intentional Leadership – an activity
          that identifies challenges, <br />
          gets the people to see the realities in these challenges, collectively
          evolve adaptive or <br />
          technical solutions to these problems with a view to a ensuring
          Excellent living conditions for <br />
          all Nigerian. <br /><br />
          Leadership is the key word here that the ADC is going to be driven by,
          noting that moving a <br />
          people from ‘Good to Great’ takes a process. Sadly, Nigeria has over
          the years adopted a <br />
          culture of mediocrity occasioned by our ‘clan’ mentality or
          man-know-man syndrome. You <br />
          have to know somebody somewhere for things to happen to or for you.
          Leadership must <br />
          inspire all our activities henceforth, it may sound scary to some, who
          are used to doing things <br />
          the old way but nobody should be afraid as every body will be groomed
          and taught the new <br />
          way of doing things. The better way.
        </p>
        <div class="align-self-end">
          <img src="@/assets/img/close__quote.svg" class="d-none d-md-block" alt="" srcset="" />
        </div>
      </div> -->
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
    font-size: 18px;
    font-weight: bold;
    text-align: center;
}

/*blockquote p::before {
    content: "\f095"; 
    font-family: FontAwesome;
   display: inline-block;
   padding-right: 6px;
   vertical-align: middle;
  font-size: 180px;
 }*/

.blockquote:before {
  position: absolute;
  font-family: 'FontAwesome';
  top: 0;
  
  content:"\f10d";
  font-size: 200px;
  color: #ff73001c;
   
}

.blockquote::after {
    content: "";
    top: 20px;
    left: 50%;
    margin-left: -100px;
    position: absolute;
    border-bottom: 3px solid #ff7300;
    height: 3px;
    width: 200px;
}

@import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic);
.otro-blockquote{
  font-size: 1.4em;
  width:60%;
  margin:50px auto;
  font-family:Open Sans;
  font-style:italic;
  color: #555555;
  padding:1.2em 30px 1.2em 75px;
  border-left:8px solid #78C0A8 ;
  line-height:1.6;
  position: relative;
  background:#EDEDED;
}

.otro-blockquote::before{
  font-family:Arial;
  content: "\201C";
  color:#78C0A8;
  font-size:4em;
  position: absolute;
  left: 10px;
  top:-10px;
}

.otro-blockquote::after{
  content: '';
}

.otro-blockquote span{
  display:block;
  color:#333333;
  font-style: normal;
  font-weight: bold;
  margin-top:1em;
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
  /* .objective_one_to_ten:hover {
background-color: #224f5a;
box-shadow: 0px 0px 5px 8px rgba(255, 255, 255, 0.225);
color: #fff;
transition: 0.3s;
cursor: pointer;
} */
  .cardinal_commitments {
    background-image: url(../../../../assets/img/cardinal-bg.svg);
    background-position: center;
    background-attachment: fixed;
    padding: 5rem 10rem;
  }
  .commitment_one_to_seven {
    color: #fff;
    display: flex;
    align-items: flex-start;
  }
  .commitment_one_to_seven .fa,
  .aim_one_to_sixteen .fa {
    margin-top: 5px;
    margin-right: 1rem;
  }
  .commitment_one_to_seven p {
    width: 60%;
  }
  .larger-text {
    font-size: 3.2rem;
  }
  .row {
    padding: 0;
    margin: 0;
  }
  .Co-operation_And_Partnerships {
    background: linear-gradient(0deg, #effff6 50%, #fff 50%);
    /* display: flex;
    gap: 20px; */
  }
  .Co-operation_And_Partnerships_grid {
    background: linear-gradient(0deg, #effff6 50%, #fff 50%);
    display: flex;
    gap: 20px;
  }
  .Co-operation_And_Partnerships_grid div {
    padding: 1.5rem;
    width: 100%;
    border-radius: 10px;
    font-weight: bold;
    color: #fff;
    font-size: 0.8rem;
  }
  .Co-operation_And_Partnerships_grid div ion-icon {
    font-size: 32px;
  }

  @media (max-width: 990px) {
    .Co-operation_And_Partnerships_grid {
      display: unset;
      background: none;
    }
    .Co-operation_And_Partnerships {
      padding: 2rem 4rem;
    }
    .Co-operation_And_Partnerships_grid div {
      margin-bottom: 20px;
    }
    .sub_Adc_objectives {
      display: unset;
    }
    .sub_Adc_objectives div {
      margin-bottom: 20px;
    }
   .cardinal_commitments{
     padding: 1rem 1rem;
   }
   .larger-text {
     font-size: 2.3rem;
   }
  }
</style>
