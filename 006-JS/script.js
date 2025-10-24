const inputTarefa = document.getElementById("novaTarefa");
const btnAdicionar = document.getElementById("adicionarBtn");
const listaTarefas = document.getElementById("listaTarefas");

btnAdicionar.addEventListener("click", adicionarTarefa);

function adicionarTarefa() {
    const textoTarefa = inputTarefa.value.trim();

    if (textoTarefa === "") {
        alert("Digite uma tarefa!");
        return;
    }

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = textoTarefa;
    li.appendChild(span);

    // Botão Editar
    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.classList.add("editar");
    btnEditar.onclick = () => editarTarefa(span);
    li.appendChild(btnEditar);

    // Botão Remover
    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.classList.add("remover");
    btnRemover.onclick = () => li.remove();
    li.appendChild(btnRemover);

    listaTarefas.appendChild(li);
    inputTarefa.value = "";
}

function editarTarefa(span) {
    const novoTexto = prompt("Editar sua tarefa:", span.textContent);
    if (novoTexto !== null && novoTexto.trim() !== "") {
        span.textContent = novoTexto.trim();
    }
}
