<template>


    <div id="related" v-show="modelos.length">

        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2 text-center">
                    <h3 class="display-6">Seleção exclusiva para você </h3>
                </div>
            </div>
        </div>

        <div class="owl-carousel owl-theme">

            <mini-diamond  v-for="modelo in modelos" :modelo="modelo" :key="modelo.id" /> 

        </div>




    </div>

</template>


<script>
    import MiniDiamond from '@/components/MiniDiamond.vue'
    import ax from "../genapi.js"
    import JQuery from 'jquery'
    let $ = JQuery


    export default {
        name: "VueRelated",
        components: {
            MiniDiamond,
        },
        computed: {
            cicode: function() {
                return this.$route.params.cicode
            },
            cislug: function() {
                return this.$route.params.cislug
            },
            category: function(){ return this.$route.params.category; },
        },
      
        data() {
            return {
                modelos: {},
            }
        },

        methods: {
            getData() {
                ax.get('subs/' + this.cicode + '/' + this.cislug + '/' + this.category + '/diamonds/', )
                    .then(response => {
                        this.modelos = response.data
                    })
            },
        },
        created() {       
           
            this.getData();
        },
        
        beforeUpdate(){
             $(document).ready(function() {  
                
                $('.owl-carousel').owlCarousel({
                    loop: true,
                    margin: 10,
                    nav: true,
                    responsive: {
                        0: {
                            items: 1,
                            nav: true,
                            loop: true,
                            autoplay: true,
                            autoplayTimeout: 2000,
                        },
                        480: {
                            items: 2,
                            nav: true,
                            loop: true,
                            autoplay: true,
                            autoplayTimeout: 2000,
                        },
                        768: {
                            items: 3,
                            nav: true,
                            loop: true,
                            autoplay: true,
                            autoplayTimeout: 2000,
                        },
                        1024: {
                            items: 4,
                            nav: true,
                            loop: true,
                            autoplay: true,
                            autoplayTimeout: 2000,
                        }
                    }
                });
            });
            
        },
       
    }
</script>


<style>

    .owl-dots { display: block !important; }



</style>