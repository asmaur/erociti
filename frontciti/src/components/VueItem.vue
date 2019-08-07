<template>

    <div class="col-sm-12 col-md-6 col-lg-4">
        <router-link :to="'/'+modelo.perfil.city.state.code+'/'+modelo.perfil.city.slug+'/'+modelo.perfil.category+'/'+modelo.perfil.slug+'/'+modelo.perfil.code+'/'" class="wiz-card" style="margin-top: 1rem;">
            <img class="img-fluid" :src="img_url+modelo.perfil.capa" alt="">

            <div class="wiz-header d-flex justify-content-between">
                <div class="wiz-diamond" style="position: absolute; top: 2px;" v-show="isDamond">
                    <button class="btn btn-warning">
                       <font-awesome-icon :icon="['far', 'gem']" />
                       
                        <!-- <i class="far fa-gem fa-x"></i> -->
                    </button>
                </div>
                <div class="wiz-diamond" style="position: absolute; top: 2.5rem;" v-show="isDestak">
                    <button class="btn btn-warning">
                       <font-awesome-icon :icon="['fas', 'feather-alt']" />
                        <!-- <i class="fas fa-feather-alt"></i> -->
                    </button>
                </div>
                <div class="wiz-vip" style="position: absolute; top: 2px; right: 0px;" v-show="modelo.perfil.is_vip">
                    <button class="btn btn-danger">
                       <font-awesome-icon :icon="['far', 'star']" />
                        <!-- <i class="far fa-star"></i> --> <span>VIP</span>
                    </button>
                </div>

                <div class="wiz-vip" style="position: absolute; top: 2.5rem; right: 0px;" v-show="isTop">
                    <button class="btn btn-danger">
                       <font-awesome-icon :icon="['fab', 'studiovinari']" />
                       <!-- <i class="fab fa-studiovinari"></i> --> <span>TOP</span>
                    </button>
                </div>

            </div>




            <div class="wiz-footer">
                <h4>{{modelo.perfil.nome}} {{modelo.perfil.sobrenome}}</h4>
                <em>Idade: {{modelo.perfil.idade}} anos</em> <br>
                <em>{{modelo.perfil.city.name}} - <b style="text-transform: uppercase;">{{modelo.perfil.city.state.code}},</b> Brasil</em>
            </div>
        </router-link>
    </div>

</template>


<script>
    export default {
        name: "VueItem",

        props: {
            modelo: Object,
        },
        data(){
        return{
            img_url: 'https://api.erociti.com',
        }
    },
        computed: {
            isDamond: function() {
                if (this.modelo.types == 3) {
                    return true;
                } else {
                    return false;
                }
            },
            
            isDestak: function() {
                if (this.modelo.types == 2) {
                    return true;
                } else {
                    return false;
                }
            },
            isTop: function() {
                if (this.modelo.types == 1) {
                    return true;
                } else {
                    return false;
                }
            },
        },

    }
</script>