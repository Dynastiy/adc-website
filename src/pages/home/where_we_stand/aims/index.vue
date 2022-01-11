<template>
  <div>
    <div class="header">
      <app-header />
      <div class="content container">
        <h2 class="font-weight-bold headerss text-white text-center pb-5">
          Aims of the Party
        </h2>
      </div>
    </div>
   
      <div class="aims_of_party container content">
        

        <div class="sub_aims_of_party d-flex justify-content-around">
          <!-- column one of sub_aims_of_party -->
          <div>
            <!-- sub_aims_of_party one -->
            <div class="aim_one_to_sixteen d-flex">
              <i
                class="fa fa-check-circle-o text-orange"
                aria-hidden="true"
              ></i>
              <p>To promote the unity of Nigeria</p>
            </div>
            <!-- sub_aims_of_party two -->
            <div class="aim_one_to_sixteen d-flex">
              <i
                class="fa fa-check-circle-o text-orange"
                aria-hidden="true"
              ></i>
              <p>
                To adhere to the rule of law, and promote justice and <br />
                equity.
              </p>
            </div>
            <!-- sub_aims_of_party three -->
            <div class="aim_one_to_sixteen d-flex">
              <i
                class="fa fa-check-circle-o text-orange"
                aria-hidden="true"
              ></i>
              <p>
                To promote the To run good governance and practice <br />
                equitable, fair and transparent management of the <br />
                country's resources of Nigeria.
              </p>
            </div>
            <!-- sub_aims_of_party four -->
            <div class="aim_one_to_sixteen d-flex">
              <i
                class="fa fa-check-circle-o text-orange"
                aria-hidden="true"
              ></i>
              <p>
                To promote the respect for the fundamental human <br />
                rights of all Nigerians.
              </p>
            </div>
            <!-- sub_aims_of_party five -->
            <div class="aim_one_to_sixteen d-flex">
              <i
                class="fa fa-check-circle-o text-orange"
                aria-hidden="true"
              ></i>
              <p>
                To provide full and productive employment for the <br />
                people
              </p>
            </div>
            <!-- sub_aims_of_party six -->
            <div class="aim_one_to_sixteen d-flex">
              <i
                class="fa fa-check-circle-o text-orange"
                aria-hidden="true"
              ></i>
              <p>
                To provide the environment of self respect, self-reliance
                <br />
                and human dignity for the populace.
              </p>
            </div>
            <!-- sub_aims_of_party seven -->
            <div class="aim_one_to_sixteen d-flex">
              <i
                class="fa fa-check-circle-o text-orange"
                aria-hidden="true"
              ></i>
              <p>To promote the rapid industrial development of Nigeria.</p>
            </div>
            <!-- sub_aims_of_party eight -->
            <div class="aim_one_to_sixteen d-flex">
              <i
                class="fa fa-check-circle-o text-orange"
                aria-hidden="true"
              ></i>
              <p>To promote world peace.</p>
            </div>
          </div>

          <!-- column two of sub_aims_of_party -->
          <div>
            <!-- sub_aims_of_party nine -->
            <div class="aim_one_to_sixteen d-flex">
              <i
                class="fa fa-check-circle-o text-orange"
                aria-hidden="true"
              ></i>
              <p>To make the state operate as the servant of the people.</p>
            </div>
            <!-- sub_aims_of_party ten -->
            <div class="aim_one_to_sixteen d-flex">
              <i
                class="fa fa-check-circle-o text-orange"
                aria-hidden="true"
              ></i>
              <p>
                To make democracy work for the people and, by so doing, <br />
                enhance the progress and well being of the people.
              </p>
            </div>
            <!-- sub_aims_of_party eleven -->
            <div class="aim_one_to_sixteen d-flex">
              <i
                class="fa fa-check-circle-o text-orange"
                aria-hidden="true"
              ></i>
              <p>
                To promote free, fair and credible elections and abhor <br />
                imposition and impunity in the process of candidate selection.
              </p>
              <p></p>
            </div>

            <!-- sub_aims_of_party twelve -->
            <div class="aim_one_to_sixteen d-flex">
              <i
                class="fa fa-check-circle-o text-orange"
                aria-hidden="true"
              ></i>
              <p>
                To maintain integrity and transparency in public affairs
                <br />
                management.
              </p>
            </div>
            <!-- sub_aims_of_party thirteen -->
            <div class="aim_one_to_sixteen d-flex">
              <i
                class="fa fa-check-circle-o text-orange"
                aria-hidden="true"
              ></i>
              <p>
                To ensure the security of all lives, families and properties.
              </p>
            </div>
            <!-- sub_aims_of_party fourteen -->
            <div class="aim_one_to_sixteen d-flex">
              <i
                class="fa fa-check-circle-o text-orange"
                aria-hidden="true"
              ></i>
              <p>
                To provide the environment of self respect, self-reliance and
                <br />
                human dignity for the populace.
              </p>
            </div>
            <!-- sub_aims_of_party fifteen -->
            <div class="aim_one_to_sixteen d-flex">
              <i
                class="fa fa-check-circle-o text-orange"
                aria-hidden="true"
              ></i>
              <p>
                To create a Nigerian society in which the basic things of life
                are <br />
                not taken for granted, including pipe borne water, electricity,
                <br />
                good roads, decent housing, and routine public services.
              </p>
            </div>
            <!-- sub_aims_of_party sixteen -->
            <div class="aim_one_to_sixteen d-flex">
              <i
                class="fa fa-check-circle-o text-orange"
                aria-hidden="true"
              ></i>
              <p>
                To encourage women and youth participation in national <br />
                development and make persons living with disabilities <br />
                productive and self-reliant.
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
  .sub_aims_of_party p{
      font-size: 1.02rem;
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
