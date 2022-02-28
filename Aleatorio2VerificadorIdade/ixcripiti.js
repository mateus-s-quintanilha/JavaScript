function clicar() {
    var data = new Date()
    var dataagora = data.getFullYear()
    var ano = window.document.getElementById('nascimento')
    var res = window.document.getElementById('res')

    if(Number(ano.value) > dataagora || Number(ano.value) == 0) {
        alert('[ERRO] Verifique os dados novamente')

    } else {
       var sexo = window.document.getElementsByName('radsex')
       var genero = ''
       var img = window.document.getElementById('foto')
       var idade = dataagora - Number(ano.value)
       if(sexo[0].checked) {
           genero = 'Homem'
           document.body.style.background = 'blue'
           if(idade <= 12) {
               img.src = 'fotocriancahomem.jpeg'
           } else if(idade > 12 && idade <= 35) {
               img.src = 'fotojovemhomem.jpeg'
           } else if(idade > 35 && idade <=50) {
               img.src = 'fotoadultohomem.jpeg'
           } else if(idade > 50) {
               img.src = 'fotoidosohomem.jpeg'
        }


       } else if(sexo[1].checked) {
           genero = 'Mulher'
           document.body.style.background = 'pink'
           if(idade <= 12) {
            img.src = 'fotocriancamulher.jpeg'
        } else if(idade > 12 && idade <= 30) {
            img.src = 'fotojovemmulher.jpeg'
        } else if(idade > 30 && idade <=45) {
            img.src = 'fotoadultamulher.jpeg'
        } else if(idade > 45) {
            img.src = 'fotoidosamulher.jpeg'
        }
       }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
}