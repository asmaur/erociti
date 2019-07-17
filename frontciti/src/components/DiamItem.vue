<template>
    <div class="item ">
                <div class="wiz-overlay">

                    <div class="container">
                        <div class="row">

                            <div class="col-md-8 offset-md-2 text-center">
                                <div class="wiz-diamond-content">
                                    <div class="wiz-diamond">
                                        <button class="btn btn-warning">
                                           <font-awesome-icon :icon="['far', 'gem']" />
                                            
                                        </button>
                                    </div>
                                    <div class="wiz-vip" v-show="modelo.perfil.is_vip">
                                        <button class="btn btn-danger">
                                           <font-awesome-icon :icon="['far', 'star']" />
                                             <span>VIP</span>
                                        </button>
                                    </div>

                                    <div class="wiz-item-info">
                                        <h1>{{modelo.perfil.nome}} {{modelo.perfil.sobrenome}}</h1>
                                        <em>idade: {{modelo.perfil.idade}} anos</em> <br>
                                        <em>Cidade:  {{modelo.perfil.city.name}} -  <b style="text-transform: uppercase;">{{modelo.perfil.city.state.code}}</b> </em> <br>

                                    </div>
                                    <div class="wiz-item-description">
                                        <p style="text-transform: uppercase;">
                                            {{modelo.perfil.description | truncate(150) }}
                                        </p>
                                    </div>

                                    <div class="wiz-item-contact">
                                       <a :href="'tel:+'+modelo.perfil.phone" target="_blank">
                                           <font-awesome-icon :icon="['fas', 'phone']" size="3x" />                                            
                                        </a>
                                        <a :href="'https://api.whatsapp.com/send?phone='+modelo.perfil.phone+'&text=Ol%C3%A1%20'+modelo.perfil.nome+'%20'+modelo.perfil.sobrenome+'%20Encontrei%20voc%C3%AA%20no%20EroCiti.com.'" target="_blank">
                                           <font-awesome-icon :icon="['fab', 'whatsapp']" size="3x" />
                                            
                                        </a>

                                       <!-- <a href="https://t.me/ivy-salazar/text='Hello World'" target="_blank">
                                            <i class="fab fa-telegram fa-3x"></i>
                                        </a> -->
                                        <a href="https://www.instagram.com/trexengenharia/" target="_blank" v-show="modelo.perfil.twitter">
                                           <font-awesome-icon :icon="['fab', 'twitter']" size="3x" />
                                            
                                        </a>
                                        <a href="https://www.instagram.com/trexengenharia/" target="_blank" v-show="modelo.perfil.instagram">
                                           <font-awesome-icon :icon="['fab', 'instagram']" size="3x" />
                                           
                                        </a>
                                    </div>

                                    <router-link :to="'/'+modelo.perfil.city.state.code +'/'+modelo.perfil.city.slug+'/'+modelo.perfil.category+'/'+modelo.perfil.slug+'/'+modelo.perfil.code+'/'" class="btn btn-primary btn-block view-profile" style="margin-top: .3rem;">Ver perfil</router-link>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <img :src="img_url+modelo.perfil.capa" class="img-fluid" alt="">

            </div>

   




</template>

<script>
export default {
    name: "DiamItem",
    props:{
        modelo: Object,
    },
    data(){
        return{
            img_url: 'https://api.erociti.com',
        }
    },
    filters: {
        truncate: function(value, limit) {
            if (value.length > limit) {
                value = value.substring(0, (limit - 3)) + '...';
            }

            return value
        }

    },
}
</script>

<style>

@import '../assets/css/wizini.css';


</style>

