function verificaNota(){
    let nota = parseFloat(document.getElementById("nota").value);
    if(nota===""){
        document.getElementById("resultadoNota").textContent="Por favor, digite uma nota!";
        return;
    }
    if(nota<0 || nota>100){
        document.getElementById("resultadoNota").textContent="Por favor, digite uma nota válida, entre (0) e (100)!";
        return;
    }
    const notaAprovacao = 60;
    if(nota>=notaAprovacao){
        document.getElementById("resultadoNota").textContent="aprovado";
    }
    if(nota>=50 && nota<60){
        document.getElementById("resultadoNota").textContent="recuperação";
    }
    if(nota<50){
        document.getElementById("resultadoNota").textContent="reprovado";
    }
}