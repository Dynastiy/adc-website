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
        <form @submit.prevent="register" method="POST">
          <div class="row form-group">
            <div class="col">
              <label for="exampleInputEmail1">First Name</label>
              <input
                v-model="form_field.first_name"
                type="text"
                class="form-control"
                placeholder="John"
                
              />
            </div>
            <div class="col">
              <label for="exampleInputEmail1">Last Name</label>
              <input
                v-model="form_field.last_name"
                type="text"
                class="form-control"
                placeholder="Doe"
                
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
                    @change="createNumber"
                    class="text-capitalize"
                  >
                    {{ country_num.nicename }} ({{ country_num.phonecode }})
                  </option>
                </select>
              </div>
              <div class="col">
                <input
                  v-model="phone_number"
                  @change="createNumber"
                  type="phone"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Phone Number"
                  
                />
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Age</label>
            <select
              id="mySelect-age"
              class="custom-select"
              v-model="form_field.age"
            >
              <option value="">---</option>
              <option value="18-24">18-24</option>
              <option value="25-39">25-39</option>
              <option value="40-59">40-59</option>
              <option value="60+">60+</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Country</label>
            <select
              id="mySelect5"
              class="custom-select"
              @change="getCountry2()"
              v-model="form_field.address"
            >
              <option value="">  --- </option>
              <option value="Nigeria"> Nigeria </option>
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
                v-model="form_field.city"
              >
                <option value="">---</option>
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
              v-model="form_field.occupation"
            >
              <option value="">---</option>
              <option value="Unemployed">Unemployed</option>
              <option value="Employed">Employed</option>
              <option value="Freelance Worker">Freelance Worker</option>
              <option value="Entrepreneur">Entreprenuer</option>
              <option value="Intern/Apprentice">Intern/Apprentice</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Skills</label>
            <input
              v-model="form_field.skills"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Current Skills (Separate by a comma)"
              
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1"
              >Why do you want to volunteer?</label
            >
            <input
              v-model="form_field.volunteering_for"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your reason for volunteering"
              
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1"
              >Where would you like to volunteer?</label
            >
            <input
              v-model="form_field.where_to_help"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter what skill you would like to volunteer"
              
            />
          </div>
          <div class="form-group">
            <label for="">Department</label>
            <select
              id="mySelect-status"
              class="custom-select"
              v-model="form_field.department"
            >
              <option value="">---</option>
              <option value="Volunteer Supervisors (Local Governments)">
                Volunteer Supervisors (Local Governments)
              </option>
              <option value="Media team">Media team</option>
              <option value="Strategy team">Strategy team</option>
              <option value="Policy Formulation team">Policy Formulation team</option>
              <option value="Mobilization and Outreach team">Mobilization and Outreach team</option>
              <option value="Pollsters and Feedback team">Pollsters and Feedback team</option>
            </select>
          </div>
          <div class="form-group">
            <label for="">Day of the week you will be available</label>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr)">
              <div>
                <input type="checkbox" id="Monday" value="Monday" v-model="day_of_week">
                <label for="Monday"  class="ml-2">Monday</label>
              </div>
              <div>
                <input type="checkbox" id="Tuesday" value="Tuesday" v-model="day_of_week">
                <label for="Tuesday" class="ml-2">Tuesday</label>
              </div>
              <div>
                <input type="checkbox" id="Wednesday" value="Wednesday" v-model="day_of_week">
                <label for="Wednesday" class="ml-2">Wednesday</label>
              </div>
              <div>
                <input type="checkbox" id="Thursday" value="Thursday" v-model="day_of_week">
                <label for="Thursday" class="ml-2">Thursday</label>
              </div>
              <div>
                <input type="checkbox" id="Friday" value="Friday" v-model="day_of_week">
                <label for="Friday" class="ml-2">Friday</label>
              </div>
              <div>
                <input type="checkbox" id="Saturday" value="Saturday" v-model="day_of_week">
                <label for="Saturday" class="ml-2">Saturday</label>
              </div>
              <div>
                <input type="checkbox" id="Sunday" value="Sunday" v-model="checkedNames">
                <label for="Sunday" class="ml-2">Sunday</label>
              </div>
              <div>
                <input type="checkbox" id="All-Days" value="All Days" v-model="checkedNames">
                <label for="All Days" class="ml-2">All Days</label>
              </div>
              
            </div>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1"
              >What Nigerian language do you speak?</label
            >
            <input
              v-model="form_field.language"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter the nigerian language you speak"
              
            />
          </div>
          <div class="form-group">
            <label for="">Do you have a PVC?</label>
            <select
              id="mySelect-status"
              class="custom-select"
              v-model="form_field.pvc"
            >
              <option value="">---</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
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
      ages: '',
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
        phone: "",
        age: '',
  volunteering_for: "",
  address: '',
  city: '',
  state: '',
  zip_code: '',
  skills: '',
  heard_from: '',
  where_to_help: '',
  department: '',
  day_of_week: [],
  time_of_day: '',
  language: '',
  pvc: ''
      },
    };
  },
  methods: {
    createNumber(){
        this.form_field.phone = this.selected_country + this.phone_number;
      },
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
    async register() {
      try {
        this.loading = true;
        let formData = new FormData();
        formData.append("first_name", this.form_field.first_name);
        formData.append("last_name", this.form_field.last_name);
        formData.append("email", this.form_field.email);
        formData.append("phone", this.form_field.phone);
        formData.append("age", this.form_field.age);
        formData.append("volunteering_for", this.form_field.volunteering_for);
        formData.append("address", this.form_field.address);
        formData.append("city", this.form_field.city);
        formData.append("state", this.form_field.state);
        formData.append("zip_code", this.form_field.zip_code);
        formData.append("skills", this.form_field.skills);
        formData.append("heard_from", this.form_field.heard_from);
        formData.append("where_to_help", this.form_field.where_to_help);
        formData.append("department", this.form_field.department);
        formData.append("department", this.form_field.department);
        formData.append("day_of_week", this.form_field.day_of_week);
        formData.append("time_of_day", this.form_field.time_of_day);
        formData.append("language", this.form_field.language);
        formData.append("pvc", this.form_field.pvc);
        let res = await axios.post(this.baseUrl + "volunteer/users/add", formData);
        console.log(res);
        this.first_name= "",
        this.last_name= "",
        this.email= "",
        this.phone= "",
        this.age= '',
  this.volunteering_for= "",
  this.address= '',
  this.city= '',
  this.state= '',
  this.zip_code= '',
  this.skills= '',
  this.heard_from= '',
  this.where_to_help= '',
  this.department= '',
  this.day_of_week= '',
  this.time_of_day= '',
  this.language= '',
  this.pvc= ''
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
         this.first_name= "",
        this.last_name= "",
        this.email= "",
        this.phone= "",
        this.age= '',
  this.volunteering_for= "",
  this.address= '',
  this.city= '',
  this.state= '',
  this.zip_code= '',
  this.skills= '',
  this.heard_from= '',
  this.where_to_help= '',
  this.department= '',
  this.day_of_week= '',
  this.time_of_day= '',
  this.language= '',
  this.pvc= ''
          this.loading = false;
        } else {
         this.first_name= "",
        this.last_name= "",
        this.email= "",
        this.phone= "",
        this.age= '',
  this.volunteering_for= "",
  this.address= '',
  this.city= '',
  this.state= '',
  this.zip_code= '',
  this.skills= '',
  this.heard_from= '',
  this.where_to_help= '',
  this.department= '',
  this.day_of_week= '',
  this.time_of_day= '',
  this.language= '',
  this.pvc= ''
          this.loading = false;
        }
      }
    },
  },
  async created() {
    this.getStates();
    this.listCountry();
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
