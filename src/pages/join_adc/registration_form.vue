<template>
  <div>
    <div>
      <simplified-nav />
    </div>
    <div>
      <main class="content">
        <h1 class="text-center text-main font-weight-bold">
          Registration Form
        </h1>
        <form>
          <div class="row form-group">
            <div class="col">
              <label for="exampleInputEmail1">First Name</label>
              <input
                v-model="form_field.first_name"
                type="text"
                class="form-control"
                placeholder="First name"
              />
            </div>
            <div class="col">
              <label for="exampleInputEmail1">Last Name</label>
              <input
                v-model="form_field.last_name"
                type="text"
                class="form-control"
                placeholder="Last name"
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
              placeholder="Email Address"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              v-model="form_field.password"
              placeholder="Password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Phone Number</label>
            <input
              v-model="form_field.phone_number"
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Phone Number"
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
            />
          </div>
          <div class="form-group">
            <label for="inputState">Gender</label>
            <select
              id="inputState"
              v-model="form_field.lga"
              class="form-control"
            >
              <option value="0">Choose</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
            </select>
          </div>
          <div class="form-group">
            <label for="inputState">State</label>
            <select
              id="mySelect"
              class="custom-select"
              @change="plans($event)"
              v-model="form_field.state"
            >
              <option
                v-for="(state_name, index) in states"
                :key="index"
                :value="state_name.name"
                class="text-capitalize"
              >
                {{ plan.name }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label for="inputState">Local Government</label>
            <select
              id="mySelect"
              class="custom-select"
              @change="plans($event)"
              v-model="form_field.lga"
            >
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
          <div class="form-group">
            <label for="inputState">Ward</label>
            <input
              v-model="form_field.ward"
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Ward"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Reffered by</label>
            <input
              v-model="form_field.referral"
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Name of Refferer"
            />
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
              ref="file"
              v-on:change="handleFileUpload()"
            />
          </div>
          <input
            type="button"
            value="SUBMIT"
            class="form-control text-light bg-main"
          />
        </form>
      </main>
    </div>
  </div>
</template>

<script>
  import SimplifiedNav from "../../components/simplified_nav.vue";
  export default {
    components: { SimplifiedNav },
    data() {
      return {
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
          image: "",
        },
      };
    },
    methods:{
       handleFileUpload(){
      this.form_field.image= this.$refs.file.files[0];
    }
    }
  };
</script>

<style scoped>
  .container {
    padding: 3rem 8rem;
  }

  @media (max-width: 990px){
    .content {
      padding: 2rem !important;
    }
  }
</style>
