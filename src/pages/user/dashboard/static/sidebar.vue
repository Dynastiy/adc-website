<template>
  <div>
    <div id="aside">
      <ul class="list-unstyled">
        <li>
          <a href="javascript:void(0)" class="logo text-center mb-4">
            <span class="logo-spread">
              <img src="@/assets/img/logo-spread.png" width="140" />
            </span>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" class="logo text-center mb-4">
            <span class="logo-spread">
              <img :src="user.profile_picture" width="140" class="mb-3" />
            </span>
            <br>
            <span>
              Unique ID: ADC/{{ user.id }}
            </span>
          </a>
        </li>
        <li>
          <router-link to="/dashboard/home">
            <span class="mr-2">
              <ion-icon name="menu"></ion-icon>
            </span>
            <span class="menu-item">
              Dashboard
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard/forum">
            <span class="mr-2">
              <ion-icon name="people"></ion-icon>
            </span>
            <span class="menu-item">
              Forum
            </span>
          </router-link>
        </li>
        <li>
          <a href="javascript:void(0)" @click="logout">
            <span class="mr-2"><ion-icon name="power"></ion-icon> </span>
            <span class="menu-item">
              Logout
            </span>
          </a>
        </li>
      </ul>
    </div>
<nav class="navbar navbar-expand-sm navbar-light bg-light shadow-sm" id="mobile-nav">
  <a class="navbar-brand" href="javascript:void(0)">
     <span class="logo-spread">
              <img src="@/assets/img/logo-spread.png" width="140" />
      </span>
  </a>
  <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
      aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavId">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <router-link to="/dashboard/home" class="nav-link" >Dashboard </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/dashboard/forum" class="nav-link" href="#">Forum</router-link>
      </li>
      <li class="nav-item" @click="logout">
        <a class="nav-link" href="javascript:void(0)">Logout</a>
      </li>
    </ul>
  </div>
</nav>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      baseUrl: "https://api.adc.org.ng/api/",
user: {}
    }
  },
  methods: {
    logout(){
      this.$store.dispatch('logout');
      this.$router.push("/login")
    },
    async getUser() {
        this.loading = true;
        const token = this.$store.getters.isLoggedIn;
        // GET request using axios with set headers
        const headers = { Authorization: "Bearer" + " " + token };
        let res = await axios.get(this.baseUrl + "auth/profile", {
          headers,
        });
        console.log(res.data);
        this.user = res.data;
      },
  },
  async created(){
    this.getUser()
  }
}
</script>

<style scoped>
.router-link-exact-active{
    border-right:3px solid #06191d;
    /* background: #cf7300; */
}
</style>