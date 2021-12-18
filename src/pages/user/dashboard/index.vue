<template>
    <div class="dashboard">
        <sidebar/>
        <router-view/>
    </div>
</template>
<script>
import sidebar from '../dashboard/static/sidebar.vue'
export default {
    components:{sidebar}
}
</script>