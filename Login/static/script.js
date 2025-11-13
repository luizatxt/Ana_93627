function validarFormulario() {
  const descricao = document.getElementById("descricao").value;
  const valor_unitario = document.getElementById("valor_unitario").value;
  const estoque = document.getElementById("estoque").value;

  if (descricao === "" || valor_unitario === "" || estoque === "") {
    alert("Por favor, preencha todos os campos!");
    return false;
  }
  return true;
}