const vm = new Vue({
    el: '#app',
    data:{
        titulo: 'hola',
        contador: 0,
    },
    computed: {
        invertido(){
            return this.titulo.split('').reverse();
        },
        color(){
            return{
                'bg-success': this.contador <= 10,
                'bg-primary': this.contador > 10 && this.contador <= 30,
                'bg-warning': this.contador > 30 && this.contador <= 70,
                'bg-danger': this.contador > 70
            }
        }
    },
})