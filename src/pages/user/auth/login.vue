<template>
  <div class="login-page">
    <div class="login-box shadow-lg rounded pt-4">
      <div class="text-center">
        <img
          src="@/assets/img/brand_assets/logo_horizontal_dark.png"
          alt=""
          srcset=""
          width="120"
        />
      </div>
      <h6 class="mt-4 font-weight-bold text-center mb-\3">
        Enter details to Login
      </h6>
      <div class="px-4">
        <form @submit.prevent="login" method="POST" novalidate="novalidate">
          <div class="form-group">
            <label for="exampleInputEmail1" class="font-weight-bold"
              >Email or Phone Number</label
            >
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1" class="font-weight-bold"
              >Password</label
            >
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="text-right mb-3">
            <router-link class="text-danger small font-weight-bold" to="/reset_password">Reset Password</router-link>
            </div>
          <button type="submit" class="btn bg-darker w-100 small-btn-text">
            LOGIN
          </button>
        </form>
      </div>
      <div class="text-center my-3 homepage">
        <router-link class="text-dark font-weight-bold" to="/"
          >Back to Home page</router-link
        >

      </div>
    </div>

    <div class="loading" v-if="loading">
      <img src="@/assets/img/loading.gif" alt="" srcset="" />
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert'
  import helpers from "@/services/helper.js";
  export default {
    data() {
      return {
        email: "",
        password: "",
        loading: false,
      };
    },
    methods: {
      async login() {
        this.loading = true;
        // this.errors = [];
        try {
          const credentials = {
            email: this.email,
            password: this.password,
          };
          const response = await helpers.login(credentials);
          const token = response.data.token;
          const user = response.data.user;
          this.$store.dispatch("login", { token, user });
          this.$router.push("/dashboard/home");
          swal({
            title: "Welcome!",
            text: "Logged in Successfully",
            icon: "success",
            button: "Go Home!",
          });
        } catch (error) {
          console.log(error.response);
          if (error.response.status == 422 || error.response.status === "") {
          
            swal({
            title: "Error!",
            text: "Email or phone number or password incorrect",
            icon: "error",
            button: "Go Back!",
          });
            this.email = "";
            this.password = "";
          } else {
             swal({
            title: "Error!",
            text: "Something went wrong, please refresh and try again.",
            icon: "error",
            button: "Go Back!",
          });
            this.email = "";
            this.password = "";
          }
        } finally {
          this.loading = false;
        }
      },
      beforeCreate(){
         if (!this.$store.getters.isLoggedIn) {
           this.$router.push("/login")
         }
         else{
            swal({
          title: "Welcome Back!",
          text: "You are already logged in",
          icon: "success",
          // button: "Go Home!",
        });
            this.$router.push('/dashboard/home')
         }
      }
    },
  };
</script>

<style>
  label {
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
  }</style
>>
