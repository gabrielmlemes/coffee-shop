let navbarBtn = document.querySelector('#menu-btn')
let navbar = document.querySelector('.navbar')
let cartBtn = document.querySelector('#cart-btn')
let cartContainer = document.querySelector('.cart-items-container')
let searchBtn = document.querySelector('#search-btn')
let searchBar = document.querySelector('.search-form')

//Eventos

//Evento de clique do menu
navbarBtn.addEventListener('click', () => {
    navbar.classList.toggle('active')
    cartContainer.classList.remove('active')
    searchBar.classList.remove('active')
})

//Evento de clique do carrinho
cartBtn.addEventListener('click', () => {
    cartContainer.classList.toggle('active')
    navbar.classList.remove('active')
    searchBar.classList.remove('active')
})

//Evento de clique do campo de busca
searchBtn.addEventListener('click', () => {
    searchBar.classList.toggle('active')
    navbar.classList.remove('active')
    cartContainer.classList.remove('active')
})

window.onscroll = () => {
    navbar.classList.remove('active')
    cartContainer.classList.remove('active')
    searchBar.classList.remove('active')
}