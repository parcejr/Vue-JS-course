Vue.component('padre', {
    template: //html
    `
    <div class="bg-success container p-5 mt-5">
        <h1>Numero Padre: {{dato}} -- {{result}}</h1>
        <button class="btn btn-primary" @click="dato++">+</button>
        <hr>
        <hijo :numero="dato" :resultado="result" @enviar = "Num_recibido = $event"></hijo>
        <h1>{{Num_recibido}}</h1>
    </div>
    `,
    data(){
        return{
            dato:0,
            result:10,
            Num_recibido: ''
        }
    }
})