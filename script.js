script.js
function entrar(e){
    e.preventDefault();
    window.location = "objetos.html";
}

// OBJETOS
let lista = [];

function add(){
    let valor = document.getElementById("obj").value;
    if(valor == "") return;

    lista.push(valor);
    mostrar();
}

function mostrar(){
    let tabela = document.getElementById("lista");
    tabela.innerHTML = "";

    lista.forEach((item, i) => {
        tabela.innerHTML += `
        <tr>
            <td>${item}</td>
            <td>
                <button onclick="editar(${i})">Editar</button>
                <button onclick="remover(${i})">Apagar</button>
            </td>
        </tr>`;
    });
}

function remover(i){
    lista.splice(i,1);
    mostrar();
}

function editar(i){
    let novo = prompt("Editar:", lista[i]);
    if(novo) lista[i] = novo;
    mostrar();
}

// USUÁRIOS
let users = [];

function addUser(){
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;

    if(nome == "" || email == "") return;

    users.push({nome,email});
    mostrarUser();
}

function mostrarUser(){
    let tabela = document.getElementById("listaUser");
    tabela.innerHTML = "";

    users.forEach((u,i)=>{
        tabela.innerHTML += `
        <tr>
            <td>${u.nome}</td>
            <td>${u.email}</td>
            <td>
                <button onclick="editarUser(${i})">Editar</button>
                <button onclick="removerUser(${i})">Apagar</button>
            </td>
        </tr>`;
    });
}

function removerUser(i){
    users.splice(i,1);
    mostrarUser();
}

function editarUser(i){
    let nome = prompt("Nome:", users[i].nome);
    let email = prompt("Email:", users[i].email);

    if(nome && email){
        users[i] = {nome,email};
        mostrarUser();
    }
}
