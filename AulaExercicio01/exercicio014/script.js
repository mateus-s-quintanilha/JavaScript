window.alert('Olá, seja bem vindo!')

function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var hora = 6
msg.innerHTML = `Agora são ${hora} horas`
if(hora >= 5 && hora <12){
    img.src = 'fotomanha.jpeg'
    document.body.style.background = '#e2cd9f'

} else if(hora >= 12 && hora < 20) {
    img.src = 'fototarde.jpeg'
    document.body.style.background = '#b9846f'

}else {
    img.src = 'fotonoite.jpeg'
    document.body.style.background = '#515154'


}

    
}