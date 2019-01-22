
Vue.component ('titulo', {
    template: //html 
    ` 
    <div>
        <h1>{{valor}}</h1>
        <numero></numero>
    </div>
    ` ,
    computed:{
        // valor(){
        //     return store.state.numero;
        // }
        ...Vuex.mapState(['valor'])
       
    },
    data(){
        return{
            titulo:'hola mundo',
            numero: 0
        }
    }   
})
