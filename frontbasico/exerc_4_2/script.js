let estadoInicial = true;
let numeroCurtidas = 0;

function alterarTexto() {
    const mensagem = document.getElementById('mensagem');
    if (estadoInicial) {
        mensagem.textContent = 'Olá, mundo!';
    } else {
        mensagem.textContent = 'Clique no botão para alterar o texto.';
    }
    estadoInicial = !estadoInicial;
}
function curtir() {
    numeroCurtidas++;
    atualizarCurtidas();
}
function descurtir() {
    if (numeroCurtidas > 0) {
        numeroCurtidas--;
    }
    atualizarCurtidas();
}
function atualizarCurtidas() {
    document.getElementById('curtidas').textContent = 'Curtidas: ' + numeroCurtidas;
}