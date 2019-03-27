const app = new  Vue({
    el: '#app',
    data: {
        titulo: 'Aprendiendo con Vue',
        menu: [
            {nombre: 'Inicio', cantidad: 20},
            {nombre: 'Sobre nosotros', cantidad: 14},
            {nombre: 'Contacto', cantidad: 1}
        ],
        frutas: [
            {nombre: 'Manzana', cantidad: 10},
            {nombre: 'Platano', cantidad: 0},
            {nombre: 'Pera', cantidad: 1},
        ]
    }
})