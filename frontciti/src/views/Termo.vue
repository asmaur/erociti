<template>
 
     <div>
     <in-nav />
     <vue-termo />
  
    </div>
    
</template>



<script>
    
    import InNav from '@/components/InNav.vue'
    import VueTermo from '@/components/VueTermo.vue'
    
    export default{
        name: "Termo",
        
        components:{
            InNav,
            VueTermo,
        }
    }

</script>