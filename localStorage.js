const app = new Vue({
    el: '#app',
    data:{
        titulo: 'GYM con Vue',
        tareas: [],
        nuevaTarea: ''
    },
    methods:{
        add(){
            console.log('diste click', this.tareas)

            this.tareas.push({
                nombre: this.nuevaTarea, 
                estado: false
            })
            this.nuevaTarea = ''
        }
    }



})