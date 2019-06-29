<template>
  <div id="app">
    
    <router-view :key="$route.fullPath" />
    <Footer />
  </div>
</template>

<style>

</style>
<script>
    
        import Footer from '@/components/Footer.vue'

    
    export default{
        name: "App",
        
        components:{
            Footer,
        }
    }

</script>
