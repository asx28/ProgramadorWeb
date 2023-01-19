var botaoAdicionar = document.querySelector("#botao");
botaoAdicionar.addEventListener("click", enviar);

function enviar(event){
    event.preventDefault();
    console.log("Cadastro solicitado");
    var form = document.querySelector("#form");
    
    //1-Pegar os inputs do formulário:
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    //2 - Criar a linha da tabela <tr>
    var pacienteTr = document.createElement("tr");
    
    //3 - Criar coluna da tabela <td>
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
   

    //4 - Preencher as células <td> com os inputs do formulário
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    //5 - Anexar as colunas <td> na linha <tr> da tabela
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    console.log(pacienteTr);

    //6 - Anexar a linha <tr> na tabela <tbory> existente
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

