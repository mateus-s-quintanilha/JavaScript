function contar() {
    var c = window.document.getElementById('inicio')
    var f = window.document.getElementById('fim')
    var p = window.document.getElementById('passo')
    var res = window.document.getElementById('tex')
    
    if(c.value == 0){
        texto.innerHTML = 'Impossível contar!'

    } else if(p.value == 0) {
        alert('Passo Inválido! Considerando PASSO 1')
    } else {
        res.innerHTML = 'Contando: '
       var i = Number(c.value)
       var f = Number(f.value)
       var p = Number(p.value)
       if(i < f) {
           //contagem crescente
            for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449} `
        }
    } else {
        //contagem regressiva
        for(let c = i; c>= f; c-= p)
        res.innerHTML += `${c} \u{1F449} `
    }
    res.innerHTML += `\u{1F3C1}`
    }


}