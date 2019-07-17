<template>

    <div class="item ">

        <router-link :to="'/'+modelo.perfil.city.state.code+'/'+modelo.perfil.city.slug+'/'+modelo.perfil.category+'/'+modelo.perfil.slug+'/'+modelo.perfil.code+'/'" class="wiz-card" style="margin: 1rem;">
            <img class="img-fluid" :src="img_url+modelo.perfil.capa" alt="">

            <div class="wiz-header d-flex justify-content-between">
                <div class="wiz-diamond" style="position: absolute; top: 2px;" v-show="isDamond">
                    <button class="btn btn-warning">
                       <font-awesome-icon :icon="['far', 'gem']" />
                        
                    </button>
                </div>
                <div class="wiz-diamond" style="position: absolute; top: 2.5rem;" v-show="isDestak">
                    <button class="btn btn-warning">
                       <font-awesome-icon :icon="['fas', 'feather-alt']" />
                        
                    </button>
                </div>
                <div class="wiz-vip" style="position: absolute; top: 2px; right: 0px;" v-show="modelo.perfil.is_vip">
                    <button class="btn btn-danger">
                       <font-awesome-icon :icon="['far', 'star']" />
                        <span>VIP</span>
                    </button>
                </div>

                <div class="wiz-vip" style="position: absolute; top: 2.5rem; right: 0px;" v-show="isTop">
                    <button class="btn btn-danger">
                       <font-awesome-icon :icon="['fab', 'studiovinari']" />
                        <span>TOP</span>
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
        name: "MiniDiamond",
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
                if (this.modelo.membership.membership_type == "Diamond") {
                    return true;
                } else {
                    return false;
                }
            },
            isTop: function() {
                if (this.modelo.membership.membership_type == "Top") {
                    return true;
                } else {
                    return false;
                }
            },
            isDestak: function() {
                if (this.modelo.membership.membership_type == "Destaque") {
                    return true;
                } else {
                    return false;
                }
            },
        },
    }
</script>