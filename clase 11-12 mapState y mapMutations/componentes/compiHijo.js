Vue.component ('numero',{
    template: //html
    `
    <div>
        <button @click="aumentar">+</button>
        <button @click="disminuir(3)">-</button> 
        <h1>{{valor}}</h1>
    </div>
    `,
    computed:{
        ...Vuex.mapState(['valor'])
    },
    methods:{
        ...Vuex.mapMutations(['aumentar','disminuir'])
    }
})  