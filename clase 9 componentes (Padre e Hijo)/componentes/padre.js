Vue.component('padre', {
    template: //html
    `
    <div class="bg-success container p-5 mt-5">
        <h1>Numero Padre: {{numero}} -- {{result}}</h1>
        <button class="btn btn-primary" @click="numero++">+</button>
        <hr>
        <hijo :numero="numero" :resultado="result"></hijo>
    </div>
    `,
    data(){
        return{
            numero:0,
            result:10
        }
    }
})