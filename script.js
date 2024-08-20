const respostaAPI = [
    {"id": 1, "descrição": "Varrer a sala"}, // "Objeto" (JSON)
    {"id": 2, "descrição": "Bombril"},
    {"id": 3, "descrição": "Narcóticos anônimos"},
    {"id": 4, "descrição": "mini programa"},
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
        
    }
}