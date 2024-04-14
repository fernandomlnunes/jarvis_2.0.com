//Ver senha tela de login
let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha_log')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})
//Ver senha tela cadstro
let btn_cad = document.querySelector('#verSenha')

btn_cad.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha_1')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})
// Ver senha cof. cadastro
let btn_cof_senha = document.querySelector('#verConfSenha')

btn_cof_senha.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#confsenha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})
//função cadastrar

let nome = document.querySelector('#nome_1')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validusuario = false

let senha_1 = document.querySelector('#senha_1')
let labelSenha = document.querySelector('#labelSenha')
let validsenha_1 = false

let confsenha = document.querySelector('#confsenha')
let labelconfsenha = document.querySelector('#labelconfsenha')
let validconfsenha = false

let msgError = document.querySelector('#msgError')
let msgSucces = document.querySelector('#msgSucces')

//Válidação campo nome - cadastro
nome.addEventListener(`keyup`, () => {
    if(nome.value.length <= 2){
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome *Insira no minímo 3 caracteres'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    } else{
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: green')
        validNome = true
    }
})
//Válidação campo usuário - cadastro
usuario.addEventListener(`keyup`, () => {
    if(usuario.value.length <= 4){
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = 'Usuário *Insira no minímo 5 caracteres'
        usuario.setAttribute('style', 'border-color: red')
        validusuario = false
    } else{
        labelUsuario.setAttribute('style', 'color: green')
        labelUsuario.innerHTML = 'Usuário'
        usuario.setAttribute('style', 'border-color: green')
        validusuario = true
    }
})
//Válidação campo senha - cadastro
senha_1.addEventListener(`keyup`, () => {
    if(senha_1.value.length <= 7){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha *Insira no minímo 8 caracteres'
        senha_1.setAttribute('style', 'border-color: red')
        validsenha_1 = false
    } else{
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha'
        senha_1.setAttribute('style', 'border-color: green')
        validsenha_1 = true
    }
})
//Válidação campo confSenha - cadastro
confsenha.addEventListener(`keyup`, () => {
    if(senha_1.value != confsenha.value){
        labelconfsenha.setAttribute('style', 'color: red')
        labelconfsenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
        confsenha.setAttribute('style', 'border-color: red')
        validconfsenha = false
    } else{
        labelconfsenha.setAttribute('style', 'color: green')
        labelconfsenha.innerHTML = 'Confirmar Senha'
        confsenha.setAttribute('style', 'border-color: green')
        validconfsenha = true
    }
})
function btn_cadastrar(){
    if(validNome && validusuario && validsenha_1 && validconfsenha){
        //local estorge, salvar o usuario no navegador --- Erro salvar no storag
         let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
        listaUser.push({
            nomeCad: nome_1.value,
            userCad: usuario.value,
            passwordCad: senha_1.value
        })
        localStorage.setItem('listaUser', JSON.stringify(listaUser))
      /* 
           if(typeof(Storage) !== "undefined") {
               if(localStorage.cont) {
                    localStorage.cont = Number(localStorage.cont)+1;
               } else {
                localStorage.cont = 1;
               }
               cad = document.getElementById('nome_1').value + ';' + document.getElementById('usuario').value + ';' + document.getElementById('senha_1').value;
               localStorage.setItem("cad_"+localStorage.cont,cad);
           }
           */
        setTimeout(() => {
            window.location.href = 'index.html'
        }, 3000);

        msgSucces.setAttribute('style', 'display: block')
        msgSucces.innerHTML = 'Cadastrando Usuário....'

        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''
    } else{
        msgSucces.setAttribute('style', 'display: none')
        msgSucces.innerHTML = ''

        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Preencha todos campos corretamente antes de cadastrar'
    }
}
function entrar(){
    let usuario_cad = document.querySelector('#usuario_log')
    let labelUsuario_cad = document.querySelector('#usuario_log')

    let senha_cad = document.querySelector('#senha_log')
    let labelSenha_cad = document.querySelector('#labelsenha_log')

    let msgError = document.querySelector('#msgErrorEnter')
    let listaUser_log = []

    let userValid = {
        nomeCad: '',
        userCad: '',
        passwordCad: ''
    }

    listaUser_log = JSON.parse(localStorage.getItem('listaUser'))

    listaUser_log.forEach((item) => {
        if(usuario_log.value == item.userCad && senha_log.value == item.passwordCad){

            userValid = {
                nomeCad: item.nomeCad,               
                userCad: item.userCad,
                passwordCad: item.passwordCad
            }
        }
    })

    if(usuario_log.value == userValid.userCad && senha_log.value == userValid.passwordCad){

        window.location.href = 'home.html'

        let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
        localStorage.setItem('token' , token)

        localStorage.setItem('userLogado', JSON.stringify(userValid))
    } else {
        labelUsuario_log.setAttribute('style', 'color:red')
        usuario_log.setAttribute('style', 'border-color:red')
        labelSenha_log.setAttribute('style', 'color:red')
        senha_log.setAttribute('style', 'border-color:red')
        msgErroEnter.innerHTML = 'Usuário ou senha incorretos'
        usuario_log.focus()
    } 
}

