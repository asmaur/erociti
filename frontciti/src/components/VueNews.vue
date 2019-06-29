<template>

    <form class="form-inline col-12" @submit.prevent="addMail">
        <div class="input-group" style="width: 100%;">
            <input class="form-control" type="email" name="mail" v-model="mail" placeholder="Email" aria-label="Enviar" required>

            <div class="input-group-append">
                <button class="btn btn-outline-warning" type="submit">Enviar</button>
            </div>
        </div>
    </form>


</template>


<script>
    
    import ax from "../genapi.js"
    
    export default {
        
        name: "VueNews",
        data(){
            return{
                mail: null,
            }
        },
        methods:{
            addMail(){
                ax.post("news/newsusers/", {"email": this.mail})
                .then(response => { this.$noty.success(response.data.message)})
            },
        }
    }
</script>