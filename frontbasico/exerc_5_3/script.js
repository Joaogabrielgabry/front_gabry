function verificaIdade(){
    let idade = parseFloat(document.getElementById("idade").value);
    if(idade===""){
        document.getElementById("resultadoIdade").textContent="Por favor, digite um numero!";
        return;
    }
    idade = parseFloat(idade);
    if(idade>=18){
        document.getElementById("resultadoIdade").textContent="parabéns";
    }
    if(idade<0){
        document.getElementById("resultadoIdade").textContent="nem existe essa idade pae";
    }
    if(idade<18 && idade>0){
        document.getElementById("resultadoIdade").textContent="querendo ver o que hein???";
    }
}