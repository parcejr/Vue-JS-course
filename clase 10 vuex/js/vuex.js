const store = new Vuex.Store({
   state:{
       numero:10
   }, 
   mutations:{
    aumentar(){
        this.state.numero ++;
    }
   }
})