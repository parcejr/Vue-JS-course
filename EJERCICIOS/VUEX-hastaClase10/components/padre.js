Vue.component('padre',{
    template: //html
    `
    <div>
        <h1>{{ $store.state.numero}}</h1>
        <hijo></hijo>
    </div> 
    `
})