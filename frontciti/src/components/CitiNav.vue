<template>

   
        <!-- navbar --->
        <header class="header" style="padding-top:.5rem;">
            <nav class="navbar navbar-expand-lg">
                <router-link :to="'/'+this.$route.params.cicode +'/'+this.$route.params.cislug+'/'+'mulheres/'" class="navbar-brand" v-if="this.$route.params.cicode" >EroCiti</router-link>
                <router-link to="/" class="navbar-brand" v-else>EroCiti</router-link>
                <!--  <a class="nav-link" href="#" target="_blank" style="margin-left: .4rem;">
                            <i class="far fa-plus-square fa-2x"></i>
                        </a> -->
                <button class="wiz-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item dropdown" style="margin-left: 1.5rem;">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {{cat}}
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <router-link class="dropdown-item" :to="'/'+this.$route.params.cicode+'/'+this.$route.params.cislug+'/'+'mulheres/'">Mulheres</router-link>
                                <div class="dropdown-divider"></div>
                                <router-link class="dropdown-item" :to="'/'+this.$route.params.cicode +'/'+this.$route.params.cislug+'/'+'homens/'">Homens</router-link>
                                <div class="dropdown-divider"></div>
                                <router-link class="dropdown-item" :to="'/'+this.$route.params.cicode +'/'+this.$route.params.cislug+'/'+'transex/'">Transex</router-link>
                            </div>
                        </li>
                    </ul>


                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <search-item />
                        </li>

                        <li class="nav-item text-center" style="margin-left: 1.5rem; border: 2px solid #fff; margin-top: .2rem;">
                            <a href="http://www.ads.erociti.com" target="_blank" class="nav-link">Anuncie !</a>
                        </li>

                    </ul>



                </div>
            </nav>
        </header>

        <!-- end navbar -->







</template>


<script>
    import SearchItem from '@/components/SearchItem.vue'

    export default {

        name: "CitiNav",
        computed:{
            cat(){
                return this.$route.params.category;
            }
        },

        components: {
            SearchItem,
        },



    }
</script>