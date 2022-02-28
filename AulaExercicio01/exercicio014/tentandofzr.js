window.alert('Olá, seja bem vindo!')
function carregar(){
    var data = new Date()
    var hora = data.getHours()
    var foto = window.document.getElementById('foto')
    var tex = window.document.getElementById('tex')
    tex.innerHTML = `Agora são ${hora} horas`
    
    if(hora > 5 && hora <= 12){
        foto.src = 'fotomanha.jpeg'
    } else if(hora > 12 && hora <=19){
        foto.src = 'fototarde.jpeg'
    } else if(hora > 19){
        foto.src = 'fotonoite.jpeg'
    } else if(hora < 5){
        foto.src = 'fotonoite.jpeg'
    }
}