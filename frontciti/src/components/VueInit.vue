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
                        <p>Este website contém nudez, conteúdo sexual explícito e linguagem adulta. Ele deve ser acessado apenas por pessoas que tenham idade legal no local físico de onde você está acessando o site. Ao acessar este site, você está confirmando para nós que é maior de idade e concorda com nossos Termos e Condições. Qualquer uso não autorizado deste site pode violar leis estaduais, federais e/ou estrangeiras.</p>

                        <p>A EroCiti não é responsável por ações cometidas dentro ou fora da nossa página, qualquer ocorrência fica por completa responsabilidade do indivíduo ou grupo de indivíduo, dos pais e/ou tutores legais.</p>

                        <p>A EroCiti tem uma política de tolerância zero em relação ao tráfico de seres humanos, prostituição e qualquer outra conduta ilegal. Nós cooperamos com a aplicação da lei, de acordo com o processo apropriado, como uma intimação, na investigação de atividades criminosas. Atividades que violam nossa política de tolerância zero podem resultar em uma referência à aplicação da lei. Você concorda e confirma não ter a intenção de usar este site em violação das políticas da EroCiti ou de qualquer lei federal, estadual ou municipal, e concordo em denunciar violações às autoridades competentes.</p>

                        <p class="text-center"> <strong>Eu li e Concordo com os termos estabelecidos</strong> </p>

                        <div class="alert alert-danger text-center" role="alert" style="font-size: 1.2rem;" v-show="visualise">
                            Você não pode visualizar o conteúdo do site.
                        </div>
                        
                        <div class="alert alert-info text-center" role="alert" style="font-size: 1.3rem;">
                            Este site usa cookies. Ao continuar no site, você concorda com o uso de cookies.
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