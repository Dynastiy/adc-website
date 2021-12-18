<template>
  <div>
    <div class="row">
      <div class="col-md-4 shadow-sm px-5 py-5">
        <h2 class="font-weight-bold text-main">Contact Us</h2>
        <h6 class="text-main mb-3">We'd love to hear from you</h6>
        <div>
          <div class="d-flex align-items-center mb-3">
            <ion-icon size="large" name="pin"></ion-icon>
            <p class="small mb-0 ml-2">
              ADC Global Campus and World headquarters. 4 Lusaka st, Wuse zone
              6, Abuja, FCT.
            </p>
          </div>

          <div class="d-flex align-items-center mb-3">
            <ion-icon name="call"></ion-icon>
            <p class="small mb-0 ml-2">
              +234 812 9855 556
            </p>
          </div>

          <div class="d-flex align-items-center">
            <ion-icon name="mail"></ion-icon>
            <p class="small mb-0 ml-2">
              admin@adc.org.ng
            </p>
          </div>

          <p></p>
        </div>
      </div>
      <div class="col-md-8">
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
          <button class="bg-main  text-white w-100 btn">SEND</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  ion-icon {
      color: #00a54f  !important; 
    /* font-size: 16px; */
    /* margin-right: 10px; */
}
    </style>
