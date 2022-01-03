<template>
    <div>
        <router-view></router-view>
        <app-footer/>
    </div>
</template>

<script>
import appFooter from "@/components/appFooter";
export default {
    components:{
        appFooter
    }
    
}
</script>

<style>

</style>