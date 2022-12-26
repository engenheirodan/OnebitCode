/* são usados para armazenamento de dados como objetos e arrays*/
debugger
let carro  = {
    placa : "DMZ6539",
    ano : 2006,
    cor : "vermelho"
}
alert(carro);
/*puxar um item dentro do objeto*/
console.log(carro)
/*passando todas os tamanhos da string em maiusculo*/
console.log(carro["cor"].toUpperCase())
console.log(carro["cor"])

/*mais de um objeto dentro*/
let carro  = [
    { modelo: "fiat palio", ano: 2006},
    { modelo: "fiat uno", ano: 2007},
    { modelo: "fiat marea", ano: 2000}
]
//O método forEach() executa uma dada função em cada elemento de um array.
carro.forEach( carro => {
    alert(carro.modelo + " tem " + carro.ano + " ano")
})
//objeto dentro de objeto
let carro  = {
    ano: 2006,
    cor: "vermelha",
    motorista: {
        idade: 26,
        civil: "solteiro"
    }
}
console.log(carro.motorista.idade)
    

