const vm = new Vue({
    el: '#apt',
    data: {
        titulo: 'Hola mundo con vue',
        libros: ['cien años de soledad','el imperio final', false],
        frutas: [{
            nombre:'jorge', curso:'HTML', estado: true, videos: 10},{
            nombre:'carlos', curso:'Vue JS', estado: 'veremos', videos: 0},{
            nombre :'aswin',curso: 'Node JS', estado: true, videos: 10    
            }
        ],
        nuevaFruta: '',
        total: 0
    },
    methods: {
        agregarFrutas: function() {
            // console.log('diste click');
            this.frutas.push({
                nombre: this.nuevaFruta, estado: false, videos: 1, curso:'CSS' 
            })
        }
    },
    computer:{
        sumarVideos(){
            this.total = 0;
            console.log(this.total);
            for(sumar of  this.frutas){
                console.log(sumar);
                this.total += sumar.videos;
            }
            return this.total;
        } 
  }
})

