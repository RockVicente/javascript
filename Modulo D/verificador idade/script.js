function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nAno = document.getElementById('aNasc')
    var res = document.getElementById('res')
    if(nAno.value.length == 0 || Number(nAno.value) > ano){
        window.alert('[Erro] verifica os dados novamente!')
    }else{
        var sexo = document.getElementsByName('sex')
        var idade = ano - Number(nAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sexo[0].checked){
            genero = 'Masculino'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'foto_crianca.png')
            }else if(idade < 21){
                //jovem
            }else if(idade < 50){
                //adulto
            }else{
                //idoso
            }
        }else{
            genero = 'Feminino'
            if(idade >= 0 && idade < 10){
                //crianca
            }else if(idade < 21){
                //jovem
            }else if(idade < 50){
                //adulto
            }else{
                //idoso
            }
        }   
        res.style.textAlign = 'center'
        res.innerHTML = `Idade ${idade}, genero ${genero}`
    }
}