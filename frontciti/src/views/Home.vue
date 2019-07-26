<template>

    <div>

        <in-nav />

        <vue-local />

        <vue-home />
        
    </div>


</template>

<script>
    // @ is an alias to /src
    import InNav from '@/components/InNav.vue'
    import VueLocal from '@/components/VueLocal.vue'
    import VueHome from '@/components/VueHome.vue'
    

    export default {
        name: 'home',
        components: {
            InNav,
            VueLocal,
            VueHome,
        },
       
    }
</script>