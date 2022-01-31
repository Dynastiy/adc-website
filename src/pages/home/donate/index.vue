<template>
  <div>
    <simple-nav />
    <div class="content donate">
      <div class="row">
        <div class="donate-div">
          <h2 class="font-weight-bold text-center py-3 text-orange">Donate</h2>
          <div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder="Enter Amount in Naira"
                v-model="amount"
                required
              />
              
            </div>
            <h4 class="font-weight-bold text-orange mb-3">Personal Details</h4>
            <div class="form-group row">
              <div class="col">
                <input
                type="text"
                class="form-control"
                aria-describedby="helpId"
                v-model="first_name"
                placeholder="First Name"
                required
              />
              </div>
              <div class="col">
                <input
                type="text"
                class="form-control"
                aria-describedby="helpId"
                placeholder="Last Name"
                v-model="last_name"
                required
              />
              </div>
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder="Email Address"
                v-model="email"
                required
              />
            </div>
            <div class="row form-group">
              <div class="col-5">
                <select
                  id="mySelect11"
                  class="custom-select form-control"
                >
                  <option value=""> --- </option>
                  <option
                    v-for="(idCount, index) in country_nums"
                    :key="index"
                    :value="idCount.phonecode"
                  >
                    {{ idCount.nicename }} ({{ idCount.phonecode }})
                  </option>
                </select>
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>
          <div class="text-center mt-5">
            <paystack
              :amount="amount * 100"
              type="submit"
              class="btn bg-orange text-white font-weight-bold px-3 py-2 "
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
  import countries from '@/assets/js/countries.js'
  // import { FormWizard, TabContent } from "vue-form-wizard";
  import "vue-form-wizard/dist/vue-form-wizard.min.css";

  import paystack from "vue-paystack";
  import swal from "sweetalert";

  export default {
    components: { simpleNav, paystack },
    data() {
      return {
        country_nums: countries,
        selected_country2: null,
        form_wizard: true,
        amount: "",
        first_name: null,
        last_name: null,
        email: "",
        PUBLIC_KEY: "pk_live_6c2684fe83cd844c750932b184a1bbe26f380912",
      };
    },
    methods: {
      onComplete() {
        this.form_wizard = false;
      },
      processPayment() {
        this.form_wizard = true;
        window.alert("Payment recieved");
        swal({
          title: "Done!",
          text: "Payment Received!",
          icon: "success",
          button: "Go Home!",
        });
      },
      close() {
        this.form_wizard = true;
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
  .donate-div {
    width: 45%;
    background: rgba(255, 255, 255, 0.2);
    padding: 1rem 3rem;
    border-radius: 10px;
  }
  .donate .form-control {
    border-radius: 0 !important;
    outline: none;
    /* padding: 1.5rem 0.5rem !important; */
    border-radius: 5px !important;
  }
  .donate .form-control:focus {
    border: 1px solid #ced4da !important;
    box-shadow: none;
  }
  .donate .form-control::placeholder {
    color: #999;
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
