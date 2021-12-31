<template>
  <div class="dash">
    <h5 class="font-weight-bold text-darker">Dashboard</h5>

    <div>
      <div class="">
        <h3 class="font-weight-bold mt-5 mb-5">
          Welcome <span class="text-darker">{{ user.first_name }} {{ user.last_name }}</span>
        </h3>
      </div>

      <div class="mt-4 user">
        <div class="item1 bg-darker text-white p-3 rounded">
          <h6 class="font-weight-bold">Personal Details</h6>
          <hr class="bg-accent">
          <img :src="user.profile_picture" alt="" width="300">
         <ul>
              <li><span class="text-accent">Name:</span> {{ user.first_name }} {{ user.last_name }} </li>
          <li><span class="text-accent">Email: </span>{{ user.email }} </li>
          <li><span class="text-accent">Gender:</span> {{ user.gender }} </li>
          <li><span class="text-accent">State:</span> {{ user.state }} </li>
          <li><span class="text-accent">Local Government Area:</span> {{ user.lga }} </li>
          <li><span class="text-accent">Ward: </span>{{ user.ward }} </li>

         </ul>
        </div>
        <div class="bg-darker forum text-white p-3 rounded">
          <h6 class="font-weight-bold">Forum</h6>
          <hr class="bg-accent">
          <ul>
            <li v-for="(forum, i) in forums" :key="i"> {{ forum.content }}  <span></span> </li>
          </ul>
        </div>
        <div class="bg-darker text-white p-3 rounded">
          <h6 class="font-weight-bold">Resources</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    data() {
      return {
        user: "",
        baseUrl: "https://api.adc.org.ng/api/",
        forums: ''      
        };
    },
    methods: {
      async getUser() {
        this.loading = true;
        const token = this.$store.getters.isLoggedIn;
        // GET request using axios with set headers
        const headers = { Authorization: "Bearer" + " " + token };
        let res = await axios.get(this.baseUrl + "auth/profile", {
          headers,
        });
        console.log(res.data.data);
        this.user = res.data.data;
      },
      async getForum() {
        this.loading = true;
        const token = this.$store.getters.isLoggedIn;
        // GET request using axios with set headers
        const headers = { Authorization: "Bearer" + " " + token };
        let res = await axios.get(this.baseUrl + "posts/posts/all", {
          headers,
        });
        console.log(res.data.data.items);
        let forum_slice = res.data.data.items
        this.forums = forum_slice.slice(1,5);
      },
    },
    async created() {
      this.getUser();
      this.getForum()
    },
  };
</script>

<style>
.user {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
}
.user .item1 {
  /* grid-column: 2; */
  grid-row: 1 / 3;
}
ul li {
    list-style: none;
    padding: 0.5rem 0;
}
.forum ul li {
    
}
</style>
