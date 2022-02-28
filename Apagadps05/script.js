

var num = window.document.getElementById('tab')
var l = window.document.getElementById('seltab')

function clicar(){
    if(num.value == 0){
        alert('[ERRO] FDP DO KRL')
    } else{
       var n = Number(num.value)
       l.innerHTML = ''

       for(let c = 1; c <= 10; c++){
            var item = window.document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            l.appendChild(item)
        }
       
        
    }
}