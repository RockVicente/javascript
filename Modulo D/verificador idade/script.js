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
        img.className = 'circular-img'
        if(sexo[0].checked){
            genero = 'Masculino'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'crianca_menino.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovem_homem.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adulto.png')
            }else{
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        }else{
            genero = 'Feminino'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'crianca_menina.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovem_menina.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adulta.png')
            }else{
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }  

        res.style.textAlign = 'center'
        res.innerHTML = `Idade ${idade}, genero ${genero}`
        res.appendChild(img)
    }
}