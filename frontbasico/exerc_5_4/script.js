function verificaHabilidade() {
    let inHabilidades = document.getElementById("habilidades").value;
    let habilidadesArray = inHabilidades.split(",");
    let confereResultado = verificarJS(habilidadesArray);
    if (confereResultado) {
        document.getElementById("resultadoHabilidades").textContent = "JavaScript está no meio!";
    } else {
        document.getElementById("resultadoHabilidades").textContent = "F JavaScript";
    }
}

function verificarJS(habilidades) {
    return habilidades.map(h => h.trim().toLowerCase()).includes("javascript");
}
