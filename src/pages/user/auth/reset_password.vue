<template>
  <div>
    <div class="loader" v-if="loading">
        <h5 class="text-white">Resetting...  <span class="text-warning font-weight-bold"> Please Wait</span> </h5>
    </div>
    <div class="login-page">
    <div class="login-box shadow-lg rounded pt-4 pb-2">
      <h6 class="mt-3 font-weight-bold text-center mb-3 pb-4">New Password Details</h6>
      <div class="px-4">
        <form @submit.prevent="resetPassword" method="POST" novalidate="novalidate">
          <div class="form-group">
            <label for="exampleInputEmail1" class="font-weight-bold">Email address</label>
            <input
            v-model="email"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1" class="font-weight-bold">New Password</label>
            <input
            v-model="password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" class="btn bg-darker w-100 small-btn-text">RESET PASSWORD</button>
        </form>
      </div>
       <div class="text-center my-2 homepage" >
          <router-link class="text-dark font-weight-bold" to="/login">Back to Login page</router-link>
        </div>
    </div>
  </div>
 
  </div>
</template>

<script>
// import helpers from '@/services/helper.js';
import swal from 'sweetalert'
import axios from 'axios';
  export default {
    data() {
      return {
          done: true,
        email: '',
        password:'',
        baseUrl: "https://api.adc.org.ng/api/",
        loading: false
      };
    },
     methods:{
       async resetPassword() {
            // this.loading = true,
            // this.errors = [];
            try {
                //  const token = this.$store.getters.isLoggedIn;
          // POST request using axios with set headers
          this.loading = true;
          let payload = {
            email: this.email,
            password: this.password,

          };
          let res = await axios.post(this.baseUrl + "auth/password/update", payload
          );
          console.log(res);
          swal({
            title: "Hooray!",
            text: "Reset Password successful! Please go to Login.",
            icon: "success",
            button: "Login Page!",
          });
          this.email = '';
            this.password = '';
            this.$router.push("/login");
                } 
                catch (error) {
                console.log(error.response)
                if (error.response.status == 422 || error.response.status === '' ) {
               alert("We couldn't verify your login details.");
                this.email = '';
                this.password = '';
                } else {
                alert("Something went wrong, please refresh and try again.");
                this.email = '';
                this.password = '';
                }
            }
                finally {
                  // this.submitted = false
                  this.loading = false;
                    }
        },
     }
  };
</script>

<style>
label{
    font-size: 0.8rem !important;
    margin-bottom: 0;
}
.small-btn-text {
    color: #fff;
    font-size: 0.8rem;
    font-weight: bold;
}
.form-control:focus {
    border: 1px solid #ced4da !important;
    box-shadow: none;
  }
  .form-control {
      border: 1px solid rgba(0, 0, 0, 0.1);
      
  }
  .loader {
    min-height: 100vh;
    position: fixed;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
