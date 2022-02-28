let amigo = {nome:'josé',
 sexo: 'M',
  peso: 85.4,
engordar(p=0){                      //Botei uma função dentro de uma variável
    console.log('Engordou')
    this.peso += p
}
}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
