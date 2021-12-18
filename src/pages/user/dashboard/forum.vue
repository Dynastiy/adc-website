<template>
    <div class="dash">
        <h5 class="font-weight-bold text-main mb-5">Forum</h5>

        <div>
            <div class="below_30 shadow-sm mb-3 p-3 bg-white" v-for="(item, i) in 4" :key="i">
                <div class="d-flex align-items-center justify-content-between mb-3">
                   <div class="d-flex align-items-center">
                        <img src="https://cdn1.iconfinder.com/data/icons/interface-elements-vii-1/512/Person-256.png" alt="" width="25" height="25" class="mr-3 rounded-circle">
                        <h5 class="font-weight-bold text-main m-0">Peterson Ekpe</h5>
                   </div>
                    <p class="text-muted small m-0">12 December, 2021</p>
                </div>
                <p class="small text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut non ullam, similique, recusandae inventore officiis soluta iste amet ipsum odio quibusdam possimus corporis aperiam dignissimos nobis ad consectetur quidem harum.
                Officiis nam ipsa necessitatibus? Tempore quasi asperiores, ratione quia sit iure quaerat. Dolorem explicabo facere repellendus pariatur quo magnam. Obcaecati quidem fugit alias rerum voluptas quod quia modi autem laboriosam.</p>
                <hr>
                <div class="d-flex">
                    <ion-icon name="thumbs-up"></ion-icon>
                    <p class="text-muted small font-weight-bold ml-2">10 Likes</p>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>