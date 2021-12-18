<template>
   <div>
        <div>
        <simplified-nav/>
    </div>
    <div>
        <main class="content">
        <h1 class="text-center text-main font-weight-bold">Registration Form</h1>

        <form action="" class="m-auto pt-5" role="form">
            <div class="row mb-5">
                <div class="col-sm-6">
                    <input type="text" name="First Name" placeholder="First Name" class="form-control">
                </div>
                <div class="col-sm-6">
                    <input type="text" name="Last Name" placeholder="Last Name" class="form-control">
                </div>
            </div>

            <input type="tel" name="Phone Number" placeholder="Phone Number" class="form-control m-auto" ><br><br>

            <input type="email" name="Email" placeholder="Email" class="form-control m-auto" ><br><br>
            
            <select name="" id="" class="form-control m-auto" >
              <option selected class="form-control m-auto">Date of Birth</option>
            </select><br><br>

            <select name="" id="" class="form-control m-auto" >
              <option selected class="mb-5">Gender</option>
            </select><br><br>

            <input type="password" name="Password" placeholder="Password" class="form-control m-auto" ><br><br>

            <select name="" id="" class="form-control m-auto" >
              <option selected >State</option>
            </select><br><br>

            <select name="" id="" class="form-control m-auto" >
              <option selected >Local Government Area</option>
            </select><br><br>

            <input type="text" name="Ward" placeholder="Ward" class="form-control m-auto" ><br><br>

            <div class="m-auto w-100 d-flex justify-content-center">
              <img src="/images/upload 1.png" class="">
              <span class="text-muted mt-2 mr-5">Upload Image</span>
            </div>

            <div class="w-100 py-4 d-flex mb-3 justify-content-center">
              <img src="/images/preview_imgg.png" width="6%" alt="" class="ml-5 h-25">
              <span class="text-muted mt-4">Preview Copy</span>
            </div>

            <input type="button" value="SUBMIT" class="form-control m-auto text-light bg-main" >

        </form>
    </main>
    </div>
   </div>
</template>

<script>
import SimplifiedNav from '../../components/simplified_nav.vue'
export default {
    components:{SimplifiedNav },
    data(){
        return{

      
         }
    }
}
</script>