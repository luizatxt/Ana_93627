document.getElementById("consultar").addEventListener("click", async () => {
  const cnpj = document.getElementById("cnpj").value.trim().replace(/[^\d]+/g, '');  // Remove caracteres não numéricos

  if (cnpj.length !== 14) {
    alert("Digite um CNPJ válido com 14 dígitos!");
    return;
  }

  try {
    // Fazendo a requisição à API BrasilAPI para consultar o CNPJ
    const response = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`);
    const data = await response.json();

    if (!data || data.error) {
      alert("CNPJ não encontrado ou inválido!");
      return;
    }

    // Preenchendo os campos com os dados retornados pela API
    document.getElementById("razao-social").textContent = data.nome || "-";
    document.getElementById("nome-fantasia").textContent = data.fantasia || "-";
    document.getElementById("cnpj-result").textContent = data.cnpj || "-";
    document.getElementById("atividade").textContent = (data.atividade_principal && data.atividade_principal[0]?.text) || "-";
    document.getElementById("endereco").textContent = `${data.logradouro || ""}, ${data.numero || ""} - ${data.bairro || ""}, ${data.municipio || ""} - ${data.uf || ""}` || "-";

  } catch (error) {
    alert("Erro ao consultar o CNPJ. Tente novamente.");
    console.error(error);
  }
});
