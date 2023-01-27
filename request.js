var campoFiltro = document.querySelector("#filtrar-tabela");


//console.log(campoFiltro);
campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var clientes = document.querySelectorAll(".paciente");

    if(this.value.length>0){

    for(var i=0; i<clientes.length; i++){
        var nome = clientes[i].querySelector(".info-nome").textContent;
        var expressao = new RegExp(this.value, 'i');
        
        if (!expressao.test(nome)){
            clientes[i].classList.add("invisivel");
        }else{
            clientes[i].classList.remove("invisivel");
        }
        
    }
}else{
    for(var i=0; i<clientes.length; i++){
        clientes[i].classList.remove("invisivel");
    }
}

})