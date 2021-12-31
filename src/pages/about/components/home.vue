<template>
  <div>
    <div class="">
      <h1 class="font-weight-bold">About African Democratic Congress</h1>
      <hr class="my-5">

      <div class="cards">
        <router-link to="/about/party_structure"><div class="party">Party Structure</div></router-link>
         <router-link to="/about/chairmans_message"> <div class="chairman">Chairman's Message</div></router-link>
        <router-link to="/about/obasanjos_message"><div class="obasanjo">Obasanjo's Message</div></router-link>
        <router-link to="/about/our_candidates"><div class="candidates">Our Candidates</div></router-link>
        <router-link to="/about/state_chapters"> <div class="states">State Chapters</div></router-link>
        <router-link to="/about/contact_us"><div class="contact">Contact Us</div></router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
hr {
    width: 100px;
    background-color: #000;
    height: 2px;
}
  .cards {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 20px;
  }
  .cards div{
      height: 20rem;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .cards a {
      color: #fff;
      font-size: 1.2rem;
      font-weight: bold;
  }
  .cards a:hover {
      text-decoration: none;
  }
  .party {
      background: url("../../../assets/img/gallery/5.jpeg");
      background-position: center;
      background-size: contain;
      background-color: rgba(0, 0, 0, 0.8);
      background-blend-mode: overlay;
  }
   .chairman {
      background: url("../../../assets/img/party_officials/Chief_Ralphs_Okey_Nwosu.jpg");
      background-position: center;
      background-size: contain;
      background-color: rgba(0, 0, 0, 0.8);
      background-blend-mode: overlay;
  }
  .obasanjo {
      background: url("../../../assets/img/obj.jpg");
      background-position: center;
      background-size: cover;
      background-color: rgba(0, 0, 0, 0.8);
      background-blend-mode: overlay;
  }
  .candidates {
      background: url("https://freepngimg.com/thumb/vote/25304-1-voting-box-clipart.png");
      background-position: center;
      background-size: cover;
      background-color: rgba(0, 0, 0, 0.8);
      background-blend-mode: overlay;
  }
  .states {
      background: url("../../../assets/img/icons/Patriotism.svg");
      background-position: center;
      background-size: cover;
      background-color: rgba(0, 0, 0, 0.8);
      background-blend-mode: overlay;
  }
  .contact {
      background: url("https://www.anandgroupindia.com/wp-content/uploads/2019/05/contactus.jpg");
      background-position: center top;
      background-size: cover;
      background-color: rgba(0, 0, 0, 0.8);
      background-blend-mode: overlay;
  }
  @media (max-width: 990px){
    .cards {
      display: unset;
    }
    .cards div {
      margin-bottom: 20px;
    }
  }
</style>

<script>
  export default {};
</script>
