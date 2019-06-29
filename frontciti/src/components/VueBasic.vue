<template>
    
     <div  v-show="modelos.length">

        <div class="container">
            <div class="row">
                <div class="col-md-6 offset-md-3 text-center">
                  
                   <hr style="height: 1rem; color:#000;">
                    <h4 class="display-6" style="margin: .5rem;">Acompanhantes</h4>
                    <hr style="height: 1rem; color:#000;">
                </div>
            </div>

            <div class="row">

                <vue-item v-for="modelo in modelos" :modelo="modelo" :key="modelo.id" />





            </div>



        </div>
        
        
    </div>
    
    
</template>


<script>
    
    import ax from "../genapi.js"
    
    import VueItem from '@/components/VueItem.vue'

    export default {
        name: "VueBasic",
        components: {
            VueItem,
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
        methods:{
            
        },
        mounted(){
            ax.get('subs/'+ this.cicode +'/'+ this.cislug+'/'+this.category+'/basic/', )
			.then(response => { this.modelos = response.data})
        },
    }
</script>