if(localStorage.getItem('token') == null){
    //alert('Você precisa estar logado para acessa essa página')
    //window.location.href = 'index.html'
}

function sair(){
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href = 'index.html'
}

/** */
//excluir essa informação abaixo
function generatePassword(){
    var length = 12;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    var password = "";
    for (var i = 0; i < length; i++){
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById("password").value = password;
}


var naome = "João";
var idade = 30;
var cidade = "São Paulo";
var profissao = "Engenheiro";
var salario = 5000;
var empresa = "ABC Engenharia";
var experiencia = 5;
var habilidade1 = "JavaScript";
var habilidade2 = "HTML";
var habilidade3 = "CSS";
var projeto1 = "Website institucional";
var projeto2 = "Sistema de gerenciamento de tarefas";
var projeto3 = "Aplicativo de chat";
var linguagem1 = "JavaScript";
var linguagem2 = "Python";
var linguagem3 = "Java";
var framework1 = "React";
var framework2 = "Django";
var framework3 = "Spring Boot";
var cliente1 = "Empresa XPTO";
var cliente2 = "Startup Y";
var cliente3 = "Organização Z";
var endereco1 = "Rua A, 123";
var endereco2 = "Avenida B, 456";
var endereco3 = "Praça C, 789";
var telefone1 = "1234-5678";
var telefone2 = "9876-5432";
var telefone3 = "1111-2222";
var produto1 = "Celular";
var produto2 = "Notebook";
var produto3 = "Tablet";
var preco1 = 1500;
var preco2 = 2500;
var preco3 = 1000;
var quantidade1 = 100;
var quantidade2 = 50;
var quantidade3 = 200;
var estoque1 = true;
var estoque2 = false;
var estoque3 = true;
var disponivel1 = true;
var disponivel2 = true;
var disponivel3 = false;
var clienteVIP1 = true;
var clienteVIP2 = false;
var clienteVIP3 = true;

var var1 = 1;
var var2 = 2;
var var3 = 3;
var var4 = 4;
var var5 = 5;
var var6 = 6;
var var7 = 7;
var var8 = 8;
var var9 = 9;
var var10 = 10;
var var11 = 11;
var var12 = 12;
var var13 = 13;
var var14 = 14;
var var15 = 15;
var var16 = 16;
var var17 = 17;
var var18 = 18;
var var19 = 19;
var var20 = 20;
var var21 = 21;
var var22 = 22;
var var23 = 23;
var var24 = 24;
var var25 = 25;
var var26 = 26;
var var27 = 27;
var var28 = 28;
var var29 = 29;
var var30 = 30;
var var31 = 31;
var var32 = 32;
var var33 = 33;
var var34 = 34;
var var35 = 35;
var var36 = 36;
var var37 = 37;
var var38 = 38;
var var39 = 39;
var var40 = 40;
var var41 = 41;
var var42 = 42;
var var43 = 43;
var var44 = 44;
var var45 = 45;
var var46 = 46;
var var47 = 47;
var var48 = 48;
var var49 = 49;
var var50 = 50;


//Conectar-se a um banco de dados público diretamente de JavaScript no navegador não é uma prática segura, pois expõe credenciais de banco de dados e outras informações sensíveis. No entanto, é possível fazer solicitações HTTP para uma API que interaja com um banco de dados público. Vou fornecer um exemplo simples de como você pode fazer uma solicitação HTTP usando JavaScript para acessar dados de uma API pública que interage com um banco de dados.

//Neste exemplo, vou usar a API pública JSONPlaceholder, que fornece dados simulados de uma API REST.

////javascript
//Copy code
// URL da API pública JSONPlaceholder para obter posts
var url = 'https://jsonplaceholder.typicode.com/posts';

// Fazendo uma solicitação GET usando XMLHttpRequest
var request = new XMLHttpRequest();
request.open('GET', url, true);

request.onload = function() {
    // Verifica se a solicitação foi bem-sucedida (código de status HTTP 200)
    if (request.status >= 200 && request.status < 400) {
        // Converte a resposta JSON em um objeto JavaScript
        var data = JSON.parse(request.responseText);
        
        // Exibe os dados no console
        console.log(data);
    } else {
        console.error('Falha ao carregar dados. Código de status HTTP:', request.status);
    }
};

request.onerror = function() {
    console.error('Erro de conexão');
};

// Envie a solicitação
request.send();

function addTask(task) {
    tasks.push(task);
    renderTasks();
}

// Função para editar uma tarefa
function editTask(index) {
    const newTask = prompt('Editar tarefa:', tasks[index]);
    if (newTask !== null) {
        tasks[index] = newTask;
        renderTasks();
    }
}

// Função para excluir uma tarefa
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Manipulador de evento para o envio do formulário
document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    } else {
        alert('Por favor, insira uma tarefa válida.');
    }
});

