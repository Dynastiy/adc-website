<template>
  <div class="content">
    <!-- <div class="carousel-section py-5">
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
      </div> -->
  
  <div class="">
<section class="gallery">
  <div class="gallery__item">
    <input type="radio" id="img-1" checked name="gallery" class="gallery__selector"/>
    <img class="gallery__img" src="https://picsum.photos/id/1015/600/400.jpg" alt=""/>
    <label for="img-1" class="gallery__thumb"><img src="https://picsum.photos/id/1015/150/100.jpg" alt=""/></label>
  </div>
  <div class="gallery__item">
    <input type="radio" id="img-2" name="gallery" class="gallery__selector"/>
    <img class="gallery__img" src="https://picsum.photos/id/1039/600/400.jpg" alt=""/>
    <label for="img-2" class="gallery__thumb"><img src="https://picsum.photos/id/1039/150/100.jpg" alt=""/></label>
  </div>
  <div class="gallery__item">
    <input type="radio" id="img-3" name="gallery" class="gallery__selector"/>
    <img class="gallery__img" src="https://picsum.photos/id/1057/600/400.jpg" alt=""/>
    <label for="img-3" class="gallery__thumb"><img src="https://picsum.photos/id/1057/150/100.jpg" alt=""/></label>
  </div>
  <div class="gallery__item">
    <input type="radio" id="img-4" name="gallery" class="gallery__selector"/>
    <img class="gallery__img" src="https://picsum.photos/id/106/600/400.jpg" alt=""/>
    <label for="img-4" class="gallery__thumb"><img src="https://picsum.photos/id/106/150/100.jpg" alt=""/></label>
  </div>
</section>
  </div>
  </div>
</template>

<script>
export default {
  
    }
    </script>

    <style scoped>
    /* .carousel-3d-slide .slide{
      height: 100% !important;
      width: 100% !important;
    } */
    /* img{
      object-fit: cover;
    } */

    img .gallery__img {
      width: 50rem;
    }
img {
  max-width: 100%;
  vertical-align: top;
}

.gallery {
  display: flex;
  margin: 10px auto;
  max-width: 600px;
  position: relative;
  /* padding-top: 66.6666666667%; */
}
@media screen and (min-width: 600px) {
  .gallery {
    padding-top: 400px;
  }
}
.gallery__img {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
.gallery__thumb {
  padding-top: 6px;
  margin: 6px;
  display: block;
}
.gallery__selector {
  position: absolute;
  opacity: 0;
  visibility: hidden;
}
.gallery__selector:checked + .gallery__img {
  opacity: 1;
}
.gallery__selector:checked ~ .gallery__thumb > img {
  box-shadow: 0 0 0 3px #0be2f6;
}
    </style>