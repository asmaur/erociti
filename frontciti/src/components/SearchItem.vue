<template>
    
    <form class="form-inline wiz-search col-12" @submit.prevent="search">
                   <div class="input-group" style="width: 100%;">
                      <input type="text" class="form-control" name="q" v-model="q" placeholder="Entre um nome" aria-label="Recipient's username" aria-describedby="button-addon2">
                      <select class="form-control col-4" id="exampleFormControlSelect1" name="cq" v-model="cq" >
                          <option value="mulheres">Mulheres</option>                          
                          <option value="homens">Homens</option>
                          <option value="transex">Transex</option>
      
                        </select>
                      <div class="input-group-append">
                        <button class="btn btn-outline-warning" type="submit" >Pesquisar</button>
                      </div>
                    </div>
                    
                    
                </form>
    
    
    
</template>


<script>
    
    export default{
        name: "SearchItem",
        data(){
            return{
                q: null,
                cq: null,
            }
        },
        methods:{
			search(){
				console.log(this.term);
				this.$router.push({path: '/search/', query:{q: this.q, cq: this.cq}});
			}
		}

    }


</script>