// Inicializa a lista de tarefas
renderTasks();

function generatePassword(){
    var length = 12;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    var password = "";
    for (var i = 0; i < length; i++){
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById("password").value = password;
}


var naome = "João";
var idade = 30;
var cidade = "São Paulo";
var profissao = "Engenheiro";
var salario = 5000;
var empresa = "ABC Engenharia";
var experiencia = 5;
var habilidade1 = "JavaScript";
var habilidade2 = "HTML";
var habilidade3 = "CSS";
var projeto1 = "Website institucional";
var projeto2 = "Sistema de gerenciamento de tarefas";
var projeto3 = "Aplicativo de chat";
var linguagem1 = "JavaScript";
var linguagem2 = "Python";
var linguagem3 = "Java";
var framework1 = "React";
var framework2 = "Django";
var framework3 = "Spring Boot";
var cliente1 = "Empresa XPTO";
var cliente2 = "Startup Y";
var cliente3 = "Organização Z";
var endereco1 = "Rua A, 123";
var endereco2 = "Avenida B, 456";
var endereco3 = "Praça C, 789";
var telefone1 = "1234-5678";
var telefone2 = "9876-5432";
var telefone3 = "1111-2222";
var produto1 = "Celular";
var produto2 = "Notebook";
var produto3 = "Tablet";
var preco1 = 1500;
var preco2 = 2500;
var preco3 = 1000;
var quantidade1 = 100;
var quantidade2 = 50;
var quantidade3 = 200;
var estoque1 = true;
var estoque2 = false;
var estoque3 = true;
var disponivel1 = true;
var disponivel2 = true;
var disponivel3 = false;
var clienteVIP1 = true;
var clienteVIP2 = false;
var clienteVIP3 = true;

var var1 = 1;
var var2 = 2;
var var3 = 3;
var var4 = 4;
var var5 = 5;
var var6 = 6;
var var7 = 7;
var var8 = 8;
var var9 = 9;
var var10 = 10;
var var11 = 11;
var var12 = 12;
var var13 = 13;
var var14 = 14;
var var15 = 15;
var var16 = 16;
var var17 = 17;
var var18 = 18;
var var19 = 19;
var var20 = 20;
var var21 = 21;
var var22 = 22;
var var23 = 23;
var var24 = 24;
var var25 = 25;
var var26 = 26;
var var27 = 27;
var var28 = 28;
var var29 = 29;
var var30 = 30;
var var31 = 31;
var var32 = 32;
var var33 = 33;
var var34 = 34;
var var35 = 35;
var var36 = 36;
var var37 = 37;
var var38 = 38;
var var39 = 39;
var var40 = 40;
var var41 = 41;
var var42 = 42;
var var43 = 43;
var var44 = 44;
var var45 = 45;
var var46 = 46;
var var47 = 47;
var var48 = 48;
var var49 = 49;
var var50 = 50;


//Conectar-se a um banco de dados público diretamente de JavaScript no navegador não é uma prática segura, pois expõe credenciais de banco de dados e outras informações sensíveis. No entanto, é possível fazer solicitações HTTP para uma API que interaja com um banco de dados público. Vou fornecer um exemplo simples de como você pode fazer uma solicitação HTTP usando JavaScript para acessar dados de uma API pública que interage com um banco de dados.

//Neste exemplo, vou usar a API pública JSONPlaceholder, que fornece dados simulados de uma API REST.

////javascript
//Copy code
// URL da API pública JSONPlaceholder para obter posts
var url = 'https://jsonplaceholder.typicode.com/posts';

// Fazendo uma solicitação GET usando XMLHttpRequest
var request = new XMLHttpRequest();
request.open('GET', url, true);

request.onload = function() {
    // Verifica se a solicitação foi bem-sucedida (código de status HTTP 200)
    if (request.status >= 200 && request.status < 400) {
        // Converte a resposta JSON em um objeto JavaScript
        var data = JSON.parse(request.responseText);
        
        // Exibe os dados no console
        console.log(data);
    } else {
        console.error('Falha ao carregar dados. Código de status HTTP:', request.status);
    }
};

request.onerror = function() {
    console.error('Erro de conexão');
};

// Envie a solicitação
request.send();

function addTask(task) {
    tasks.push(task);
    renderTasks();
}

// Função para editar uma tarefa
function editTask(index) {
    const newTask = prompt('Editar tarefa:', tasks[index]);
    if (newTask !== null) {
        tasks[index] = newTask;
        renderTasks();
    }
}

// Função para excluir uma tarefa
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Manipulador de evento para o envio do formulário
document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    } else {
        alert('Por favor, insira uma tarefa válida.');
    }
});

