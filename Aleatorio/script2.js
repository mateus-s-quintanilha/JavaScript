alert('Seja muito bem vindo!')

function rodar() {
var data = new Date()
var hora = data.getHours()

var texto = window.document.getElementById('horas')
var foto = window.document.getElementById('imagem')
texto.innerHTML = `Agora são exatamente ${hora} horas`

if(hora >= 5 && hora < 12) {
    foto.src = 'fotomanha.png'
    document.body.style.background = '#e2cd9f'

} else if(hora >= 12 && hora < 19) {
    foto.src = 'fototarde.png'
    document.body.style.background = '#b9846f'

} else {
    foto.src = 'fotonoite.png'
    document.body.style.background = '#515154'

}



}