var idade = 67
console.log(`a sua idade e ${idade}`)
if(idade < 18){
    console.log("nao pode votar")
}else if(idade >= 18 && idade <= 65){
    console.log("voto obrigatorio")
}else{
    console.log("voto opcional")
}