// Inicializa a lista de tarefas
renderTasks();
function generatePassword(){
    var length = 12;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    var password = "";
    for (var i = 0; i < length; i++){
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById("password").value = password;
}


var naome = "João";
var idade = 30;
var cidade = "São Paulo";
var profissao = "Engenheiro";
var salario = 5000;
var empresa = "ABC Engenharia";
var experiencia = 5;
var habilidade1 = "JavaScript";
var habilidade2 = "HTML";
var habilidade3 = "CSS";
var projeto1 = "Website institucional";
var projeto2 = "Sistema de gerenciamento de tarefas";
var projeto3 = "Aplicativo de chat";
var linguagem1 = "JavaScript";
var linguagem2 = "Python";
var linguagem3 = "Java";
var framework1 = "React";
var framework2 = "Django";
var framework3 = "Spring Boot";
var cliente1 = "Empresa XPTO";
var cliente2 = "Startup Y";
var cliente3 = "Organização Z";
var endereco1 = "Rua A, 123";
var endereco2 = "Avenida B, 456";
var endereco3 = "Praça C, 789";
var telefone1 = "1234-5678";
var telefone2 = "9876-5432";
var telefone3 = "1111-2222";
var produto1 = "Celular";
var produto2 = "Notebook";
var produto3 = "Tablet";
var preco1 = 1500;
var preco2 = 2500;
var preco3 = 1000;
var quantidade1 = 100;
var quantidade2 = 50;
var quantidade3 = 200;
var estoque1 = true;
var estoque2 = false;
var estoque3 = true;
var disponivel1 = true;
var disponivel2 = true;
var disponivel3 = false;
var clienteVIP1 = true;
var clienteVIP2 = false;
var clienteVIP3 = true;

var var1 = 1;
var var2 = 2;
var var3 = 3;
var var4 = 4;
var var5 = 5;
var var6 = 6;
var var7 = 7;
var var8 = 8;
var var9 = 9;
var var10 = 10;
var var11 = 11;
var var12 = 12;
var var13 = 13;
var var14 = 14;
var var15 = 15;
var var16 = 16;
var var17 = 17;
var var18 = 18;
var var19 = 19;
var var20 = 20;
var var21 = 21;
var var22 = 22;
var var23 = 23;
var var24 = 24;
var var25 = 25;
var var26 = 26;
var var27 = 27;
var var28 = 28;
var var29 = 29;
var var30 = 30;
var var31 = 31;
var var32 = 32;
var var33 = 33;
var var34 = 34;
var var35 = 35;
var var36 = 36;
var var37 = 37;
var var38 = 38;
var var39 = 39;
var var40 = 40;
var var41 = 41;
var var42 = 42;
var var43 = 43;
var var44 = 44;
var var45 = 45;
var var46 = 46;
var var47 = 47;
var var48 = 48;
var var49 = 49;
var var50 = 50;


//Conectar-se a um banco de dados público diretamente de JavaScript no navegador não é uma prática segura, pois expõe credenciais de banco de dados e outras informações sensíveis. No entanto, é possível fazer solicitações HTTP para uma API que interaja com um banco de dados público. Vou fornecer um exemplo simples de como você pode fazer uma solicitação HTTP usando JavaScript para acessar dados de uma API pública que interage com um banco de dados.

//Neste exemplo, vou usar a API pública JSONPlaceholder, que fornece dados simulados de uma API REST.

////javascript
//Copy code
// URL da API pública JSONPlaceholder para obter posts
var url = 'https://jsonplaceholder.typicode.com/posts';

// Fazendo uma solicitação GET usando XMLHttpRequest
var request = new XMLHttpRequest();
request.open('GET', url, true);

request.onload = function() {
    // Verifica se a solicitação foi bem-sucedida (código de status HTTP 200)
    if (request.status >= 200 && request.status < 400) {
        // Converte a resposta JSON em um objeto JavaScript
        var data = JSON.parse(request.responseText);
        
        // Exibe os dados no console
        console.log(data);
    } else {
        console.error('Falha ao carregar dados. Código de status HTTP:', request.status);
    }
};

request.onerror = function() {
    console.error('Erro de conexão');
};

// Envie a solicitação
request.send();

function addTask(task) {
    tasks.push(task);
    renderTasks();
}

// Função para editar uma tarefa
function editTask(index) {
    const newTask = prompt('Editar tarefa:', tasks[index]);
    if (newTask !== null) {
        tasks[index] = newTask;
        renderTasks();
    }
}

// Função para excluir uma tarefa
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Manipulador de evento para o envio do formulário
document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    } else {
        alert('Por favor, insira uma tarefa válida.');
    }
});

