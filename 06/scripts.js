const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]
let buscar='Lessie'
function encontrarPet(usuarios,buscar){
    let verificar=false
    for (usuario of usuarios){
        verificar=usuario.pets.includes(buscar)
        if(verificar){
            return`O dono(a) do(a) ${buscar} é o(a) ${usuario.nome}`
           
        }
            
        } return `Que pena ${petNome}, não encontramos seu dono(a).`
    }

let mensagem=encontrarPet(usuarios,buscar)

console.log(mensagem)