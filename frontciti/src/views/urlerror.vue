<template>
    
    <div>
        
        <in-nav />
        <not-found />
        
    </div>
    
</template>


<script>
    
    import InNav from '@/components/InNav.vue'
    import NotFound from '@/components/NotFound.vue'
    
    
    export default{
        name: "urlerror",
        components:{
            InNav,
            NotFound,
        },
    }

</script>