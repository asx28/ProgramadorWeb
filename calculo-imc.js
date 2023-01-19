var cliente = document.querySelectorAll(".paciente");

for (var i=0; i<cliente.length; i++){

    var peso = cliente[i].querySelector(".info-peso").textContent;
    //console.log(peso);
    var altura = cliente[i].querySelector(".info-altura").textContent;
    //console.log(altura);
    var imcTd = cliente[i].querySelector(".info-imc");
    if (peso<0 || altura>3){
        imcTd.textContent = "Peso e/ou Altura inválido(s)";
        cliente[i].classList.add("paciente-invalido"); //listar classe do CSS
    }else{
        imcTd.textContent = calculaImc(peso, altura);
    }
}



function calculaImc(peso, altura){
    var imc = 0;
    imc = (peso/(altura*altura));
    return imc.toFixed(2);
} 



