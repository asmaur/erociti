<template>
    
    <div>
        
        <citi-nav />
        <vue-profile />
        
        
        
    </div>
    
</template>


<script>
    
    import CitiNav from '@/components/CitiNav.vue'
    import VueProfile from '@/components/VueProfile.vue'
    
    export default{
        name: "Profile",
        components:{
            CitiNav,
            VueProfile,
        }
    }


</script>