<template>
    
    
    <div id="tops">

            <div class="container">
                <div class="row">
                    <div class="col-md-6 offset-md-3 text-center">
                        <h4 class="display-6">Nossa Seleção para você</h4>
                    </div>
                </div>

                <div class="row">

                    <vue-item v-for="modelo in modelos" :modelo="modelo" :key="modelo.id" />

                </div>

            </div>

        </div>
    
    
</template>


<script>
    
    import VueItem from '@/components/VueItem.vue'
    import ax from "../genapi.js"
    
    export default{
        name: "VueHome",
        
        components: {
            VueItem,
        },
        
         data() {
            return {
                modelos: {},
            }
        },
        methods: {
            getData() {
                ax.get("subs/general/")
                    .then(response => {
                        this.modelos = response.data
                    })
            },
        },
        created() {
            this.getData();
        },
        
    }

</script>