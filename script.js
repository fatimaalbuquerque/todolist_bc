const respostaAPI = [
    {"id": 1, "descricao": "Varrer a sala"}, // "Objeto" (JSON)
    {"id": 2, "descricao": "Bombril"},
    {"id": 3, "descricao": "Narcóticos anônimos"},
    {"id": 4, "descricao": "mini programa"},
]; //Array - Matriz

const  taskList = document.getElementById("tasklist");

function init() {
    carregarLista()
};

function carregarLista() {
    // 1. chamar a API com a lista de tarefas atual
    // 2. interar a respostaAPI
    // 2.1 mesclar html com respostaAPI para exibir em tela
    let idx = -1;
    taskList.innerHTML = ''

    while(respostaAPI.lenght > 0 && ++idx < respostaAPI.length) {
        // mesclar html com respostaAPI para exibir em tela
        listContainer.innerHTML += `<li><input type="checkbox"> ${respostaAPI[idx].descricao}
                <button onclick="editarTarefa(${JSON.stringify(respostaAPI[idx])})">
                    <img src="imgs/lapis-removebg-preview.png" alt="lápis editor">
                </button>
                </li>`
    }
}

function salvarTarefa() {
    // 1. cahmar a API REST POST para salver a tarefa
    const taskInput = document.getElementById("task-input");
    respostaAPI,push({ "id": getProximoID(), "descrição": taskInput.value});
    // 2. limpar o campo

    // 3.

}