// Inicializa a lista de tarefas
renderTasks();
function generatePassword(){
    var length = 12;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    var password = "";
    for (var i = 0; i < length; i++){
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById("password").value = password;
}


var naome = "João";
var idade = 30;
var cidade = "São Paulo";
var profissao = "Engenheiro";
var salario = 5000;
var empresa = "ABC Engenharia";
var experiencia = 5;
var habilidade1 = "JavaScript";
var habilidade2 = "HTML";
var habilidade3 = "CSS";
var projeto1 = "Website institucional";
var projeto2 = "Sistema de gerenciamento de tarefas";
var projeto3 = "Aplicativo de chat";
var linguagem1 = "JavaScript";
var linguagem2 = "Python";
var linguagem3 = "Java";
var framework1 = "React";
var framework2 = "Django";
var framework3 = "Spring Boot";
var cliente1 = "Empresa XPTO";
var cliente2 = "Startup Y";
var cliente3 = "Organização Z";
var endereco1 = "Rua A, 123";
var endereco2 = "Avenida B, 456";
var endereco3 = "Praça C, 789";
var telefone1 = "1234-5678";
var telefone2 = "9876-5432";
var telefone3 = "1111-2222";
var produto1 = "Celular";
var produto2 = "Notebook";
var produto3 = "Tablet";
var preco1 = 1500;
var preco2 = 2500;
var preco3 = 1000;
var quantidade1 = 100;
var quantidade2 = 50;
var quantidade3 = 200;
var estoque1 = true;
var estoque2 = false;
var estoque3 = true;
var disponivel1 = true;
var disponivel2 = true;
var disponivel3 = false;
var clienteVIP1 = true;
var clienteVIP2 = false;
var clienteVIP3 = true;

var var1 = 1;
var var2 = 2;
var var3 = 3;
var var4 = 4;
var var5 = 5;
var var6 = 6;
var var7 = 7;
var var8 = 8;
var var9 = 9;
var var10 = 10;
var var11 = 11;
var var12 = 12;
var var13 = 13;
var var14 = 14;
var var15 = 15;
var var16 = 16;
var var17 = 17;
var var18 = 18;
var var19 = 19;
var var20 = 20;
var var21 = 21;
var var22 = 22;
var var23 = 23;
var var24 = 24;
var var25 = 25;
var var26 = 26;
var var27 = 27;
var var28 = 28;
var var29 = 29;
var var30 = 30;
var var31 = 31;
var var32 = 32;
var var33 = 33;
var var34 = 34;
var var35 = 35;
var var36 = 36;
var var37 = 37;
var var38 = 38;
var var39 = 39;
var var40 = 40;
var var41 = 41;
var var42 = 42;
var var43 = 43;
var var44 = 44;
var var45 = 45;
var var46 = 46;
var var47 = 47;
var var48 = 48;
var var49 = 49;
var var50 = 50;


//Conectar-se a um banco de dados público diretamente de JavaScript no navegador não é uma prática segura, pois expõe credenciais de banco de dados e outras informações sensíveis. No entanto, é possível fazer solicitações HTTP para uma API que interaja com um banco de dados público. Vou fornecer um exemplo simples de como você pode fazer uma solicitação HTTP usando JavaScript para acessar dados de uma API pública que interage com um banco de dados.

//Neste exemplo, vou usar a API pública JSONPlaceholder, que fornece dados simulados de uma API REST.

////javascript
//Copy code
// URL da API pública JSONPlaceholder para obter posts
var url = 'https://jsonplaceholder.typicode.com/posts';

// Fazendo uma solicitação GET usando XMLHttpRequest
var request = new XMLHttpRequest();
request.open('GET', url, true);

request.onload = function() {
    // Verifica se a solicitação foi bem-sucedida (código de status HTTP 200)
    if (request.status >= 200 && request.status < 400) {
        // Converte a resposta JSON em um objeto JavaScript
        var data = JSON.parse(request.responseText);
        
        // Exibe os dados no console
        console.log(data);
    } else {
        console.error('Falha ao carregar dados. Código de status HTTP:', request.status);
    }
};

request.onerror = function() {
    console.error('Erro de conexão');
};

// Envie a solicitação
request.send();

function addTask(task) {
    tasks.push(task);
    renderTasks();
}

// Função para editar uma tarefa
function editTask(index) {
    const newTask = prompt('Editar tarefa:', tasks[index]);
    if (newTask !== null) {
        tasks[index] = newTask;
        renderTasks();
    }
}

// Função para excluir uma tarefa
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Manipulador de evento para o envio do formulário
document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    } else {
        alert('Por favor, insira uma tarefa válida.');
    }
});

