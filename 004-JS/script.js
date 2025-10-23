// Adicionando um evento ao botão de consulta de CEP
document.getElementById("consultar").addEventListener("click", async () => {
  
  // Pegando o valor digitado no campo de CEP e removendo espaços extras
  const cep = document.getElementById("cep").value.trim();

  // Verificando se o CEP foi digitado corretamente (precisa ter 8 dígitos)
  if (cep === "" || cep.length !== 8) {
    alert("Digite um CEP válido com 8 dígitos!");  // Exibe um alerta se o CEP for inválido
    return; // Interrompe a execução caso o CEP seja inválido
  }

  try {
    // Fazendo uma requisição à API ViaCEP com o CEP informado
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    // Convertendo a resposta da API para formato JSON
    const data = await response.json();

    // Verificando se o CEP retornado pela API não foi encontrado
    if (data.erro) {
      alert("CEP não encontrado!");  // Exibe um alerta se o CEP não existir
      return; // Interrompe a execução caso o CEP não seja encontrado
    }

    // Preenchendo os campos de resultado com as informações obtidas da API
    document.getElementById("rua").textContent = data.logradouro || "-";  // Mostra o nome da rua
    document.getElementById("bairro").textContent = data.bairro || "-";  // Mostra o bairro
    document.getElementById("cidade").textContent = data.localidade || "-";  // Mostra a cidade
    document.getElementById("estado").textContent = data.uf || "-";  // Mostra o estado

  } catch (error) {
    // Caso aconteça um erro na requisição, exibe uma mensagem
    alert("Erro ao consultar o CEP. Tente novamente.");
    console.error(error);  // Mostra o erro no console para análise
  }
});
