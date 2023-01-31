var botaoUpload = document.querySelector("#upload");
botaoUpload.addEventListener("click", loading);

function loading(){
    console.log("botão upload.");
    var up = new XMLHttpRequest(); 
    //var header = up.setHeader("Access-Control-Allow-Origin", "https://github.com/asx28/ProgramadorWeb");
    up.open("GET", "https://raw.githubusercontent.com/asx28/ProgramadorWeb/main/pacientes.json");
    up.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        if(up.status==200){
            var resposta = up.responseText;
            var pacientes = JSON.parse(resposta);
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
                });
        }else{
            erroAjax.classList.remove("invisivel");
        };
    })
    up.send();
    
}




