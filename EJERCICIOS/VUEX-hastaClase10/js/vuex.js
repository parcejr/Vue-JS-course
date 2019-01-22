const store = new Vuex.Store({
    state:{
        numero:10,
        color:false
    },
    mutations:{
        activar(){
            this.state.numero ++
        },
        cambiar(){
            this.state.color = !this.state.color; 
        }
    }
})
