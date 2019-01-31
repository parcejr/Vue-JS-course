const vm = new Vue({
    el:'#app',
    data: {
        titulo: 'hola',
        tarea:[],
        nuevaTarea: ''
    },
    created() {
        localStorage.getItem('tareas');
    },
    methods:{
        agregarTarea(){
            this.tarea.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            localStorage.setItem('tareas', this.tarea);
            this.nuevaTarea = '';
            
        },
        eliminar(index){
            console.log(index);
            this.tarea.splice(index, 1);
        }    
    }    
})