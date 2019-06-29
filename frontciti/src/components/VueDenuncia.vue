<template>

    <div>

        <!-- denuncia -->

        <div id="denuncia">

            <div class="container">
                <div class="row">
                    <div class="col-md-8 offset-md-2 text-center">
                        <div>
                            <a href="" data-toggle="modal" data-target="#more-denuncia">
                               <font-awesome-icon :icon="['fas', 'exclamation-circle']" />
                               <!-- <i class="fas fa-exclamation-circle"></i> --> Denunciar fotos fakes
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <div class="modal fade" id="more-denuncia" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Denunciar Fotos Fakes</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form @submit.prevent="denunciar">
                            <div class="modal-body">

                                <p>askjhfjshf
                                    asklfkshlfhlshfls
                                </p>
                                <p>
                                    <small>
                                        Importante:
                                    </small>
                                </p>

                                <div class="form-group">
                                    <label for="link-to-evidence" class="col-form-label">Link para a prova de mal uso:</label>
                                    <input type="url" class="form-control" id="link-to-evidence" placeholder="http://" v-model="link" required>
                                </div>


                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary mr-auto" data-dismiss="modal">Fechar</button>
                                <button type="submit" class="btn btn-primary">Enviar Denuncia</button>
                            </div>
                        </form>


                    </div>
                </div>
            </div>


        </div>

        <!-- end denuncia -->





    </div>


</template>


<script>
    
    import ax from "../genapi.js"
    
    
    export default {
        name: "VueDenuncia",
        
        props:{
            perid: null,
        },
        data(){
            return{
                link: null,
            }
        },
        methods:{
            denunciar(){
                ax.post("denuncia/denun/", {"perid": this.perid, "link": this.link})
                    .then(response => { this.$noty.success(response.data.message) })
            },
        },
        
    }
</script>










