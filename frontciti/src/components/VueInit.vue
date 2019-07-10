<template>

    <div>
        
        <div id="tops"></div>


        <div class="modal" tabindex="-1" role="dialog" id="init">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Aviso legal</h5>

                    </div>
                    <div class="modal-body">
                        <p>Este site apresenta conteúdo voltado exclusivamente para o público adulto. Ao acessar você esta confirmando que tem <strong>18 anos ou mais</strong>.</p>

                        <p>A amazura não é responsável por ações cometidas dentro ou fora da nossa página, qualquer ocorrência fica por compleata responsabilidade do individuo ou grupo de individuo, dos pais e/ou tutores legais.</p>

                        <p>Todas as fotografias são protegidas pela lei de direitos autorais. Não oferecemos serviços de natureza sexuais ou implícitos. Favor não insistir.</p>

                        <p class="text-center"> <strong>Eu li e Concordo com os termos estabelecidos</strong> </p>

                        <div class="alert alert-danger text-center" role="alert" style="font-size: 1.2rem;" v-show="visualise">
                            Você não pode visualizar o conteúdo do site.
                        </div>
                        
                        <div class="alert alert-info text-center" role="alert" style="font-size: 1.3rem;">
                            Você é maior de idade?
                        </div>


                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger mr-auto" id="sair" @click="menor">Não</button>
                        <button type="submit" class="btn btn-warning" id="enter" @click="setCookie">Sou maior de idade</button>
                    </div>
                </div>
            </div>
        </div>

    </div>




</template>


<script>
    
    import $ from "jquery";
    
    export default {
        name: "VueInit",
        
        data(){
            return{
                visualise: false,
            }
        },

        methods: {
            menor(){
                this.visualise = true
            },
            setCookie(){
                
                this.$cookies.set("erociti_access_token", "true", '1y');
                //console.log(this.$cookies.get("erociti_access_token"));
                this.$router.push({name: "home"})
                window.location.reload()
            },
            checkCookie(){},
        },

        mounted() {
            $('#init').modal({
            backdrop: 'static',
            keyboard: false
        });
        }
    }
</script>