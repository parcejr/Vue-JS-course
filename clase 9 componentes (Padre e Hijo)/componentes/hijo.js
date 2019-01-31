Vue.component('hijo',{
    template: //html 
    `
    <div class="bg-dark p-5 m-2">
        <h1>Tu Numero Es: {{numero}} -- {{resultado}}</h1>   
    </div>
    `,
    data(){
        return{
            Num_enviado: 27,
        }
    },
    props:['numero','resultado'],

    mounted() {
        this.$emit('enviar', this.Num_enviado);
    },
} )