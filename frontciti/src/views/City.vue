<template>

    <div>

        <vue-diamond :cicode="cicode" :cislug="cislug" :category="category" />

        <citi-nav :cicode="cicode" :cislug="cislug" :category="category" />

        <vue-local :cicode="cicode" :cislug="cislug" :category="category" />



        <vue-mid-diamond :cicode="cicode" :cislug="cislug" :category="category" />
        

        <vue-destak :cicode="cicode" :cislug="cislug" :category="category" />


        <vue-top :cicode="cicode" :cislug="cislug" :category="category" />



        <div id="tops">

            <vue-basic :cicode="cicode" :cislug="cislug" :category="category" />

        </div>



    </div>


</template>


<script>
    import CitiNav from '@/components/CitiNav.vue'
    import VueDiamond from '@/components/VueDiamond.vue'
    import VueLocal from '@/components/VueLocal.vue'

    import VueMidDiamond from '@/components/VueMidDiamond.vue'
    import VueDestak from '@/components/VueDestak.vue'
    import VueTop from '@/components/VueTop.vue'
    import VueBasic from '@/components/VueBasic.vue'
    


    export default {
        name: "City",
        components: {
            CitiNav,
            VueDiamond,
            VueLocal,
            VueMidDiamond,
            VueDestak,
            VueTop,
            VueBasic,
        },
        computed: {
            cicode: function() {
                return this.$route.params.cicode;
            },
            cislug: function() {
                return this.$route.params.cislug;
            },
            category: function() {
                return this.$route.params.category;
            }
        }
    }
</script>