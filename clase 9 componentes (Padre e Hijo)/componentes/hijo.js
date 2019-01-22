Vue.component('hijo',{
    template: //html 
    `
    <div class="bg-dark p-5 m-2">
        <h1>Tu Numero Es: {{numero}} -- {{resultado}}</h1>
        
    </div>
    `,
    props:['numero','resultado']
} )