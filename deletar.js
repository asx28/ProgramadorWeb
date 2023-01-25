var clientes = document.querySelectorAll(".paciente");

clientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(event){
        //event.target.parentNode.remove();
        var alvoEvento = event.target;
        var paiDoAlvo = alvoEvento.parentNode; //tr do paciente
        paiDoAlvo.remove();
        //console.log(event.target);
        //this.remove();
    });
});

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
    

})

