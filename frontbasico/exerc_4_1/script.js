let estadoInicial = true;

function alterarTexto() {
    const mensagem = document.getElementById('mensagem');
    if (estadoInicial) {
        mensagem.textContent = 'Olá, mundo!';
    } else {
        mensagem.textContent = 'Clique no botão para alterar o texto.';
    }
    estadoInicial = !estadoInicial;
}