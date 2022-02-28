function clicar() {
    let num = window.document.getElementById('numero')
    let tabuada = window.document.getElementById('seltab')
    if(num.value == 0) {
        alert('[ERRO] Digite um número')
    } else {
        let n = Number(num.value)
        let c = 1
        tabuada.innerHTML =''
        for(let c = 1 ;c <= 10; c++) {
            let item = window.document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tabuada.appendChild(item)
        }


    }

}