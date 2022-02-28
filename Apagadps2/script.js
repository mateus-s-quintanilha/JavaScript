var num = window.document.getElementById('numero')
var tab = window.document.getElementById('seltab')

function clicar(){
    if(Number(num.value) == 0){
        alert('[ERRO]')
    } else{
        var n = Number(num.value)
        c = 1
        tab.innerHTML = ''
        for(c = 1; c <= 10; c++){
            var item = window.document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
        num.value = ''
        num.focus()
        
    }
}