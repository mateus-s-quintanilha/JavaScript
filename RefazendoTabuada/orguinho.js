function clicar() {
    var num = window.document.getElementById('tabuada')
    var tabuada = window.document.getElementById('seltab')
    if(num.value == 0) {
        alert('[ERRO]')
    } else{
        var n = Number(num.value)
        var c = 1
        tabuada.innerHTML = ''
        for(var c = 1; c <= 10; c++) {
            var item = window.document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tabuada.appendChild(item)
        } 
    } 

}
