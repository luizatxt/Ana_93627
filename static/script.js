// Pega a mensagem da API e mostra na página
fetch('/api/mensagem')
.then(resposta => resposta.json())
.then(dados => {
document.getElementById('mensagem').textContent = dados.mensagem;
});