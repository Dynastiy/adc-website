<template>
  <div>
    <div class="header">
      <app-header />
      <div class="content container">
        <h2 class="font-weight-bold headerss text-white text-center pb-5">
          Cardinal Commmitments
        </h2>
      </div>
    </div>
  
   
    <!-- Cardinal Commitments Section -->
    <div class="cardinal_commitments bg-light-accent">
      <div class="content container">
        <div class="">
          <h5
            class="font-weight-bold text-darker animate__animated animate__backInUp"
          >
            AFRICAN DEMOCRATIC CONGRESS
          </h5>
          <h3
            class="larger-text mb-4 text-orange font-weight-bold animate__animated animate__backInUp"
          >
            Our Cardinal Commitments
          </h3>
        </div>
        <!-- Lists of Commitments -->
        <div class="commitment_section">
          <!-- commitment one -->
          <div class="commitment_one_to_seven">
            <!-- <i class="fa fa-check-square-o" aria-hidden="true"></i> -->
            <p>
              Building a New Nigeria where the Dignity of every Nigerian, home
              and abroad will be restored and defended.
            </p>
          </div>
          <!-- commitment two -->
          <div class="commitment_one_to_seven">
            <!-- <i class="fa fa-check-square-o" aria-hidden="true"></i> -->
            <p>
              The welfare of women, youths and persons 
              living with disabilities and the vulnerable.
            </p>
          </div>
          <!-- commitment three -->
          <div class="commitment_one_to_seven">
            <!-- <i class="fa fa-check-square-o" aria-hidden="true"></i> -->
            <p>
              True federalism through restructuring.
            </p>
          </div>
          <!-- commitment four -->
          <div class="commitment_one_to_seven">
            <!-- <i class="fa fa-check-square-o" aria-hidden="true"></i> -->
            <p>
              Public probity and accountability.
            </p>
          </div>
          <!-- commitment five -->
          <div class="commitment_one_to_seven">
            <!-- <i class="fa fa-check-square-o" aria-hidden="true"></i> -->
            <p>
              Wealth creation and economic prosperity.
            </p>
          </div>
          <!-- commitment six -->
          <div class="commitment_one_to_seven">
            <!-- <i class="fa fa-check-square-o" aria-hidden="true"></i> -->
            <p>
              Justice and Security of all lives and property.
            </p>
          </div>
          <!-- commitment seven -->
          <div class="commitment_one_to_seven">
            <!-- <i class="fa fa-check-square-o" aria-hidden="true"></i> -->
            <p>
              Social and physical development of the country.
            </p>
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
  .commitment_section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    /* justify-content: space-between; */
  }
  .commitment_section div{
        background: #00000019;
        padding: 0.8rem;
        border-bottom: 0.1rem solid #ff7300;
        text-align: center;
  }
  .commitment_section div:hover {
    border-bottom: 0.3rem solid #ff7300;
    transition: 0.2s;
    color: #ff7300;
  }
  .objective_one_to_ten {
    padding: 1rem;
    /* background-color: #fff; */
    background: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    /* font-weight: bold; */
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
    /* background-image: url(../../../../assets/img/cardinal-bg.svg); */
    background-position: center;
    background-attachment: fixed;
    padding: 5rem 10rem;
  }
  .commitment_one_to_seven {
    color: #000;
    font-weight: bold;
    /* display: flex; */
    /* align-items: flex-start; */
  }
  .commitment_one_to_seven .fa,
  .aim_one_to_sixteen .fa {
    margin-top: 5px;
    margin-right: 1rem;
  }
  .commitment_one_to_seven p {
    /* width: 60%; */
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
