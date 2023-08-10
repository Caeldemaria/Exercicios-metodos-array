const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
let nomeDPaciente='BEMJAMIM'
let operacao='cancelar'


function agendarPaciente(pacientes,nomeDPaciente,operacao){
   if(operacao==='agendar') {
        pacientes.push(nomeDPaciente) 
       
}

    console.log(pacientes.join(','))
}
function atenderPaciente(pacientes,operacao){
  if(operacao==='atender'){
            pacientes.shift()
           
     console.log(pacientes.join(','))
}
}
function cancelar(pacientes,operacao,nomeDPaciente){
    for(let i=0;i<pacientes.length;i++){
        if(pacientes[i]===nomeDPaciente&& operacao==='cancelar'){
            pacientes.splice(i,1)
        }
    }console.log(pacientes.join(','))
    
}
 
 agendarPaciente(pacientes,nomeDPaciente,operacao)
 atenderPaciente(pacientes,operacao)
 cancelar(pacientes,operacao,nomeDPaciente)