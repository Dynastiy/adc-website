<template>
  <div class="dash">
    <h5 class="font-weight-bold text-darker">Dashboard</h5>

    <div class="">
      <div class="">
        <h3 class="font-weight-bold mt-3 mb-4">
          Welcome
          <span class="text-darker"
            >{{ user.first_name }} {{ user.last_name }}</span
          >
        </h3>
      </div>

      <div class="mt-4 user">
        <div class="item1 bg-darker text-white p-3 rounded">
          <h6 class="font-weight-bold">Personal Details</h6>
          <hr class="bg-accent mt-4" />
          <img :src="user.profile_picture" alt="Image Here"
          width="100"
              height="100"
              class="rounded-circle" />
          <ul>
            <li>
              <span class="text-accent">Name:</span> {{ user.first_name }}
              {{ user.last_name }}
            </li>
            <li><span class="text-accent">Email: </span>{{ user.email }}</li>
             <li><span class="text-accent">Phone Number: </span>{{ user.phone_number }}</li>
            <li><span class="text-accent">Gender:</span> {{ user.gender }}</li>
            <li><span class="text-accent">State:</span> {{ user.state }}</li>
            <li>
              <span class="text-accent">Local Government Area:</span>
              {{ user.lga }}
            </li>
            <li><span class="text-accent">Ward: </span>{{ user.ward }}</li>
          </ul>
        </div>
        <div class="bg-darker forum text-white p-3 rounded">
          <h6 class="font-weight-bold">Pay Dues</h6>
          <hr class="bg-accent mt-4" />
          <div>
            <div class="d-flex justify-content-between my-3">
              <h6>Monthly Payment <br> <small class="text-accent"> &#8358;1000 </small></h6>
              <paystack
                :amount="1000 * 100"
                class="btn bg-accent text-dark px-4 py-1 font-weight-bold"
                :email="user.email"
                :paystackkey="PUBLIC_KEY"
                :reference="reference"
                :callback="processPayment"
                :close="close"
              >
                Pay
              </paystack>
            </div>
            <div class="d-flex justify-content-between mb-3">
              <h6>Quarterly Payment <br> <small class="text-accent"> &#8358;3000 </small> </h6>
               
              <paystack
                :amount="3000 * 100"
                class="btn bg-accent text-dark px-4 py-1 font-weight-bold"
                :email="user.email"
                :paystackkey="PUBLIC_KEY"
                :reference="reference0"
                :callback="processPayment"
                :close="close"
              >
                Pay
              </paystack>
            </div>
            <div class="d-flex justify-content-between">
              <h6>Yearly Payment <br> <small class="text-accent"> &#8358;12000 </small></h6>
               
              <paystack
                :amount="12000 * 100"
                class="btn bg-accent text-dark px-4 py-1 font-weight-bold"
                :email="user.email"
                :paystackkey="PUBLIC_KEY"
                :reference="reference1"
                :callback="processPayment"
                :close="close"
              >
                Pay
              </paystack>
            </div>
          </div>
        </div>
        <div class="bg-darker text-white p-3 rounded">
          <h6 class="font-weight-bold">Resources</h6>
          <hr class="bg-accent mt-4">
           <div>
            <div class="d-flex justify-content-between my-3">
              <h6>Handbook</h6>
                <button class="btn bg-accent py-1 font-weight-bold px-4" @click="showInfo">DOWNLOAD</button>
            </div>
            <div class="d-flex justify-content-between">
              <h6>Constitution</h6>
              <a href="@/assets/docs/ADC_constitution.docx" download=""><button class="btn bg-accent py-1 font-weight-bold px-4" >DOWNLOAD</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import paystack from "vue-paystack";
  import swal from 'sweetalert';

  export default {
      components:{
          paystack
      },
    data() {
      return {
        user: "",
        baseUrl: "https://api.adc.org.ng/api/",
        forums: "",
        PUBLIC_KEY: "pk_live_6c2684fe83cd844c750932b184a1bbe26f380912",
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
        console.log(res.data);
        this.user = res.data;
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
        let forum_slice = res.data.data.items;
        this.forums = forum_slice.slice(1, 5);
      },
       processPayment() {
        this.form_wizard = true
        window.alert("Payment recieved");
        swal({
          title: "Done!",
          text: "Payment Received!",
          icon: "success",
          button: "Go Home!",
        });
      },
      close() {
        this.form_wizard = true
        console.log("You closed checkout page");
        swal({
          title: "Cancelled!",
          text: "Transaction Cancelled",
          icon: "warning",
          button: "Go Home!",
        });
      },
      showInfo(){
        swal({
            title: "Error!",
            text: "Not Available yet",
            icon: "error",
            button: "Go Back!",
          });
      }
    },
    async created() {
      this.getUser();
      this.getForum();
    },
     computed:{
         reference() {
        let text = "";
        let possible =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 10; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
      },
      reference0() {
        let text = "";
        let possible =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 10; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
      },
      reference1() {
        let text = "";
        let possible =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 10; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
      },
     }
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

  @media (max-width: 990px) {
.user {
    display: unset;
}
.user div {
    margin-bottom: 20px;
}
.user h6, .user li {
    font-size: 0.8rem;
}
  }
  
</style>
