<template>
  <div class="login-page">
    <div class="login-box shadow-lg rounded pt-4">
      <div class="text-center">
          <img src="@/assets/img/logo2.png" alt=""  srcset="" width="50" />
      </div>
      <h6 class="mt-3 font-weight-bold text-center">Enter details to Login</h6>
      <div class="px-4">
        <form @submit.prevent="login" method="POST" novalidate="novalidate">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
            v-model="email"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
            v-model="password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" class="btn bg-darker w-100 small-btn-text">LOGIN</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import helpers from '@/services/helper.js';
  export default {
    data() {
      return {
        email: '',
        password:'',
      };
    },
     methods:{
       async login() {
            // this.loading = true,
            // this.errors = [];
            try {
                const credentials = {
                email: this.email,
                password: this.password
                };
                const response = await helpers.login(credentials);
                const token = response.data.token;
                const user = response.data.user;
                this.$store.dispatch('login', { token, user });
                this.$router.push('/dashboard/home');
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
                        this.loading =  false
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
</style>>
