Vue.component ('numero',{
    template: //html
    `
    <div>
        <button @click="$store.commit('aumentar')">+</button>
        <h1>{{$store.state.numero}}</h1>
    </div>
    `
})