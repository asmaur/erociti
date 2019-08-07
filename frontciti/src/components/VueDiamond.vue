<template>
    
    
   <!-- diamond -->

    <div id="diamond-big" class="" v-show="modelos.length">

        <div class="owl-carousel owl-theme old-drag wiz-big-carousel">
           
         
            
            <diam-item v-for="modelo in modelos" :modelo="modelo" :key="modelo.id" />

            
            

            

        </div>
    </div>

   <!--  end diamond   -->
    
  




</template>

<script>

import DiamItem from '@/components/DiamItem.vue'
import JQuery from 'jquery'
let $ = JQuery
import ax from "../genapi.js"

export default {
    name: "VueDiamond",
    components:{
        DiamItem,
    },
    props:{
        cislug: String,
        cicode: String,
        category: String,
    },
    data(){
        return{
        modelos: {},
        }
    },
    created() {
        

        ax.get('subs/'+ this.cicode +'/'+ this.cislug+'/'+this.category+'/diamonds/', )
			.then(response => { this.modelos = response.data}) 

    },
    
    beforeUpdate(){
    $(document).ready(function() {
            $(".owl-carousel").owlCarousel({
                //items: 1,
                margin: 0,
                //autoHeight:true,
                nav: true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 3000,
                responsive: {
                      0: {
                            items: 1,
                            dots: true,
                        },
                        // breakpoint from 480 up
                        480: {
                            items: 1,
                            dots: true,
                        },
                        // breakpoint from 768 up
                        768: {
                            items: 1,
                            dots: true,
                        },
                        1000: {
                            items: 1,
                            dots: true,
                        },
                        1440: {
                            items: 1,
                            dots: true,
                        },
                        2560: {
                            items: 1,
                            dots: true,
                        },
                }
            });
        

     });
},
}
</script>

<style>

    .owl-dots { display: block !important; }



</style>




