'use strict'
let userLogado1 = JSON.parse(localStorage.getItem('userLogado')) 
let userLogado2 = JSON.parse(localStorage.getItem('userLogado')) 
let userLogado3 = JSON.parse(localStorage.getItem('userLogado')) 
let userLogado4 = JSON.parse(localStorage.getItem('userLogado')) 
let logado1 = document.querySelector('#logado1')
let logado2 = document.querySelector('#logado2')
let logado3 = document.querySelector('#logado3')
let logado4 = document.querySelector('#logado4')
logado1.innerHTML = `${userLogado1.userCad}`
logado2.innerHTML = `${userLogado2.userCad}`
logado3.innerHTML = `N/A`
logado4.innerHTML = `N/A`
    //Eventeos
