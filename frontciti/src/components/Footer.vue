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

             
                
                <div class="col-md-6 text-right">
                   <h4>Newsletter</h4>
                    <p>Assina nossa e receba conteudo exclusivos.</p>
                    
                    <vue-news />
                   
                    
                </div>


            </div>
            
            <div class="row">
                <div class="col-12 col-md-8 text-left p-3">
                    <p>saqqi &copy; {{ano}} | All right reserved.</p>
                </div>
                <div class="col-12 col-md-4 text-right p-3">

                    <a href="https://wanubit.com" target="_blank">
                    <span> Design by </span>
                        <img src="../assets/img/wanu.png" class="fluid-img" style="height: 20px; width: 20px; margin-left: 1rem;"> Wanubit
                    </a>

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
