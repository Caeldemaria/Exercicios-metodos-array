const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia',];
const posicao = 3;
function corte(nomes,posicao){
    let resultado= nomes.slice(posicao,)
    for(let i=0;i<resultado.length;i++){
        if(resultado.length!==3){
            resultado.pop()
        }
    }
    console.log(resultado)
}

corte (nomes,posicao)