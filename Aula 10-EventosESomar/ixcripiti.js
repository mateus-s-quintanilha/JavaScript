var a = window.document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar(){
    a.innerHTML = 'Clicou!'
    a.style.backgroundColor= 'red'
}
function entrar(){
    a.innerHTML = 'Entrou!'
    
}
function sair(){
    a.innerText = 'Saiu'
    a.style.backgroundColor = 'purple'
}