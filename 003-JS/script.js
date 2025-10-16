function inserir(valor) {
  // Pega o elemento com id "display" e adiciona o valor recebido ao final do conteúdo atual
  document.getElementById("display").value += valor;
}


function limpar() {
  // Limpa o conteúdo do elemento com id "display", deixando vazio
  document.getElementById("display").value = "";
}


function apagar() {
  // Pega o valor atual do display
  let display = document.getElementById("display").value;
  // Atualiza o display removendo o último caractere (slice do início até o penúltimo)
  document.getElementById("display").value = display.slice(0, -1);
}


function calcular() {
  try {
    // Tenta avaliar a expressão matemática que está no display usando eval
    let resultado = eval(document.getElementById("display").value);
    // Exibe o resultado da avaliação no display
    document.getElementById("display").value = resultado;
  } catch {
    // Caso ocorra algum erro (expressão inválida), exibe "Erro"
    document.getElementById("display").value = "Erro";
  }
}