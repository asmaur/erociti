<template>
    <div>
        
        <!-- local data -->

    <div id="local" class="d-flex align-items-center justify-content-center">

        <div class="container">
            <div class="row justify-content-around text-center">
                <div class="col-md-3">
                    <h4 style="margin-top: .5rem;">Localização</h4>
                </div>
                <div class="col-md-4">
                    <button class="btn btn-primary btn-block" data-toggle="modal" data-target="#localize">
                        <i class="fas fa-map-marker-alt"></i> 
                        <b v-if="current">  {{current.name}}</b>
                        <b v-else > Escolhe sua cidade </b>
                    </button>
                </div>

            </div>
            <hr class="wiz-divider">
        </div>

    </div>


    <!-- Modal -->
    <div class="modal fade" id="localize" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Escolhe sua localização</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" style="min-height: 50vh;">

                    <div class="container">

                        <div class="row">

                            <div class="col-md-3" v-for="local in locais" :key="local.id">

                                <div class="btn-group" role="group" aria-label="Button group with nested dropdown">

                                    <div class="btn-group" role="group" style="margin: .5rem;">
                                        <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {{local.name}}
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                            <router-link class="dropdown-item"  :to="'/'+local.code+'/'+city.slug+'/mulheres'" v-for="city in local.cities" :key="city.id" data-dismiss="modal" data-backdrop="false">{{city.name}}</router-link>
                                           <!-- <a class="dropdown-item" v-bind:href="'/'+local.code +'/'+ city.slug+'/'" v-for="city in local.cities">{{city.name}}</a> -->
                                            
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>

                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                </div>
            </div>
        </div>
    </div>


    <!-- end local -->




    </div>
</template>


<script>
    
    import ax from "../genapi.js"
    
    
    export default {
        name: "Vuelocal",
        data(){
            return{
                locais: {},
                current: {},
            }
        },
        mounted() {
            ax.get('state/all/', )
                .then(response => {
                    this.locais = response.data
                });
            ax.get('state/'+this.$route.params.cicode+'/'+this.$route.params.cislug+'/', )
			.then(response => { this.current = response.data[0]});
        
        },
        
        
        
        
    }
</script>