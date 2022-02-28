function clicar() {
    var i = window.document.getElementById('inicio')
    var f = window.document.getElementById('fim')
    var p = window.document.getElementById('passo')
    var res = window.document.getElementById('tex')
   
    if(i.value == 0 || f.value == 0) {
        res.innerHTML = 'Impossível contar'

    } else {
        res.innerHTML = 'Contando: <br>'
        i = Number(i.value)
        f = Number(f.value)
        p = Number(p.value)

        if(p == 0) {
            alert('[ERRO] Vamos considerar Passo = 1')
            p = 1 
        }
        if(i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
    }
    res.innerHTML += ` \u{1F3C1}`

}