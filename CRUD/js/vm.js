const vm = new Vue({
    el:'#app',
    data: {
        titulo: 'hola',
        tarea:[],
        nuevaTarea: ''

    },
    methods:{
        agregarTarea: function(){
            
            this.tarea.push({
                nombre: this.tareaNueva,
                estado: false
            });
            this.nuevaTarea = ''
        }
    }    
})