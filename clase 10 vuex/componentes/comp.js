Vue.component ('titulo', {
    template: //html 
    ` 
    <div>
        <h1>{{$store.state.numero}}</h1>
        <numero></numero>
    </div>
    ` ,
    data(){
        return{
            titulo:'hola mundo',
            numero: 2
        }
    }   
})
