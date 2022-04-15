'use strict'
let userLogado1 = JSON.parse(localStorage.getItem('userLogado')) 
let userLogado2 = JSON.parse(localStorage.getItem('userLogado')) 
let userLogado3 = JSON.parse(localStorage.getItem('userLogado')) 
let userLogado4 = JSON.parse(localStorage.getItem('userLogado')) 
let logado1 = document.querySelector('#logado1')
let logado2 = document.querySelector('#logado2')
let logado3 = document.querySelector('#logado3')
let logado4 = document.querySelector('#logado4')
logado1.innerHTML = `${userLogado1.nome}`
logado2.innerHTML = `${userLogado2.email}`
logado3.innerHTML = `${userLogado3.celular}`
logado4.innerHTML = `${userLogado4.cidade}`
    //Eventeos