<template>
  <div class="dash">
    <h5 class="font-weight-bold text-darker mb-5">Forum</h5>
    <div class="d-flex justify-content-end mb-3">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn bg-darker text-white font-weight"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Add Post
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" v-if="submitted">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Share a thought
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form action="">
                <div class="form-group">
                  <label for="">Content</label>
                  <textarea
                    v-model="content"
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    @click="addForum"
                    class="btn bg-darker text-white font-weight"
                  >
                    Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div
        class="below_30 shadow-sm mb-3 p-3 bg-white"
        v-for="(forum, i) in forums"
        :key="i"
      >
        <div class="d-flex align-items-center justify-content-between mb-3">
          <div class="d-flex align-items-center">
            <img
              src="https://cdn1.iconfinder.com/data/icons/interface-elements-vii-1/512/Person-256.png"
              alt=""
              width="25"
              height="25"
              class="mr-3 rounded-circle"
            />
            <h5 class="font-weight-bold text-darker m-0">Name of Poster</h5>
          </div>
          <p class="text-muted small m-0">12 December, 2021</p>
        </div>
        <p class="small text-muted">
          {{ forum.content }}
        </p>
        <hr />
        <div class="d-flex">
          <ion-icon name="thumbs-up"></ion-icon>
          <p class="text-muted small font-weight-bold ml-2">10 Likes</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  //   import helpers from "@/services/helper.js";
  import axios from "axios";
  export default {
    data() {
      return {
        forums: [],
        loading: false,
        submitted: true,
        baseUrl: "https://api.adc.org.ng/api/",
        content: "",
      };
    },
    methods: {
      async getForum() {
        this.loading = true;
        const token = this.$store.getters.isLoggedIn;
        // GET request using axios with set headers
        const headers = { Authorization: "Bearer" + " " + token };
        let res = await axios.get(this.baseUrl + "posts/posts/all", {
          headers,
        });
        console.log(res.data.data.items);
        this.forums = res.data.data.items;
      },
      async addForum() {
        this.loading = true;
        try {
          const token = this.$store.getters.isLoggedIn;
          // POST request using axios with set headers
          let payload = {
            content: this.content,
          };
          const headers = { Authorization: "Bearer" + " " + token };
          let res = await axios.post(this.baseUrl + "posts/posts/add", payload, {
            headers,
          });
          console.log(res);
          this.getForum();
        } catch (error) {
          console.log(error);
          this.content = "";
        } finally {
          this.loading = "false";
          this.submitted = false
        }
      },
    },
    async created() {
      this.getForum();
    },
    //  computed: {
    //     isLoggedIn: function() {
    //       return this.$store.getters.isLoggedIn;
    //     }
    //   },
  };
</script>

<style scoped></style>
