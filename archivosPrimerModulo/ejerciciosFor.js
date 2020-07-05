function noParesDeContarImparesHasta(numero){
    let contador = 0
    for (let i = 0; i <= numero; i++){
        contador++
    }
    return contador
}
console.log(noParesDeContarImparesHasta(100))
module.exports = noParesDeContarImparesHasta;