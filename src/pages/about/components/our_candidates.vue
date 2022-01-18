<template>
  <div class="container">
    <h1 class="text-center font-weight-bold mt-3 mb-3">Our Candidates</h1>
    <hr class="mx-auto mb-4">
    <!-- Candidate One   -->
    <!-- <div class="aspirants">
      <div class="candidate shadow" v-for="candidate of candidates" :key="candidate.id">
        <div class="avatar-bg" :style="{ 'background-image': `url(${candidate.avatar})` }">  </div>
        <div class="details p-3 bg-darker">
          <h5 class="font-weight-bold text-white"> {{ candidate.name }} </h5>
          <hr />
          <p class="font-weight-bold text-accent"> {{ candidate.aspiration }} </p> -->
          <!-- <button class="btn bg-main text-white font-weight-bold small">
            View More
          </button> -->
        <!-- </div>
      </div>
    </div> -->

    <div class="aspirants">
      <div class="image-area" v-for="candidate of candidates" :key="candidate.id">
		<div class="img-wrapper">
			<img :src="candidate.avatar" alt="Aspirant">
			<h3 class="font-weight-bold"> {{ candidate.name }} <br> <span class="small small-mt-0 text-orange"> {{ candidate.aspiration }} </span> </h3>
      
			<ul>
				<li><a :href="candidate.twitter"> <i class="fa fa-twitter" aria-hidden="true"></i> </a></li>
				<li><a :href="candidate.website"> <i class="fa fa-internet-explorer" aria-hidden="true"></i> </a> </li>
				<li><a :href="candidate.instagram"> <i class="fa fa-instagram" aria-hidden="true"></i> </a></li>
				<li><a :href="candidate.email"> <i class="fa fa-envelope" aria-hidden="true"></i></a></li>
				<li><a :href="candidate.facebook">  <i class="fa fa-facebook" aria-hidden="true"></i> </a></li>
			</ul>
		</div>
	</div>
    </div>
  </div>
</template>

<script>
import candidates from '@/assets/js/candidates.js'
  export default {
    data() {
      return {
        candidates: candidates,
      };
    },

    mounted() {},
  };
</script>

<style scoped>
.small-mt-0 {
	margin-top: -50px !important;
}
.image-area
{
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	position: relative;
}

.img-wrapper
{
	width: 300px;
	height: 400px;
	position: relative;
	overflow: hidden;
}

.img-wrapper:before
{
	content: '';
	position: absolute;
	top: 0;
	left: 180%;
	height: 100%;
	width: 100%;
	background: rgba(255,255,255,.3);
	z-index: 1;
	transform: skew(45deg);
	transition: .5s;
}

.img-wrapper:hover:before
{
	left: -180%;
}

.img-wrapper img
{
	height: 400px;
	width: 300px;
	filter: grayscale(100%);
	transition: 2s;
}
.img-wrapper:hover img
{
	filter: grayscale(0%);
	transform: scale(1.1);
}

.img-wrapper h3
{
	background: #224f5a;
	/* font-family: Poppins; */
	color: #fff;
	text-align: center;
	text-transform: uppercase;
	margin: 0;
	padding: 8px 0;
	position: absolute;
	bottom: 0;
	width: 100%;
	transform: perspective(400px) rotateY(90deg);
	transform-origin: right;
	transition: 1s;
}

.img-wrapper:hover h3
{
	transform: perspective(400px) rotateY(0deg);
}

.img-wrapper ul
{
	position: absolute;
	top: 0;
	left: 0;
	margin: 0;
	padding: 0;
	list-style: none;
	background: rgba(255,255,255,0);
}

.img-wrapper ul li
{
	background:#224f5a;
	height: 40px;
	width: 40px;
	text-align: center;
	line-height: 40px;
	transform: perspective(800px) rotateY(90deg);
	transition: .5s;
	transform-origin: left;
}

.img-wrapper:hover ul li
{
	transform: perspective(800px) rotateY(0deg);
}

.img-wrapper:hover ul li:nth-child(1)
{
	transition-delay: .2s;
}

.img-wrapper:hover ul li:nth-child(2)
{
	transition-delay: .6s;
}

.img-wrapper:hover ul li:nth-child(3)
{
	transition-delay: .8s;
}

.img-wrapper:hover ul li:nth-child(4)
{
	transition-delay: 1s;
}

.img-wrapper ul li a
{
	color: #ff7300;
	background: rgba(255,255,255,0);
}

.img-wrapper ul li i
{
	color: #ff7300;
	background: rgba(255,255,255,0);
}

.img-wrapper ul li i:hover
{
	color: #fff;
	background: rgba(255,255,255,0);
}
.avatar-bg {
    height: 20rem;
    width: 100%;
    background-position: top;
    background-size: cover;
  }
  hr {
    width: 3rem;
    background: #3ee987;
    height: 2px;
    margin: 1rem 0;
  }
  .aspirants {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
  }
  .aspirants div {
    width: 100%;
  }
  .small {
    font-size: 0.8rem;
  }
  @media (max-width: 990px){
    .aspirants{
      display: unset;
    }
    .aspirants div {
      margin-bottom: 30px;
    }
  }
</style>
