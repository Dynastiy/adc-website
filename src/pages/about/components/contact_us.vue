<template>
  <div>
    <div class="p-3">
      <div class=" px-5 py-5">
        <h2 class="font-weight-bold text-darker text-center mb-4">Contact Us</h2>
        <hr class="mb-4">
        <div class="contact__content">
          <div class="text-center mb-3 shadow-lg bg-white p-3">
            <div class="icon">
              <ion-icon name="pin"></ion-icon>
            </div>
            <h4 class="text-darker">ADDRESS</h4>
            <p class=" mb-0">
              ADC Global Campus <br> and World headquarters.  <br> 4 Lusaka St, Wuse zone
              6, <br> Abuja, FCT.
            </p>
          </div>

           <div class="text-center shadow-lg mb-3 bg-white p-3">
            <div class="icon">
              <ion-icon name="mail"></ion-icon>
            </div>
            <h4 class="text-darker">EMAIL</h4>
            <p class=" mb-0">
              <a href="mailto:admin@adc.org.ng">admin@adc.org.ng</a>
            </p>
          </div>

          <div class="text-center mb-3 shadow-lg bg-white p-3">
            <div class="icon">
              <ion-icon name="call"></ion-icon>
            </div>
            <h4 class="text-darker">PHONE</h4>
            <p class=" mb-0">
              <a href="tel:+234 812 9855 556">0812 9855 556</a>
            </p>
          </div>
        </div>
      </div>
      <!-- <div class="col-md-8">
        <form>
          <div class="form-group">
            <label for="exampleFormControlInput1">Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Name"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Subject</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Subject"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button class="bg-darker text-white w-100 btn font-weight-bold">SEND</button>
        </form>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
 @import url("https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap");
 h4 {
   font-family: "Fjalla One", sans-serif;
   font-weight: bold;
   font-size: 1.2rem;
 }
 .contact__content{
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-gap: 20px
 }
label {
  font-size: 1.02rem !important;
  /* font-weight: bold; */
}
.form-control:focus {
    border: 1px solid #ced4da !important;
    box-shadow: none;
  }
  .form-control {
      border: 1px solid rgba(0, 0, 0, 0.1);
      
  }
  label, .form-control::placeholder {
      font-size: 0.8rem;
  }
  .icon {
    width: 70px;
    height: 70px;
    background: #effff6;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  .icon ion-icon {
      color: #ff7300; 
    font-size: 48px;
    /* margin-right: 10px; */
}
a {
 color: #000; 
}
a:hover {
  color: #ff7300;
  text-decoration: none;
}

@media (max-width: 990px){
  .contact__content{
   display: grid;
   grid-template-columns: auto;
   grid-gap: 20px
 }
}
    </style>
