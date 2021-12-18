<template>
  <div class="login-page">
    <div class="login-box shadow-lg rounded pt-4">
      <div class="text-center">
          <img src="@/assets/img/logo2.png" alt=""  srcset="" width="50" />
      </div>
      <h6 class="mt-3 font-weight-bold text-center">Enter details to Login</h6>
      <div class="px-4">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <router-link to="/dashboard"><button type="submit" class="btn bg-main w-100 small-btn-text">LOGIN</button></router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
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
