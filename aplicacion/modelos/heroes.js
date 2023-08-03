var colors = require('colors');

class Heroe {

    constructor ( id, nombre = "No especificado", poder = "No especificado", universo = "No especificado"){
        this.id = id
        this.nombre = nombre
        this.poder = poder
        this.universo = universo
    }

}


module.exports = {Heroe}