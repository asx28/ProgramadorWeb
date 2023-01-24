var botaoAdicionar = document.querySelector("#botao");
botaoAdicionar.addEventListener("click", enviar);

function enviar(event){
    event.preventDefault();
    //console.log("Cadastro solicitado");
    var form = document.querySelector("#form");
    
    //1-Pegar os inputs do formulário:
    var paciente = obterPacienteDoForm(form);
    var pacienteTr = montaTr(paciente);
    console.log(pacienteTr)

    //6 - Anexar a linha <tr> na tabela <tbory> existente
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    form.reset();
}

//Refatorando o Create do CRUD
function obterPacienteDoForm(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    //2 - Criar a linha da tabela <tr>
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    //3 - Criar coluna da tabela <td>
    var nomeTd = montaTd(paciente.nome, "info-nome"); 
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");
   
    //5 - Anexar as colunas <td> na linha <tr> da tabela
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}