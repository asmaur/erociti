<template>
    
     <div id="footer" style="margin-top: 4rem;">

        <div class="container">
            <div class="row">

                <div class="col-md-4 text-left">
                    <p>Legal</p>
                    <ul>
                        <li> <router-link to="/privacidade" >Privacidade</router-link> </li>
                        <li> <router-link to="/termo-de-uso" >Termos de Uso e Condições</router-link> </li>
                    </ul>
                </div>

                <div class="col-md-4 text-center">
                    <p>Social & contact</p>

                  <!--  <div class="wiz-contact">
                        <a href="https://api.whatsapp.com/send?phone=5551991649141&text=Ol%C3%A1+TREX+Engenharia%2C+quero+conversar+sobre+um+projeto." target="_blank">
                            <i class="fab fa-whatsapp fa-3x"></i>
                        </a>

                        <a href="https://t.me/Saqqi_Kraft_Paper_Bags/text='Hello World'" target="_blank">
                            <i class="fab fa-telegram fa-3x"></i>
                        </a>
                        <a href="https://www.instagram.com/trexengenharia/" target="_blank">
                            <i class="fab fa-instagram fa-3x"></i>
                        </a>
                        <a href="https://www.facebook.com/trexengenharia/" target="_blank">
                            <i class="fab fa-twitter fa-3x"></i>
                        </a>
                    </div> -->
                    <p>
                        <a href="mailto:contato@erociti.com" target="_blank">contato: contato@erociti.com</a>
                    </p>


                </div>
                
                <div class="col-md-4 text-center">
                   <h4>Newsletter</h4>
                    <p>Assina nossa e receba conteudo exclusivos.</p>
                    
                    <vue-news />
                   
                    
                </div>


                <div class="col-sm-12 text-center">

                    <!--  <ul style="margin-top: 1rem;">
                       <li>
                           <a href="">Início</a>
                       </li>
                       <li>
                           <a href="">Início</a>
                       </li>
                   </ul> -->

                    <p>EroCiti &copy; {{ano}}  | Todos os direitos reservados.
                        <br>

                    </p>


                </div>

            </div>
        </div>

    </div>
    
    
    
</template>


<script>
    
    import VueNews from '@/components/VueNews.vue'

    export default{
        name: "Footer",
        computed:{
            ano: function(){
                var dt = new Date()
                 return dt.getFullYear()
            }  
        },
        components:{
            VueNews,
        },
    }


</script>


<style>

#footer {
  position: relative;
  bottom: 0;
    width: 100%;
}

</style>