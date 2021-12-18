<template>
  <div>
    <div class="core-values-div mt-5 mb-5">
      <h1 class="core-values-text">Our Core Values</h1>
      <div class="core-values-content">
          <div class="core-values">
        <div class="flip-card">
          <div class="card-front font-weight-bold bg-main">
              Handshake
          </div>
          <div class="card-back bg-orange">
              <p>
                  Warm acceptance and affinity of people
              </p>
          </div>
        </div>
      </div>
      <div class="core-values">
        <div class="flip-card">
          <div class="card-front font-weight-bold bg-darker">
              Patriotism
          </div>
          <div class="card-back bg-orange">
              <p>
                  Belief in country remains our#1.
              </p>
          </div>
        </div>
      </div>
      <div class="core-values">
        <div class="flip-card">
          <div class="card-front bg-main">
              Leadership
          </div>
          <div class="card-back bg-orange">
              <p>
                  Leadership gives direction. We believe that effective transformational leadership with knowledge-driven protocols is the elixir to our nation-building enterprise.
              </p>
          </div>
        </div>
      </div>
      <div class="core-values">
        <div class="flip-card">
          <div class="font-weight-bold card-front bg-darker">
              Equity
          </div>
          <div class="card-back bg-orange">
              <p>
                  To be fair and just in dealing with people and each other; this enriches our diversity and fosters unity.
              </p>
          </div>
        </div>
      </div>
      <div class="core-values">
        <div class="flip-card">
          <div class="card-front font-weight-bold bg-main">
              Inclusion
          </div>
          <div class="card-back bg-orange">
              <p>
                  Bringing everyone onboard gives us more strength, viability and stability.
              </p>
          </div>
        </div>
      </div>
      <div class="core-values">
        <div class="flip-card">
          <div class="card-front font-weight-bold bg-darker">
              Knowledge
          </div>
          <div class="card-back bg-orange">
              <p>
                  Knowledge and its proper application powers the modern organization and society.
              </p>
          </div>
        </div>
      </div>
      <div class="core-values">
        <div class="flip-card">
          <div class="card-front font-weight-bold bg-main">
              Transparency
          </div>
          <div class="card-back bg-orange">
              <p>
                  Ours is Radical Transparency; this creates a convivial atmosphere for teamwork, cooperation, and collaboration; persons to devote time and efforts to constructive work.
              </p>
          </div>
        </div>
      </div>
      <div class="core-values">
        <div class="flip-card">
          <div class="card-front bg-darker">
              Accountability
          </div>
          <div class="card-back bg-orange">
              <p>
                  We believe that leaders owe the people a good audit of their stewardship to qualify as true leader.
              </p>
          </div>
        </div>
      </div>
      <div class="core-values">
        <div class="flip-card">
          <div class="card-front font-weight-bold bg-main">
              Diversity
          </div>
          <div class="card-back bg-orange">
              <p>
                  Drawing from variety and multiple sources enhance decision making, quality of leadership and endurance.
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
}
.card-front {
    
  transform: rotateY(0deg);
  z-index: 2;
}

/* .card-back */
.card-back {
  transform: rotateY(180deg);
  z-index: 1;
  box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.2);
}


</style>