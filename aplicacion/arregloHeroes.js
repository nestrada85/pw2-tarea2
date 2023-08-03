// BUENAS PRACTICAS = Siempre al inicio
//importamos las clases o funciones que necesitamos desde otro archivo
const { Heroe } = require('./modelos/heroes')



function arregloHeroes() {

    //Utilizo la clase que importe desde otro archivo
    const heroe1 = new Heroe( 1, "Superman", "SuperFuerza", "DC")
    const heroe2 = new Heroe( 2, "WonderWoman", "Volar", "DC")
    const heroe3 = new Heroe( 3, "IronMan", "Inteligencia", "MARVEL")
    const heroe4 = new Heroe( 4, "Spiderman", "Agilidad", "MARVEL")
    

    //Comenzamos el arreglo de heroes
    let listaHeroes = [heroe1, heroe2, heroe3, heroe4]

    //Listado de arreglo solo con 4 heroes
    console.log("Listado de arreglo solo con 4 heroes")
    console.log(listaHeroes)
    console.log("------------------------------------")


    //Adicionamos 4 heroes a el arreglo
    const heroe5 = new Heroe( 5, "Batman", "Inteligencia", "DC")
    const heroe6 = new Heroe( 6, "Aquaman", "Acuaticos", "DC")
    const heroe7 = new Heroe( 7, "CapitanAmerica", "SuperFuerza", "MARVEL")
    const heroe8 = new Heroe( 8, "Thor", "Rayo", "MARVEL")

    listaHeroes.push(heroe5, heroe6, heroe7, heroe8)


    //Listado de arreglo ya AGREGANDO 4 heroes más
    console.log("Listado de arreglo agregando 4 más heroes")
    console.log(listaHeroes)
    console.log("------------------------------------")


    //Funcion para BUSCAR un objeto dentro de un arreglo
    const heroeEncontrado = listaHeroes.find((heroe) => heroe.id === 7)

    console.log("Resultado de la busqueda del id = 7")
    console.log(heroeEncontrado)
    console.log("------------------------------------")


    //Funcion para FILTRAR los objetos dentro de un arreglo
    const heroesConPoderInteligencia = 
    listaHeroes.filter((heroe) => heroe.poder === "Inteligencia")

    console.log("Filtro de heroes con poder de Inteligencia")
    console.log(heroesConPoderInteligencia)
    console.log("------------------------------------")

    
    //Funcion para MODIFICAR un objeto de un arreglo
    const heroeModificar = listaHeroes.find((heroe) => heroe.id === 2)
    heroeModificar.nombre = "BlackWidow"
    heroeModificar.poder = "Espia"
    heroeModificar.universo = "MARVEL"

    console.log("Arreglo donde se modifico el heroe con id = 2")
    console.log(listaHeroes)
    console.log("------------------------------------")


    //Funcion para ELIMINAR un objeto de un arreglo
    listaHeroes = listaHeroes.filter((heroe) => heroe.id !== 1 && heroe.id !== 2)

    console.log("Arreglo donde se eliminaro los heroes con id = 1 y 2")
    console.log(listaHeroes)
    console.log("------------------------------------")
}



module.exports = { arregloHeroes }