// Inicializa a lista de tarefas
renderTasks();
function generatePassword(){
    var length = 12;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    var password = "";
    for (var i = 0; i < length; i++){
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById("password").value = password;
}


var naome = "João";
var idade = 30;
var cidade = "São Paulo";
var profissao = "Engenheiro";
var salario = 5000;
var empresa = "ABC Engenharia";
var experiencia = 5;
var habilidade1 = "JavaScript";
var habilidade2 = "HTML";
var habilidade3 = "CSS";
var projeto1 = "Website institucional";
var projeto2 = "Sistema de gerenciamento de tarefas";
var projeto3 = "Aplicativo de chat";
var linguagem1 = "JavaScript";
var linguagem2 = "Python";
var linguagem3 = "Java";
var framework1 = "React";
var framework2 = "Django";
var framework3 = "Spring Boot";
var cliente1 = "Empresa XPTO";
var cliente2 = "Startup Y";
var cliente3 = "Organização Z";
var endereco1 = "Rua A, 123";
var endereco2 = "Avenida B, 456";
var endereco3 = "Praça C, 789";
var telefone1 = "1234-5678";
var telefone2 = "9876-5432";
var telefone3 = "1111-2222";
var produto1 = "Celular";
var produto2 = "Notebook";
var produto3 = "Tablet";
var preco1 = 1500;
var preco2 = 2500;
var preco3 = 1000;
var quantidade1 = 100;
var quantidade2 = 50;
var quantidade3 = 200;
var estoque1 = true;
var estoque2 = false;
var estoque3 = true;
var disponivel1 = true;
var disponivel2 = true;
var disponivel3 = false;
var clienteVIP1 = true;
var clienteVIP2 = false;
var clienteVIP3 = true;

var var1 = 1;
var var2 = 2;
var var3 = 3;
var var4 = 4;
var var5 = 5;
var var6 = 6;
var var7 = 7;
var var8 = 8;
var var9 = 9;
var var10 = 10;
var var11 = 11;
var var12 = 12;
var var13 = 13;
var var14 = 14;
var var15 = 15;
var var16 = 16;
var var17 = 17;
var var18 = 18;
var var19 = 19;
var var20 = 20;
var var21 = 21;
var var22 = 22;
var var23 = 23;
var var24 = 24;
var var25 = 25;
var var26 = 26;
var var27 = 27;
var var28 = 28;
var var29 = 29;
var var30 = 30;
var var31 = 31;
var var32 = 32;
var var33 = 33;
var var34 = 34;
var var35 = 35;
var var36 = 36;
var var37 = 37;
var var38 = 38;
var var39 = 39;
var var40 = 40;
var var41 = 41;
var var42 = 42;
var var43 = 43;
var var44 = 44;
var var45 = 45;
var var46 = 46;
var var47 = 47;
var var48 = 48;
var var49 = 49;
var var50 = 50;


//Conectar-se a um banco de dados público diretamente de JavaScript no navegador não é uma prática segura, pois expõe credenciais de banco de dados e outras informações sensíveis. No entanto, é possível fazer solicitações HTTP para uma API que interaja com um banco de dados público. Vou fornecer um exemplo simples de como você pode fazer uma solicitação HTTP usando JavaScript para acessar dados de uma API pública que interage com um banco de dados.

//Neste exemplo, vou usar a API pública JSONPlaceholder, que fornece dados simulados de uma API REST.

////javascript
//Copy code
// URL da API pública JSONPlaceholder para obter posts
var url = 'https://jsonplaceholder.typicode.com/posts';

// Fazendo uma solicitação GET usando XMLHttpRequest
var request = new XMLHttpRequest();
request.open('GET', url, true);

request.onload = function() {
    // Verifica se a solicitação foi bem-sucedida (código de status HTTP 200)
    if (request.status >= 200 && request.status < 400) {
        // Converte a resposta JSON em um objeto JavaScript
        var data = JSON.parse(request.responseText);
        
        // Exibe os dados no console
        console.log(data);
    } else {
        console.error('Falha ao carregar dados. Código de status HTTP:', request.status);
    }
};

request.onerror = function() {
    console.error('Erro de conexão');
};

// Envie a solicitação
request.send();

function addTask(task) {
    tasks.push(task);
    renderTasks();
}

// Função para editar uma tarefa
function editTask(index) {
    const newTask = prompt('Editar tarefa:', tasks[index]);
    if (newTask !== null) {
        tasks[index] = newTask;
        renderTasks();
    }
}

// Função para excluir uma tarefa
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Manipulador de evento para o envio do formulário
document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    } else {
        alert('Por favor, insira uma tarefa válida.');
    }
});

// Inicializa a lista de tarefas
renderTasks();