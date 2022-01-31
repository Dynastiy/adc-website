<template>
  <div>
    <simplified-nav />
    <div class="top-area d-flex align-items-center justify-content-center">
      <h1 class="text-center text-accent headerss font-weight-bold">
        Volunteer with Us
      </h1>
    </div>
    <div class="pt-5 bg-light-accent pb-5">
      <main
        class="content container form__container w-50 bg-white shadow-lg p-5 bg-light-accent rounded"
      >
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
                <select
                  id="mySelect8"
                  class="custom-select form-control"
                  v-model="selected_country"
                >
                  <option value="">---</option>
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
            <label for="exampleInputEmail1">Age</label>
            <select
              id="mySelect-age"
              class="custom-select"
              v-model="form_field.state"
            >
              <option value="">---</option>
              <option value="">18-24</option>
              <option value="">25-39</option>
              <option value="">40-59</option>
              <option value="">60+</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Country</label>
            <select
              id="mySelect5"
              class="custom-select form-control"
              @change="getCountry2()"
            >
              <option value="0">  --- </option>
              <option value="1"> Nigeria </option>
              <option
                v-for="country in country_list"
                :key="country.Country"
                :value="country.Country"
                class="text-capitalize"
              >
                {{ country.Country }}
              </option>
            </select>
          </div>

          <div class="row" v-if="nigeria">
            <div class="form-group col">
              <label for="inputState">State</label>
              <select
                id="mySelect0"
                class="custom-select"
                @change="getState()"
                v-model="form_field.state"
              >
                <option
                  v-for="(state_name, index) in states"
                  :key="index"
                  :value="state_name.alias"
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
              >
                <option value="0">---</option>
                <option
                  v-for="(lga_name, index) in lgas"
                  :key="index"
                  :value="lga_name.name"
                  class="text-capitalize"
                >
                  {{ lga_name.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label for="">Employment Status</label>
            <select
              id="mySelect-status"
              class="custom-select"
              v-model="form_field.state"
            >
              <option value="">---</option>
              <option value="">Unemployed</option>
              <option value="">Employed</option>
              <option value="">Freelance Worker</option>
              <option value="">Entreprenuer</option>
              <option value="">Intern/Apprentice</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Skills</label>
            <input
              v-model="form_field.email"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Current Skills (Separate by a comma)"
              required
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1"
              >Why do you want to volunteer?</label
            >
            <input
              v-model="form_field.email"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your reason for volunteering"
              required
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1"
              >Where would you like to volunteer?</label
            >
            <input
              v-model="form_field.email"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter what skill you would like to volunteer"
              required
            />
          </div>
          <div class="form-group">
            <label for="">Department</label>
            <select
              id="mySelect-status"
              class="custom-select"
              v-model="form_field.state"
            >
              <option value="">---</option>
              <option value="">
                Volunteer Supervisors (Local Governments)
              </option>
              <option value="">Media team</option>
              <option value="">Strategy team</option>
              <option value="">Policy Formulation team</option>
              <option value="">Mobilization and Outreach team</option>
              <option value="">Pollsters and Feedback team</option>
            </select>
          </div>
          <div class="form-group">
            <label for="">Day of the week you will be available</label>
            <div v-for="(dayy, index) in dayss" :key="index">
              <input
                v-model="form_field.email"
                type="checkbox"
                class="mr-2"
                id="exampleInputEmail1"
                required
              />
              <label for=""> {{ dayy.name }} </label>
            </div>
            <!-- <select
                id="mySelect-status"
                class="custom-select"
                v-model="form_field.state"
              >
                <option value=""> --- </option>
                <option value=""> Sunday </option>
                <option value=""> Monday </option>
                <option value=""> Tuesday </option>
                <option value=""> Wednesday </option>
                <option value=""> Thursday </option>
                <option value=""> Friday </option>
                <option value=""> Saturday </option>
              </select> -->
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1"
              >What Nigerian language do you speak?</label
            >
            <input
              v-model="form_field.email"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter the nigerian language you speak"
              required
            />
          </div>
          <div class="form-group">
            <label for="">Do you have a PVC?</label>
            <select
              id="mySelect-status"
              class="custom-select"
              v-model="form_field.state"
            >
              <option value="">---</option>
              <option value="">Yes</option>
              <option value="">No</option>
            </select>
          </div>
          <input
            type="submit"
            value="SUBMIT"
            class="form-control text-light bg-darker font-weight-bold"
          />
        </form>
      </main>
      <div class="loading" v-if="loading">
        <div class="spinner-border m-5" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import paystack from "vue-paystack";
import swal from "sweetalert";
import SimplifiedNav from "../../../components/simplified_nav.vue";
import countries from "@/assets/js/countries.js";
import axios from "axios";
export default {
  components: { SimplifiedNav },
  data() {
    return {
      country_nums: countries,
      country_list: [],
      lga: false,
      nigeria: false,
      ward: false,
      paystack_part: false,
      PUBLIC_KEY: "pk_live_6c2684fe83cd844c750932b184a1bbe26f380912",
      loading: false,
      baseUrl: "https://api.adc.org.ng/api/",
      states: "",
      lgas: "",
      selState: "",
      selected_country: "",
      phone_number: "",
      ages: [],
      dayss: [
        { name: "Sunday" },
        { name: "Monday" },
        { name: "Tuesday" },
        { name: "Wednesday" },
        { name: " Thursday" },
        { name: "Friday" },
        { name: " Saturday" },
        { name: "Everyday" },
      ],
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
    getNum() {
      var priceOptions = document.getElementById("mySelect");
      var selOption = priceOptions.options[priceOptions.selectedIndex].value;
      this.selected_country = selOption;
    },
    async listCountry() {
      let res = await axios.get("https://api.covid19api.com/summary");
      console.log(res.data.Countries);
      this.country_list = res.data.Countries;
    },
    getCountry2() {
      var countryOptions = document.getElementById("mySelect5");
      var selOption =
        countryOptions.options[countryOptions.selectedIndex].value;
      console.log(selOption);
      if (selOption == "Nigeria") {
        this.nigeria = true;
      } else {
        this.nigeria = false;
      }
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
      var priceOptions = document.getElementById("mySelect0");
      var selOption = priceOptions.options[priceOptions.selectedIndex].value;
      console.log(selOption);
      this.selState = selOption;
      this.getlgas();
      this.lga = true;
    },

     async getStates() {
        let res = await axios.get(
          "https://locus.fkkas.com/api/states"
        );
        console.log(res.data.data);
        this.states = res.data.data;
      },
      async getlgas() {
        let res = await axios.get(
          `https://locus.fkkas.com/api/regions/${this.selState}`
        );
        console.log(res.data.data);
        this.lgas = res.data.data;
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
        formData.append(
          "phone_number",
          this.phone_number + this.selected_country
        );
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
    this.listCountry();
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
.top-area {
  background: url("../../../../src/assets/img/image6.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.6);
  background-blend-mode: overlay;
  height: 20rem;
}
.form-control,
select {
  border: none !important;
}
input:focus {
  /* box-shadow: none !important; */
  box-shadow: 0px 0px 2px 1px #224f5a !important;
}

label {
  font-weight: bold;
  color: #224f5a !important;
}
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
  .form__container {
    width: 85% !important;
  }
}
</style>
