function viajar(destino){
    if (destino === "brasil"){
        console.log("gire a la izquierda")
    } else if (destino === "argentina"){
        console.log("gire a la derecha")
    } else{
        console.log("nos perdimos")
    }
}
viajar("bras")

function puedeManejar(edad){
    if(edad >= 18){
        console.log("puede manejar")
    } else if(edad < 18){
        console.log("es menor de edad. no puede manejar")
    }
}
puedeManejar(23)