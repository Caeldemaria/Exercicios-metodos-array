const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
function questãoA (frutas){
    let resultado=frutas.reverse() 
    let string=resultado.join(',')
    console.log(string)
}
questãoA (frutas)
function questão(frutas){
frutas.push('Melão')   
console.log(frutas) 
}
questão(frutas)