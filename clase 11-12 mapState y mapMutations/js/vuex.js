const store = new Vuex.Store({
   state:{
       valor:10
   }, 
   mutations:{
    aumentar(){
        this.state.valor ++;
    },
    disminuir(state,n){
       state.valor -= n;
    }
   }
})