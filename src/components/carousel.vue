<template>
  <div>
    <div class="container">
      <div class="carousel-new">
        <div class="carousel__face"></div>
        <div class="carousel__face"></div>
        <div class="carousel__face"></div>
        <div class="carousel__face"></div>
        <div class="carousel__face"></div>
        <div class="carousel__face"></div>
        <div class="carousel__face"></div>
        <div class="carousel__face"></div>
        <div class="carousel__face"></div>
      </div>
    </div>
  </div>
</template>

<style>
  .container {
    position: relative;
    width: 280px;
    margin: 100px auto 0 auto;
    perspective: 1000px;
  }

  .carousel-new {
    position: absolute;
    bottom: 320px;
    width: 100%;
    height: 100%;
    text-align: center;
    transform-style: preserve-3d;
    animation: rotate360 120s infinite forwards linear;
  }
  .carousel__face {
    position: absolute;
    width: 300px;
    height: 187px;
    top: 300px;
    left: 10px;
    right: 10px;
    background-size: cover;
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);
    display: flex;
  }

  span {
    margin: auto;
    font-size: 2rem;
  }

  .carousel__face:nth-child(1) {
    background-image: url("../assets/img/gallery/1.jpeg");
    transform: rotateY(0deg) translateZ(430px);
  }
  .carousel__face:nth-child(2) {
    background-image: url("../assets/img/gallery/2.jpeg");
    transform: rotateY(40deg) translateZ(430px);
  }
  .carousel__face:nth-child(3) {
    background-image: url("../assets/img/gallery/3.jpeg");
    transform: rotateY(80deg) translateZ(430px);
  }
  .carousel__face:nth-child(4) {
    background-image: url("../assets/img/gallery/4.jpeg");
    transform: rotateY(120deg) translateZ(430px);
  }
  .carousel__face:nth-child(5) {
    background-image: url("../assets/img/gallery/5.jpeg");
    transform: rotateY(160deg) translateZ(430px);
  }
  .carousel__face:nth-child(6) {
    background-image: url("../assets/img/gallery/6.jpeg");
    transform: rotateY(200deg) translateZ(430px);
  }
  .carousel__face:nth-child(7) {
    background-image: url("../assets/img/gallery/7.jpeg");
    transform: rotateY(240deg) translateZ(430px);
  }
  .carousel__face:nth-child(8) {
    background-image: url("../assets/img/gallery/8.jpeg");
    transform: rotateY(280deg) translateZ(430px);
  }
  .carousel__face:nth-child(9) {
    background-image: url("../assets/img/gallery/9.jpeg");
    transform: rotateY(320deg) translateZ(430px);
  }

  @keyframes rotate360 {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(-360deg);
    }
  }
</style>
