<template>
  <div>
    <footer class="footer-14398">
      <div class="content pt-5">
        <div class="row mb-5">
          <div class="col-md-3 ml-auto">
            <h3>quicklinks</h3>
            <ul class="list-unstyled links">
              <li><a href="https://adc-dn.org/" target="_blank">ADC in Diaspora</a></li>
              <li><router-link to="/our_priorities">Our Priorities</router-link></li>
              <li><router-link to="/our_manifesto">Our Manifesto</router-link></li>
              <li><a href="https://paystack.shop/adc-shop" target="_blank">
                  Shop
                  
                </a></li>
              <li><router-link to="/news">News</router-link></li>
              <li><router-link to="/about/state_chapters">State Chapters</router-link></li>
              <li><router-link to="/about/our_candidates">Our Candidates</router-link></li>
            </ul>
          </div>
          <div class="col-md-2 ml-auto">
            <h3>actions</h3>
            <ul class="list-unstyled links">
              <li><router-link to="/join_adc">Join ADC</router-link></li>
              <li><router-link to="/donate">Donate</router-link></li>
              <li><router-link to="/resources">Resources</router-link></li>
              <li><router-link to="/resources/brand_assets">Brand Assets</router-link></li>
              <li><router-link to="/resources/our_activities">Activities</router-link></li>
              <li><router-link to="/login">Login</router-link></li>
            </ul>
          </div>
          <div class="col-md-5 ml-auto">
            <h3>adc state chapters</h3>
            <div class="row">
              <ul class="list-unstyled links col-md-4">
                <li><a href="#">Abia</a></li>
                <li><a href="">Adamawa</a></li>
                <li><a href="#">Akwa Ibom</a></li>
                <li><a href="">Anambra</a></li>
                <li><a href="#">Bauchi</a></li>
                <li><a href="">Bayelsa</a></li>
                <li><a href="#">Benue</a></li>
                <li><a href="">Borno</a></li>
                <li><a href="#">Abia</a></li>
                <li><a href="">Delta</a></li>
                <li><a href="#">Ebonyi</a></li>
                <li><a href="">Edo</a></li>
                <li><a href="#">Ekiti</a></li>
              </ul>
              <ul class="list-unstyled links col-md-4">
                <li><a href="">Enugu</a></li>
                <li><a href="#">Gombe</a></li>
                <li><a href="">Imo</a></li>
                <li><a href="#">Jigawa</a></li>
                <li><a href="">Kaduna</a></li>
                <li><a href="#">Kano</a></li>
                <li><a href="">Katsina</a></li>
                <li><a href="#">Kebbi</a></li>
                <li><a href="">Kogi</a></li>
                <li><a href="#">Kwara</a></li>
                <li><a href="">Lagos</a></li>
                <li><a href="#">Nassarawa</a></li>
              </ul>
              <ul class="list-unstyled links col-md-4">
                <li><a href="">Niger</a></li>
                <li><a href="#">Ogun</a></li>
                <li><a href="">Ondo</a></li>
                <li><a href="#">Osun</a></li>
                <li><a href="">Oyo</a></li>
                <li><a href="#">Plateau</a></li>
                <li><a href="">Rivers</a></li>
                <li><a href="#">Sokoto</a></li>
                <li><a href="">Taraba</a></li>
                <li><a href="#">Yobe</a></li>
                <li><a href="">Zamfara</a></li>
                <li><a href="">FCT</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-2 ml-auto">
            <h3>contact</h3>
            <ul class="list-unstyled links">
              <li> <i class="fa fa-envelope" aria-hidden="true"></i> <a href="mailto:info@adc.com.ng">admin@adc.com.ng</a></li>
              <li> <i class="fa fa-phone" aria-hidden="true"></i> <a href="tel:+234 812 9855 556">+234 812 9855 556</a></li>
              <li>
                <a href="#"
                  >ADC Global Campus and World headquarters. 4 Lusaka St., Wuse
                  zone 6, Abuja, FCT.</a
                >
              </li>
              <li><a href="https://facebook.com/ADCnig" target="_blank"> <i class="fa fa-facebook" aria-hidden="true"></i> Facebook</a></li>
              <li><a href="https://twitter.com/ADCNig" target="_blank"> <i class="fa fa-twitter" aria-hidden="true"></i> Twitter</a></li>
              <li><a href="https://instagram.com/adc_nig" target="_blank"> <i class="fa fa-instagram" aria-hidden="true"></i> Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="copyright">
        
          <p class="font-weight-bold">©Copyright 2021 African Democratic Congress</p>
        
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
  };
</script>

<style lang="css">
  @import url("https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap");
  
  .footer-14398 {
    /* padding: 3rem 0; */
    background: #224f5a;
    color: #fff;
  }
  .footer-14398 ul li {
    padding: 0.2rem 0;
  }
  .footer-site-logo {
    color: #fff;
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 30px;
    display: block;
  }
  .footer-14398 .content h3 {
    color: #3ee987;
    font-size: 1.3rem;
    margin-bottom: 20px;
    font-family: "Fjalla One", sans-serif;
    text-transform: uppercase;
  }
  .links li {
    /* margin-bottom: 10px; */
  }
  .links a {
    color: #fff;
    font-size: 1.16rem;
    line-height: 0.5rem;
  }
  .links a:hover {
    color: #3ee987;
    text-decoration: none;
    transition: 1s;
  }

  .link-menu li {
    display: inline-block;
  }
  .link-menu a {
    color: #fff;
    display: inline-block;
    padding: 5px;
  }

  .link-menu a .nav-left li :first-child a {
    padding-left: 0;
  }
  .copyright {
    background: #3ee987;
    color: #000;
    font-weight: bold;
    padding: 0.8rem;
    text-align: center;
  }
  .copyright p {
    margin: 0;
  }
</style>
