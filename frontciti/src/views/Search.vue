<template>

    <div>

        <citi-nav />


        <div id="tops">

            <div class="container">
                <div class="row">
                    <div class="col-md-6 offset-md-3 text-center">
                        <h6 class="display-6" style="margin-top: 7rem; text-transform: uppercase;">Resultado da Pesquisa " {{this.$route.query.q}} "</h6>
                    </div>
                </div>

                <div class="row">

                   <!-- <div class="col-sm-4">
                        <a href="item-profil.html" class="wiz-card">
                            <img class="img-fluid" src="img/gallery-list-11.jpg" alt="">

                            <div class="wiz-header d-flex justify-content-between">
                                <div class="wiz-diamond" style="position: absolute; top: 2px;">
                                    <button class="btn btn-warning">
                                        <i class="far fa-gem fa-x"></i>
                                    </button>
                                </div>
                                <div class="wiz-vip" style="position: absolute; top: 2px; right: 0px;">
                                    <button class="btn btn-danger">
                                        <i class="far fa-star"></i> <span>VIP</span>
                                    </button>
                                </div>
                            </div>




                            <div class="wiz-footer">
                                <h4>Ivy Salazar</h4>
                                <em>Age: 20 anos</em> <br>
                                <em>Porto Alegre-RS Brasil</em>
                            </div>
                        </a>
                    </div> -->
                    
                    <p v-show="!results.length"> Nenhum resultado encontrado ..!</p>
                    
                    
                    <vue-item v-for="modelo in results" :modelo="modelo" :key="modelo.id" />
                    
                    
                    

                </div>
            </div>



        </div>
    </div>


</template>


<script>
    import CitiNav from '@/components/CitiNav.vue'
    import VueItem from '@/components/VueItem.vue'
    import ax from "../genapi.js"

    export default {
        name: "Search",

        components: {
            CitiNav,
            VueItem,
        },
        data(){
            return{
                results: {},
            }
        },
        created(){
            ax.get("sr/search/", {params: {q: this.$route.query.q, cq: this.$route.query.cq}})
            .then( response => { this.results = response.data })
        },
    }
</script>