let numeros = [5, 2, 3, 6, 8, 5];

function encontreUn5(numeros) {
    let i = 0
    do {
        if (numeros[i] == 5) {
            return console.log("Se encontró un 5!")
        }
        console.log(numeros[i])
        i++
    } while (i <= numeros.length)
}

encontreUn5(numeros)
module.exports = encontreUn5;