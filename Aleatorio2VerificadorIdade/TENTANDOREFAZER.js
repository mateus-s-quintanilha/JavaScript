var ano = window.document.getElementById('nascimento')
var year = new Date()
var data = year.getFullYear()
var tex = window.document.getElementById('tex')
var foto = window.document.getElementById('foto')

function clicar(){
    if(Number(ano.value) == 0 || Number(ano.value) > data){
        alert('[ERRO]')
    } else{
        var sexo = window.document.getElementsByName('radsex')
        var genero = ''
        var idade = data - Number(ano.value)
        if(sexo[0].checked){
            genero = 'Homem'
            document.body.style.background = 'blue'
            if(idade <= 12){
                foto.src = 'fotocriancahomem.jpeg'
            } else if(idade > 12 && idade <= 35){
                foto.src = 'fotojovemhomem.jpeg'
            } else if(idade > 35 && idade <= 55){
                foto.src = 'fotoadultohomem.jpeg'
            } else if(idade > 55){
                foto.src = 'fotoidosohomem.jpeg'
            }

        } else if(sexo[1].checked){
            genero = 'Mulher'
            document.body.style.background = 'pink'
            if(idade <= 12){
                foto.src = 'fotocriancamulher.jpeg'
            } else if(idade > 12 && idade <= 35){
                foto.src = 'fotojovemmulher.jpeg'
            } else if(idade > 35 && idade <= 55){
                foto.src = 'fotoadultamulher.jpeg'
            } else if(idade > 55){
                foto.src = 'fotoidosamulher.jpeg'
            }
        }
    }
    tex.innerHTML = `Gênero ${genero} com ${idade} anos`
}