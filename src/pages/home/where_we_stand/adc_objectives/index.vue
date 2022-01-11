<template>
  <div>
    <div class="header">
      <app-header />
      <div class="content container">
        <h2 class="font-weight-bold headerss text-white text-center pb-5">
          ADC Objectives
        </h2>
      </div>
    </div>
   
    <!-- ADC Objectives -->
    <div class="Adc_objectives bg-light-accent">
      <div class="content container">
        <div class="sub_Adc_objectives">
          <!-- objective one -->
          <div class="objective_one_to_ten">
            <!-- <i
                class="fa fa-check big_circle_tick_Right"
                aria-hidden="true"
              ></i> -->
            <p>
              Maintain and preserve the integrity, unity and sovereignty of the
              Federal Republic of Nigeria as one indivisible political entity
            </p>
          </div>
          <!-- objective two -->
          <div class="objective_one_to_ten">
            <!-- <i
                class="fa fa-check big_circle_tick_Right"
                aria-hidden="true"
              ></i> -->
            <p>
              Promote national integration and harmonious co-existence of the
              diverse communities of our society.
            </p>
          </div>
          <!-- objective three -->
          <div class="objective_one_to_ten">
            <!-- <i
                class="fa fa-check big_circle_tick_Right"
                aria-hidden="true"
              ></i> -->
            <p>
              Ensure genuine restoration, permanent entrenchment and practice of
              democracy, the rule of law, equity and social justice.
            </p>
          </div>
          <!-- objective four -->
          <div class="objective_one_to_ten">
            <!-- <i
                class="fa fa-check big_circle_tick_Right"
                aria-hidden="true"
              ></i> -->
            <p>
              Ensure meritocracy, where only competent, dedicated, patriotic and
              credible candidates are sponsored for elective offices at all
              levels of governance.
            </p>
          </div>
          <!-- objective five -->
          <div class="objective_one_to_ten">
            <!-- <i
                class="fa fa-check big_circle_tick_Right"
                aria-hidden="true"
              ></i> -->
            <p>
              Uphold the independence of the judiciary, promote free press, as
              well as uphold the freedom of speech and of association.
            </p>
          </div>
          <!-- objective six -->
          <div class="objective_one_to_ten">
            <!-- <i
                class="fa fa-check big_circle_tick_Right"
                aria-hidden="true"
              ></i> -->
            <p>
              Build an egalitarian society founded on the principles of freedom,
              equality and justice.
            </p>
          </div>
          <!-- objective seven -->
          <div class="objective_one_to_ten">
            <!-- <i
                class="fa fa-check big_circle_tick_Right"
                aria-hidden="true"
              ></i> -->
            <p>
              Ensure that the programs of the Party at all levels conform at all
              times with the fundamental objectives, and directive principles of
              state policy, as contained in the Constitution of the Federal
              Republic of Nigeria, as well as conform at all times with the
              Ethic, Aims and Objectives of the Constitution of the Party.
            </p>
          </div>
          <!-- objective eight -->
          <div class="objective_one_to_ten">
            <!-- <i
                class="fa fa-check big_circle_tick_Right"
                aria-hidden="true"
              ></i> -->
            <p>
              Promote mutual respect for and understanding of the religious,
              traditional and cultural heritage of the various communities of
              our nation.
            </p>
          </div>
          <!-- objective nine -->
          <div class="objective_one_to_ten">
            <!-- <i
                class="fa fa-check big_circle_tick_Right"
                aria-hidden="true"
              ></i> -->
            <p>
              Build, promote, sustain and consolidate political, economic and
              social dignity, independence and self- respect for all Nigerians.
            </p>
          </div>
          <!-- objective ten -->
          <div class="objective_one_to_ten" id="objective_ten">
            <!-- <i
                class="fa fa-check big_circle_tick_Right"
                aria-hidden="true"
              ></i> -->
            <p>
              Eradicate illiteracy and celebration of mediocrity in our society
              and promote learning and research, science and technology,
              creativity and innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Co-operation And Partnerships -->
    <div class="Co-operation_And_Partnerships">
      <div class="content Co-operation_And_Partnerships_grid container">
        <div class="Co-operate_with_Africans bg-orange text-center shadow">
          <ion-icon name="star"></ion-icon>
          <p class="mt-3">
            Co-operate with Africans and other Nationalist movements and
            organizations working for the eradication of imperialism,
            neo-colonialism, racism and to strive relentlessly towards African
            Unity, as well as greater understanding and cohesion amongall
            peoples of African descent.
          </p>
        </div>

        <div class="Co-operate_with_member_nations bg-main text-center shadow">
          <ion-icon name="star"></ion-icon>
          <p class="mt-3">
            Co-operate with all member nations in promoting the course of
            Economic Community of West African States (ECOWAS) the Organization
            of African Unity (OAU), The Common-wealth, and United Nations
            Organization (UNO) and other International and regional groupings
            that shall be in the best interest of Nigeria and Africa; and help
            to find just and peaceful solutions for international disputes.
          </p>
        </div>

        <div class="Build_socio-political_culture bg-darker text-center shadow">
          <ion-icon name="star"></ion-icon>
          <p class="mt-3">
            Build a new socio-political culture in which all Nigerians are equal
            members, where each contributes according to his ability and
            resource, where no one person dominates and where no political party
            belongs to one individual.
          </p>
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
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    text-align: center;
    
  }
  .objective_one_to_ten {
    padding: 1rem;
    /* background-color: #fff; */
    background: rgba(255, 255, 255, 0.5);
    /* border-radius: 10px; */
    font-weight: bold;
    vertical-align: middle;
    /* backdrop-filter: blur(5px); */
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
    /* border-top: 1px solid rgba(255, 255, 255, 0.2); */
    /* border-left: 1px solid rgba(255, 255, 255, 0.2); */
    /* box-shadow: 0px 0px 3px 0px rgba(225, 225, 225, 0.2); */
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
