function clicar() {
    var data = new Date()
    var dataatual = data.getFullYear()
    var ano = window.document.getElementById('nascimento')
    var res = window.document.getElementById('texto')
   

    if(ano.value.length == 0 || ano.value > dataatual) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var sexo = window.document.getElementsByName('radsex')
        var idade = Number(dataatual) - Number(ano.value) 
        var genero = ''
        var img = window.document.getElementById('foto')
    } if(sexo[0].checked) {
        genero = 'Homem'
        if(idade <= 12){
            img.src = 'fotocriancahomem.jpeg'
        } else if(idade >= 13 && idade <30) {
            img.src = 'fotojovemhomem.jpeg'
        } else if(idade >=30 && idade < 60) {
            img.src = 'fotoadultohomem.jpeg'
        } else if(idade >=60) {
            img.src = 'fotoidosohomem.jpeg'
        }

    } else if(sexo[1].checked) {
        genero = 'Mulher'
        if(idade <= 12){
            img.src = 'fotocriancamulher.jpeg'
        } else if(idade >= 13 && idade <30) {
            img.src = 'fotojovemmulher.jpeg'
        } else if(idade >=30 && idade < 60) {
            img.src = 'fotoadultamulher.jpeg'
        } else if(idade >=60) {
            img.src = 'fotoidosamulher.jpeg'
        }

    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        
        
    
    
    

    
    
    
}