// Função para validar o formulário
function validateForm() {
  // Pega os valores dos campos
  let nome = document.getElementById('nome').value.trim();
  let email = document.getElementById('email').value.trim();
  let senha = document.getElementById('senha').value.trim();
  let confirmar = document.getElementById('confirmar').value.trim();
  let errorMessage = document.getElementById('error-message');

  // Limpa mensagem anterior
  errorMessage.textContent = '';

  // Validações
  if (nome === '') {
    errorMessage.textContent = 'Por favor, insira seu nome.';
    return false;
  }

  if (email === '') {
    errorMessage.textContent = 'Por favor, insira seu e-mail.';
    return false;
  }

  if (senha === '') {
    errorMessage.textContent = 'Por favor, insira uma senha.';
    return false;
  }

  if (confirmar === '') {
    errorMessage.textContent = 'Por favor, confirme sua senha.';
    return false;
  }

  if (senha !== confirmar) {
    errorMessage.textContent = 'As senhas não coincidem.';
    return false;
  }

  // Tudo certo: exibe sucesso e limpa formulário
  alert('Cadastro realizado com sucesso!');
  document.getElementById('simplesForm').reset();
  return false; // Impede redirecionamento
}
