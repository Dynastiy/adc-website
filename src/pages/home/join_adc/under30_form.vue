<template>
  <div>
    <simplified-nav />
    <div class="pt-5 bg-light-accent pb-5">
      <main
        class="content container w-50 bg-white shadow-lg p-5 bg-light-accent rounded"
      >
        <h1 class="text-center text-darker font-weight-bold mb-5">
          Registration Form
        </h1>
        <form @submit.prevent="valForm" method="POST">
          <div class="row form-group">
            <div class="col">
              <label for="exampleInputEmail1">First Name</label>
              <input
                v-model="form_field.first_name"
                type="text"
                class="form-control"
                placeholder="John"
                required
              />
            </div>
            <div class="col">
              <label for="exampleInputEmail1">Last Name</label>
              <input
                v-model="form_field.last_name"
                type="text"
                class="form-control"
                placeholder="Doe"
                required
              />
            </div>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              v-model="form_field.email"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="xyz@gmail.com"
              required
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Phone Number</label>
            <div class="row">
              <div class="col-5">
                <select id="mySelect" class="custom-select form-control" v-model="selected_country">
                  <option value="0" selected>  Choose... </option>
                  <option
                    v-for="(country_num, index) in country_nums"
                    :key="index"
                    :value="country_num.phonecode"
                    class="text-capitalize"
                  >
                    {{ country_num.nicename }} ({{ country_num.phonecode }})
                  </option>
                </select>
              </div>
              <div class="col">
                <input
                  v-model="phone_number"
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>
             
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              v-model="form_field.password"
              placeholder="Password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">Date of Birth</label>
            <input
              v-model="form_field.dob"
              type="date"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Date of Birth"
              required
            />
          </div>
          <div class="form-group">
            <label for="inputState">Gender</label>
            <select
              id="inputState"
              v-model="form_field.gender"
              class="form-control"
            >
              <option value="None">Choose</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div class="row">
            <div class="form-group col">
              <label for="inputState">State</label>
              <select
                id="mySelect"
                class="custom-select"
                @change="getState()"
                v-model="form_field.state"
              >
                <option
                  v-for="(state_name, index) in states"
                  :key="index"
                  :value="state_name.name"
                  class="text-capitalize"
                >
                  {{ state_name.name }}
                </option>
              </select>
            </div>
            <div class="form-group col" v-show="lga">
              <label for="inputState">Local Government</label>
              <select
                id="mySelect"
                class="custom-select"
                v-model="form_field.lga"
                @change="getLga()"
              >
                <option
                  v-for="(lga_name, index) in lgas"
                  :key="index"
                  :value="lga_name.name"
                  class="text-capitalize"
                >
                  {{ lga_name }}
                </option>
              </select>
            </div>
            <div class="form-group col" v-show="ward">
              <label for="inputState">Ward</label>
              <input
                v-model="form_field.ward"
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Ward"
                required
              />
            </div>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Person who invited you</label>
            <div class="row">
              <div class="col">
                <input
                  v-model="form_field.referral"
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="First Name"
                  required
                />
              </div>
              <div class="col">
                <input
                  v-model="form_field.referral"
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
          </div>
          <div class="text-center form-group my-5">
            <label class="small-text font-weight-bold" for=""
              >Upload Photo</label
            >
            <br />
            <input
              type="file"
              name=""
              class=""
              id="file"
              @change="handleFileUpload()"
              required
            />
          </div>
          <input
            type="submit"
            value="SUBMIT"
            class="form-control text-light bg-darker font-weight-bold"
          />
        </form>
      </main>
      <div v-show="paystack_part" class="payment p-5 bg-light-accent">
        <div class="text-center">
          <img
            src="@/assets/img/brand_assets/logo_horizontal_dark.png"
            width="100"
            class="text-center mb-4"
            alt=""
          />
          <h1 class="font-weight-bold mb-4 text-center">
            Proceed to <br />
            make payment
          </h1>
          <paystack
            :amount="200 * 100"
            class="btn bg-darker text-white font-weight-bold text-center w-50"
            :email="form_field.email"
            :paystackkey="PUBLIC_KEY"
            :reference="reference"
            :callback="register"
            :close="close"
          >
            Pay
          </paystack>
        </div>
      </div>
      <div class="loading" v-if="loading">
        <div class="spinner-border m-5" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import paystack from "vue-paystack";
  import swal from "sweetalert";
  import SimplifiedNav from "../../../components/simplified_nav.vue";
  import countries from "@/assets/js/countries.js";
  import axios from "axios";
  export default {
    components: { SimplifiedNav, paystack },
    data() {
      return {
        country_nums: countries,
        lga: false,
        ward: false,
        paystack_part: false,
        PUBLIC_KEY: "pk_live_6c2684fe83cd844c750932b184a1bbe26f380912",
        loading: false,
        baseUrl: "https://api.adc.org.ng/api/",
        states: "",
        lgas: "",
        selState: "",
        selected_country:'',
        phone_number: '',
        form_field: {
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          phone_number: "",
          dob: "",
          gender: "",
          state: "",
          lga: "",
          ward: "",
          referral: "",
          image: null,
        },
      };
    },
    methods: {
      getNum(){
        var priceOptions = document.getElementById("mySelect");
      var selOption = priceOptions.options[priceOptions.selectedIndex].value;
      this.selected_country = selOption;
        
      },
      createUser() {
        swal({
          title: "Done!",
          text: "Payment Received!",
          icon: "success",
          button: "Go Home!",
        });
        this.register();
      },
      close() {
        console.log("You closed checkout page");
        swal({
          title: "Cancelled!",
          text: "Please Pay to create account",
          icon: "warning",
          button: "Go Home!",
        });
      },
      handleFileUpload() {
        // this.form_field.image = this.$refs.file.files[0];
        var input = event.target;
        this.form_field.image = input.files[0];
        console.log(this.form_field.image);
      },
      getState() {
        var priceOptions = document.getElementById("mySelect");
        var selOption = priceOptions.options[priceOptions.selectedIndex].value;
        console.log(selOption);
        this.selState = selOption;
        this.getlgas();
        this.lga = true;
      },
      getLga() {
        this.ward = true;
      },
      async getStates() {
        let res = await axios.get(
          "https://locationsng-api.herokuapp.com/api/v1/states"
        );
        console.log(res.data);
        this.states = res.data;
      },
      async getlgas() {
        let res = await axios.get(
          `https://locationsng-api.herokuapp.com/api/v1/states/${this.selState}/lgas`
        );
        console.log(res.data);
        this.lgas = res.data;
      },
      valForm() {
        // if () {
        //      swal({
        //     title: "Error!",
        //     text: "An error occured",
        //     icon: "warning",
        //     button: "Try Again!",
        //   });

        // } else {
        this.paystack_part = true;

        // }
      },
      async register() {
        try {
          swal({
            title: "Done!",
            text: "Payment Received!",
            icon: "success",
            button: "Go Home!",
          });
          this.loading = true;
          let formData = new FormData();
          formData.append("first_name", this.form_field.first_name);
          formData.append("last_name", this.form_field.last_name);
          formData.append("email", this.form_field.email);
          formData.append("password", this.form_field.password);
          formData.append("phone_number", this.phone_number+this.selected_country);
          formData.append("dob", this.form_field.dob);
          formData.append("gender", this.form_field.gender);
          formData.append("state", this.form_field.state);
          formData.append("lga", this.form_field.lga);
          formData.append("ward", this.form_field.ward);
          formData.append("referral", this.form_field.referral);
          formData.append("image", this.form_field.image);
          let res = await axios.post(this.baseUrl + "auth/register", formData);
          console.log(res);
          this.form_field.first_name = "";
          this.form_field.last_name = "";
          this.form_field.email = "";
          this.form_field.password = "";
          this.form_field.phone_number = "";
          this.form_field.dob = "";
          this.form_field.gender = "";
          this.form_field.state = "";
          this.form_field.lga = "";
          this.form_field.ward = "";
          this.form_field.referral = "";
          this.form_field.image = "";
          this.loading = false;
          swal({
            title: "Done!",
            text: "Account Created Successfully",
            icon: "success",
            button: "Go Home!",
          });
          this.$router.push("/redirect");
        } catch (error) {
          console.log(error.response);
          if (error.response.status == 422 || error.response.status === "") {
            this.form_field.first_name = "";
            this.form_field.last_name = "";
            this.form_field.email = "";
            this.form_field.password = "";
            this.form_field.phone_number = "";
            this.form_field.dob = "";
            this.form_field.gender = "";
            this.form_field.state = "";
            this.form_field.lga = "";
            this.form_field.ward = "";
            this.form_field.referral = "";
            this.form_field.image = "";
            this.loading = false;
          } else {
            this.form_field.first_name = "";
            this.form_field.last_name = "";
            this.form_field.email = "";
            this.form_field.password = "";
            this.form_field.phone_number = "";
            this.form_field.dob = "";
            this.form_field.gender = "";
            this.form_field.state = "";
            this.form_field.lga = "";
            this.form_field.ward = "";
            this.form_field.referral = "";
            this.form_field.image = "";
            this.loading = false;
          }
        }
      },
    },
    async created() {
      this.getStates();
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
  label {
    font-weight: bold;
  }
  input::placeholder {
    font-size: 0.8rem !important;
  }
  option {
    font-size: 0.8rem !important;
  }
  .payment {
    z-index: 999;
    position: fixed;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
  }
  .container {
    padding: 3rem 8rem;
  }
  .loading {
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  @media (max-width: 990px) {
    .content {
      padding: 2rem !important;
    }
  }
</style>
