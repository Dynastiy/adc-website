<template>
  <div>
    <div class="core-values-div mt-5 mb-5">
      <h1 class="core-values-text">Our Core Values</h1>
      <div class="core-values-content">
          <div class="core-values">
        <div class="flip-card">
          <div class="card-front font-weight-bold bg-main">
              <h4 class="font-weight-bold">Handshake</h4>
              <div class="text-right">
                <img src="@/assets/img/icons/Handshake.svg"  alt="">
              </div>
          </div>
          <div class="card-back text-center">
            <h3 class="text-accent font-weight-bold">
              Handshake
            </h3>
              <p class="">
                  Warm acceptance and affinity of people
              </p>
          </div>
        </div>
      </div>
      <div class="core-values">
        <div class="flip-card">
          <div class="card-front font-weight-bold bg-darker">
              <h4 class="font-weight-bold">Patriotism</h4> 
              <div class="text-right">
                <img src="@/assets/img/icons/Patriotism.svg"  alt="">
              </div>
          </div>
          <div class="card-back text-center">
            <h3 class="text-accent font-weight-bold">
              Patriotism
            </h3>
              <p class="">
                  Belief in country remains our #1
              </p>
          </div>
        </div>
      </div>
      <div class="core-values">
        <div class="flip-card">
          <div class="card-front bg-main">
               <h4 class="font-weight-bold">Leadership</h4> 
               <div class="text-right">
                 <img src="@/assets/img/icons/Leadership.svg"  alt="">
               </div>
          </div>
          <div class="card-back text-center">
            <h3 class="text-accent font-weight-bold">
              Leadership
            </h3>
              <p class="">
                  Leadership gives direction. We believe that effective transformational leadership with knowledge-driven protocols is the elixir to our nation-building enterprise
              </p>
          </div>
        </div>
      </div>
      <div class="core-values">
        <div class="flip-card">
          <div class="font-weight-bold card-front bg-darker">
              <h4 class="font-weight-bold">Equity</h4> 
              <div class="text-right">
                <img src="@/assets/img/icons/Equity.svg"  alt="">
              </div>
          </div>
          <div class="card-back text-center">
            <h3 class="text-accent font-weight-bold">
              Equity
            </h3>
              <p class="">
                  To be fair and just in dealing with people and each other; this enriches our diversity and fosters unity
              </p>
          </div>
        </div>
      </div>
      <div class="core-values">
        <div class="flip-card">
          <div class="card-front font-weight-bold bg-main">
              <h4 class="font-weight-bold">Inclusion</h4> 
              <div class="text-right">
                <img src="@/assets/img/icons/Inclusion.svg"  alt=""> </div>         
              </div>
          <div class="card-back text-center">
              <h3 class="text-accent font-weight-bold">
              Inclusion
            </h3>
              <p class="">
                  Bringing everyone onboard gives us more strength, viability and stability
              </p>
          </div>
        </div>
      </div>
      <div class="core-values">
        <div class="flip-card">
          <div class="card-front font-weight-bold bg-darker">
             <h4 class="font-weight-bold"> Knowledge</h4>
             <div class="text-right">
                <img src="@/assets/img/icons/Knowledge.svg"  alt="">
              </div>
          </div>
          <div class="card-back text-center">
              <h3 class="text-accent font-weight-bold">
              Knowledge
            </h3>
              <p class="">
                  Knowledge and its proper application powers the modern organization and society
              </p>
          </div>
        </div>
      </div>
      <div class="core-values">
        <div class="flip-card">
          <div class="card-front font-weight-bold bg-main">
             <h4 class="font-weight-bold"> Transparency</h4>
             <div class="text-right">
                <img src="@/assets/img/icons/Transparency.svg"  alt="">
              </div>
          </div>
          <div class="card-back text-center">
              <h3 class="text-accent font-weight-bold">
              Transparency
            </h3>
              <p class="">
                  Ours is Radical Transparency; this creates a convivial atmosphere for teamwork, cooperation, and collaboration; persons to devote time and efforts to constructive work
              </p>
          </div>
        </div>
      </div>
      <div class="core-values">
        <div class="flip-card">
          <div class="card-front bg-darker">
              <h4 class="font-weight-bold">Accountability</h4>
              <div class="text-right">
                <img src="@/assets/img/icons/Accountability.svg"  alt="">
              </div>
          </div>
          <div class="card-back text-center">
              <h3 class="text-accent font-weight-bold">
              Accountability
            </h3>
              <p class="">
                  We believe that leaders owe the people a good audit of their stewardship to qualify as true leader
              </p>
          </div>
        </div>
      </div>
      <div class="core-values">
        <div class="flip-card">
          <div class="card-front font-weight-bold bg-main">
              <h4 class="font-weight-bold">Diversity</h4>
              <div class="text-right">
                <img src="@/assets/img/icons/Diversity.svg"  alt="">
              </div>
          </div>
          <div class="card-back text-center">
              <h3 class="text-accent font-weight-bold">
              Diversity
            </h3>
              <p class="">
                  Drawing from variety and multiple sources enhance decision making, quality of leadership and endurance
              </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
     data() {
return{
  
}
  }
  };
</script>

<style scoped>
.card-back p {
  font-size: 1.1rem
}
/* .card-back h3 {
  color: #ff7300 !important;
} */
.flip-card{
    transform-style: preserve-3d;
  transition: .5s .3s;
}
.core-values {
    perspective: 1000px;
}
.core-values:hover .flip-card,
.core-values:focus-within .flip-card{
  transform: rotateY(180deg);
}
.card-front, .card-back {
    overflow: hidden;
    position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  backface-visibility: hidden;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.9);
}
.card-front {
    
  transform: rotateY(0deg);
  z-index: 2;
}

/* .card-back */
.card-back {
  transform: rotateY(180deg);
  z-index: 1;
  /* box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.2); */
  /* background: url(../assets/img/core.jpg); */
  background-repeat: no-repeat;
  
  /* background-size: cover; */
  background-color: #224f5a;
  /* background-blend-mode: overlay; */
}
.card-front img {
  width: 60px;
  width: 60px;
}
.card-front .text-right {
  display: flex;
  justify-content: flex-end;
}
.small-line {
  width: 30%;
  background-color: #ff7300;
  height: 2px;
}

</style>