<template>
  <div>
    <div class="header">
      <app-header />
      <div class="content container">
        <h2 class="font-weight-bold headerss text-white text-center pb-5 ">
          Testimonials
        </h2>
      </div>
    </div>
    <div class="bg-light-accent">
    <div class="content container ">
        <div class="testimonial">
             <div class="">
        <img src="@/assets/img/obj.jpg" alt="" width="100%" />
      </div>
      <div class="">
        <h2 class="font-weight-bold">My Treatise For Future Of Democracy And Development In Nigeria</h2>
        <hr class="hr22 my-3">
        <p>
         Let me start by welcoming and commending the emergence of a renewed and reinvigorated African Democratic Congress, ADC,..
        </p>
        <div class="text-right">
            <router-link class="small text-orange font-weight-bold" to="/testimonials/ex_presidents_advice">See More >> </router-link>
        </div>
      </div>
        </div>
        
    </div>
    </div>
  </div>
</template>

<script>
  import AppHeader from "../../../components/appHeader.vue";

  export default {
    components: { AppHeader },
    data() {
      return {};
    },
  };
</script>

<style scoped>
.testimonial {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
}
.hr22 {
    height: 3px;
    width: 20%;
    background: #ff7300 ;
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
    background: url(../../../assets/img/handshake.jpg);
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
