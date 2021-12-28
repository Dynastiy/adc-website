<template>
  <div class="content">
    <div class="carousel-section py-5">
        <client-only>
          <carousel-3d
            :perspective="0"
            :controls-visible="true"
            :autoplay="true"
            :autoplay-timeout="3000"
            :display="7"
          >
            <slide class="slide" :index="0">
                <img src="@/assets/img/gallery/2.jpeg" width="100%" height="100%" class="slide_img" />
            </slide>
            <slide class="slide" :index="1">
              <img src="@/assets/img/gallery/5.jpeg" width="100%" height="100%" class="slide_img" />
            </slide>
            <slide class="slide" :index="2">
              <img src="@/assets/img/gallery/8.jpeg" width="100%" height="100%" class="slide_img" />
            </slide>
            <slide class="slide" :index="3">
              <img src="@/assets/img/gallery/3.jpeg" width="100%" height="100%" class="slide_img" />
            </slide>
            <slide class="slide" :index="4">
              <img src="@/assets/img/gallery/1.jpeg" width="100%" height="100%" class="slide_img" />
            </slide>
            <slide class="slide" :index="5">
              <img src="@/assets/img/gallery/12.jpeg" width="100%" height="100%" class="slide_img" />
            </slide>
            <slide class="slide" :index="6">
             <img src="@/assets/img/gallery/13.jpeg" width="100%" height="100%" class="slide_img" />
            </slide>
          </carousel-3d>
        </client-only>
      </div>
  </div>
</template>

<script>
export default {
  
    }
    </script>

    <style scoped>
    .carousel-3d-slide .slide{
      height: 100% !important;
      width: 100% !important;
    }
    img{
      object-fit: cover;
    }
    </style>