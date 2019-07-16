<template>
    
     <div id="footer" style="margin-top: 4rem;">

        <div class="container">
            <div class="row">

                <div class="col-md-6 text-left">
                    <p>Legal</p>
                    <ul>
                       <!-- <li> <router-link to="/privacidade" >Privacidade</router-link> </li> -->
                        <li> <router-link to="/termo-de-uso" >Termos de Uso e Condições</router-link> </li>
                    </ul>
                </div>

             
                
                <div class="col-md-6 text-center">
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

                    <p style="padding: 1rem;">EroCiti Group &copy; {{ano}}  | Todos os direitos reservados.
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
