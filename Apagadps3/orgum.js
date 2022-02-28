var i = window.document.getElementById('first')
var f = window.document.getElementById('last')
var p = window.document.getElementById('passo')
var res = window.document.getElementById('tex')

function contar(){
    if(i.value == 0 || f.value == 0) {
        alert('[ERRO]')
    } else {
        res.innerHTML = 'Contando: <br>'
        i = Number(i.value)
        f = Number(f.value)
        p = Number(p.value)
        if(p == 0) {
            alert('[ERRO] Considerando p = 1')
            p = 1
        }
        if(i < f){
            for(let c = i; c <= f; c+= p){
                res.innerHTML += `${c} \u{1F449} `
            }
        } 
        else {
            for(let c = f; c >= i; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
            
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}