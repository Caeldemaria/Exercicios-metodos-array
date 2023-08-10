const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
let nomeDPaciente='BEMJAMIM'
let operacao='agendar'
function paciente(pacientes,nomeDPaciente,operacao){
    for (let i=0;i<pacientes.length;i++){
        if(operacao==='atender'){
            pacientes.shift()
            pacientes.unshift(nomeDPaciente)
     console.log(pacientes)
     break
    }else if(operacao==='agendar') {
        pacientes.push(nomeDPaciente) 
        console.log(pacientes)
        break
    }
    
}
}

paciente(pacientes,nomeDPaciente,operacao)