<template>
  <div>
    <simple-nav />
    <div class="content donate">
      <div class="row">
        <div class="bg-white donate-div">
          <h2 class="font-weight-bold text-center pt-4">Donate</h2>
          <div>
            <form-wizard
              v-if="form_wizard"
              @on-complete="onComplete"
              back-button-text="Back"
              next-button-text="Next"
              finish-button-text="Continue"
              shape="tab"
              title=""
              subtitle=""
              color="#00a54f"
            >
              <tab-content title="">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="Enter Amount"
                    v-model="amount"
                    required
                  />
                </div>
              </tab-content>
              <tab-content title="">
                <h4 class="font-weight-bold mb-3">Personal Details</h4>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control mb-4"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    v-model="first_name"
                    placeholder="First Name"
                    required
                  />
                  <input
                    type="text"
                    class="form-control mb-4"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="Last Name"
                    v-model="last_name"
                    required
                  />
                  <input
                    type="text"
                    class="form-control mb-4"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="Email Address"
                    v-model="email"
                    required
                  />
                  <input
                    type="text"
                    class="form-control mb-4"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="Phone Number"
                    required
                  />
                  <input
                    type="text"
                    class="form-control mb-4"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="Address"
                    required
                  />
                </div>
              </tab-content>
            </form-wizard>
            <div class="text-center p-3" v-if="!form_wizard">
              <h3 class="font-weight-bold">Proceed to make Payment</h3>
              <p>{{ first_name }} {{ last_name }}</p>
              <p>{{ amount }}</p>
              <paystack
                :amount="amount * 100"
                class="btn bg-main text-white font-weight-bold"
                :email="email"
                :paystackkey="PUBLIC_KEY"
                :reference="reference"
                :callback="processPayment"
                :close="close"
              >
                Make Payment
              </paystack>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import simpleNav from "../../../components/simplified_nav.vue";
  import { FormWizard, TabContent } from "vue-form-wizard";
  import "vue-form-wizard/dist/vue-form-wizard.min.css";

  import paystack from "vue-paystack";
  import swal from 'sweetalert';

  export default {
    components: { simpleNav, FormWizard, paystack, TabContent },
    data() {
      return {
        form_wizard: true,
        amount: "",

        first_name: " ",
        last_name: "",
        email: "",
        PUBLIC_KEY: "pk_live_6c2684fe83cd844c750932b184a1bbe26f380912",
      };
    },
    methods: {
      onComplete() {
        this.form_wizard = false;
      },
      processPayment() {
        this.form_wizard = true
        window.alert("Payment recieved");
        swal({
          title: "Done!",
          text: "Payment Received!",
          icon: "success",
          button: "Go Home!",
        });
      },
      close() {
        this.form_wizard = true
        console.log("You closed checkout page");
        swal({
          title: "Cancelled!",
          text: "Transaction Cancelled",
          icon: "warning",
          button: "Go Home!",
        });
      },
      openDialog() {
        const overlay = document.getElementById("take-action-overlay");
        overlay.classList.add("active");
      },
      closeDialog() {
        const overlay = document.getElementById("take-action-overlay");
        overlay.classList.remove("active");
      },
    },
    computed: {
      reference() {
        let text = "";
        let possible =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 10; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
      },
    },
  };
</script>

<style scoped>
  .vue-step-wizard {
    width: 100% !important;
    background: #fff;
  }
  .stepTitle .active {
    background-color: #00a54f !important;
    height: 0.2rem !important;
  }
  .donate-div {
    width: 45%;
  }
  .donate .form-control {
    border-radius: 0 !important;
    outline: none;
  }
  .donate .form-control:focus {
    border: 1px solid #ced4da !important;
    box-shadow: none;
  }
  .donate .form-control::placeholder {
    color: #ced4da;
    font-size: 0.8rem;
  }
  @media screen and (max-width: 990px) {
    .donate.content {
      padding: 1rem 2rem;
    }
    .donate-div {
      width: 100%;
    }
    .vue-step-wizard {
      width: 100%;
    }
  }
</style>
