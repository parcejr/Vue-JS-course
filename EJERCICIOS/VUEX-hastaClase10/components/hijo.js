Vue.component ('hijo', {
    template: //html
    `
    <div>
    <button @click="$store.commit('activar')"> + </button>
    <h1>{{ $store.state.numero}}</h1>    
    </div> 
    `
})