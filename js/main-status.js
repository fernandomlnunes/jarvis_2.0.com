'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    clearFields()
    document.getElementById('modal').classList.remove('active')
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_status')) ?? []
const setLocalStorage = (dbStatus) => localStorage.setItem("db_status", JSON.stringify(dbStatus))

//deletar
const deleteClient = (index) => {
    const dbStatus = readClient()
    dbStatus.splice(index, 1)
    setLocalStorage(dbStatus)
}

//Atualizar
const updateClient = (index, client) =>{
    const dbStatus = readClient()
    dbStatus[index] = client
    setLocalStorage(dbStatus)
}

//Ler
const readClient = () => getLocalStorage()

// Criar
const createClient = (client) => {
    const dbStatus = getLocalStorage()
    dbStatus.push (client)
    setLocalStorage(dbStatus)
}

// Form cliente cad
const isValidFields = () =>{
  return document.getElementById('form').reportValidity()
}

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
}

const saveClient = () => {
    if (isValidFields()){
        const client = {
            nome: document.getElementById('nome').value,
        }
        const index = document.getElementById('nome').dataset.index
        if (index == 'new') {
            createClient(client)
            updateTable()
            closeModal()
        } else {
            updateClient(index, client)
            updateTable()
            closeModal()
        }
    }
}
const createRow = (client, index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
    <td>${client.nome}</td>
    <td>
        <button type="button" class="button green" id="edit-${index}">Editar</button>
        <button type="button" class="button red" id="delete-${index}">Excluir</button>
    </td>
    `    
    document.querySelector('#tableClient>tbody').appendChild(newRow)
}

const clearTable = () => {
    const rows = document.querySelectorAll('#tableClient>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () =>{
    const dbStatus = readClient()
    clearTable()
    dbStatus.forEach(createRow)
}

updateTable()

const fillFields = (client) => {
    document.getElementById('nome').value = client.nome

    document.getElementById('nome').dataset.index = client.index
}

const editClient = (index) => {
    const client = readClient()[index]
    client.index = index
    fillFields(client)
    openModal()
}

const editDelete = (event) => {
    if (event.target.type == 'button'){
        const [action, index] = event.target.id.split('-')
       
        if (action == 'edit'){
            editClient(index)
        } else {
            const client = readClient()[index]
            const response = confirm (`Deseja realmente excluir o status ${client.nome}`)
                if (response) {
                    deleteClient(index)
                    updateTable()
                }
        }
    }
    
}

    //Eventeos
document.getElementById('cadastrarStatus')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', saveClient)

document.getElementById('cancelar')
    .addEventListener('click', closeModal)

document.querySelector('#tableClient>tbody')
    .addEventListener('click', editDelete)
