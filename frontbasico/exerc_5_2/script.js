function verificaNumero(){
    let numero = parseFloat(document.getElementById("numero").value);
    if(numero===""){
        document.getElementById("resultadoNumero").textContent="Por favor, digite um numero!";
        return;
    }
    numero = parseFloat(numero);
    if(numero%2===0){
        document.getElementById("resultadoNumero").textContent="par";
    }else{
        document.getElementById("resultadoNumero").textContent="impar";
    }
}