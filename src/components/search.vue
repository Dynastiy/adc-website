<template>
  <div>
      <!-- <h2>Find Your State Chairperson</h2>

<input type="text" id="myInput" @keyup="myFunction" placeholder="Search State.." title="Type in a name"> -->
<h3 class="search-text mt-4">Find Your State Chairperson</h3>

        <div class="input-group mb-3 shadow-lg">
          <div class="input-group-prepend">
            <span class="input-group-text" id="search-icon"
              ><i class="fa fa-search" aria-hidden="true"></i
            ></span>
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="State Chairperson"
            placeholder="Search State..."
            id="myInput" @keyup="myFunction"
          />
          <!-- <div class="input-group-append ">
            <span class="input-group-text bg-darker" id="arrow-icon">
              <i class="fa fa-arrow-right" aria-hidden="true"></i
            ></span>
          </div> -->
        </div>

<ul id="myUL">
  <li><a href="#">Abia State <br/> BARR. KELENNA OBONNA <br/> <span> 08060565475 </span></a></li>
  <li><a href="#">Adamawa State <br/> YAHAYA H. YULDE <br/> <span> 08036065226 </span> </a></li>
  <li><a href="#">Akwa Ibom State <br/> HON. UTIP ETIEBET <br/> <span> 08030990758 </span> </a></li>
  <li><a href="#">Anambra State <br/> PATRICK OBIANYO <br/> <span> 07011123223 </span> </a></li>

  <li><a href="#">Bauchi State <br/> HASSAN HARUN <br/> <span> 08029435802 </span>  </a></li>
  <li><a href="#">Bayelsa State <br/> DR. ALEX KOINYAN <br/> <span> 08053285846 </span> </a></li>
  <li><a href="#">Benue State <br/>HON. ROBERT F. AMEH <br/> <span> 08053968517 </span> </a></li>
  <li><a href="#">Borno State <br/> MUHAMMAD KHALA JIDDA  <br/> <span> 08028689588 </span> </a></li>

  <li><a href="#">Cross River State <br/> AGBOR ELVIS AGBOR  <br/> <span> 08106160088 </span> </a></li>
  
  <li><a href="#">Delta State <br/>PRINCE JOE CHUKWU  <br/> <span>08034047836, 08025035036
 </span> </a></li>
  
  <li><a href="#">Ebonyi State <br/> COMR. NWOGBA MORGAN NNAEMEKA <br/> <span> 08069641043 </span> </a></li>
  <li><a href="#">Edo State <br/> MR. KENNEDY <br/> <span> 07032072777 </span> </a></li>
  <li><a href="#">Ekiti State <br/>HON. ILESANMI JOEL OMOLAYO <br/> <span> 08069202646 </span> </a></li>
  <li><a href="#">Enugu State <br/> STELLA NNEAMAKA  CHUKWUMA <br/> <span> 08037875453 </span> </a></li>
  
  <li><a href="#">Gombe State <br/> AUWAL ABBA BARDE <br/> <span> 08030578038 </span> </a></li>
  
  <li><a href="#">Imo State <br/> BARR. NLEM IGNATIUS <br/> <span> 08035769972 </span> </a></li>
  
  <li><a href="#">Jigawa State <br/> ALH. LAWAN ABDULLAHI <br/> <span> 08032383752 </span> </a></li>
  
  <li><a href="#">Kaduna State <br/>COMR. PHILIMON KURE

 <br/> <span> 08030082300 </span> </a></li>
  <li><a href="#">Kano State <br/>HARUNA KABIRU <br/> <span> 08167592822 </span> </a></li>
  <li><a href="#">Katsina State <br/>MUSA USMAN WAMBA FUNTUA <br/> <span> 08036948888 </span> </a></li>
  <li><a href="#">Kebbi State <br/> HAJIYA HAUWA’U MUHAMMED <br/> <span> 08030673079 </span> </a></li>
  <li><a href="#">Kogi State <br/> KINGSLEY TEMITOPE <br/> <span>07051710333, 08161361742 </span> </a></li>
  <li><a href="#">Kwara State <br/>ADEBAYO AKADI <br/> <span> 07068516196 </span> </a></li>
  
  <li><a href="#">Lagos State <br/> <br/> <span> </span> </a></li>
  
  <li><a href="#">Nasarawa State <br/>HON. GODWIN A. WILLIAM <br/> <span> 08067673993 </span> </a></li>
  <li><a href="#">Niger State <br/>ALH. MUSA HASSAN  <br/> <span> 08036580864 </span> </a></li>
  
  <li><a href="#">Ogun State <br/>Odunlami Salami <br/> <span>08030837151 </span> </a></li>
  <li><a href="#">Ondo State <br/>HON.IBRAHIM OLAIDE RASHEED  <br/> <span> </span> </a></li>
  <li><a href="#">Osun State <br/> DR. CHARLES IDOWU OMIDIJI <br/> <span> 08067695827 </span> </a></li>
  <li><a href="#">Oyo State <br/>REV. ADENIRAN ADEGOKE EZEKIEL <br/> <span> 07063636295 </span> </a></li>
  
  <li><a href="#">Plateau State <br/> H.E. SABIU IBRAHIM MUSA <br/> <span> 08066454445 </span> </a></li>
  
  <li><a href="#">Rivers State <br/> HON. LEADER SAMPSON <br/> <span> 08033881218 </span> </a></li>
  
  <li><a href="#">Sokoto State <br/> ARC. MALAMI S. GALMA <br/> <span>08031838318 </span> </a></li>
  
  <li><a href="#">Taraba State <br/> 08031838318
MANZO IBRAHIM MOHAMMED
 <br/> <span> 08037334660 </span> </a></li>
  
  <li><a href="#">Yobe State <br/>HON. ABUBAKAR ABDULLAHI <br/> <span> 08031319843 </span> </a></li>
  
  <li><a href="#">Zamfara State <br/>BADAMAS BELLO  <br/> <span> 08067516031 </span> </a></li>
  
  <li><a href="#"> Abuja FCT <br/> HON. CLEMENT <br/> <span> 08030707100 </span> </a></li>
</ul>
  </div>
</template>

<script>
export default {
  methods: {
    myFunction() {
      var x, input, filter, ul, li, a, i, txtValue;
      x = document.getElementById("myUL");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      ul = document.getElementById("myUL");
      li = ul.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    },
  },
};
</script>

<style>
#myInput {
  /* background-image: url("/css/searchicon.png"); */
  /* background-position: 10px 12px; */
  /* background-repeat: no-repeat; */
  /* width: 100%; */
  /* font-size: 16px; */
  /* padding: 12px 20px 12px 40px; */
  /* border: 1px solid #ddd; */
  /* margin-bottom: 12px; */
}

#myUL {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: none;
}

#myUL li a {
  border: 1px solid #ddd;
  margin-top: -1px; /* Prevent double borders */
  background-color: #f6f6f6;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  color: black;
  display: block;
}

#myUL li a span {
  color: #00a54f;
}

#myUL li a:hover:not(.header) {
  background-color: #eee;
}
</style>
