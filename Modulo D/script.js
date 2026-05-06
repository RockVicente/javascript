function carregar(){
    var msg = document.getElementById('msg')
    var horaSistema = new Date()
    var horaAgora = horaSistema.getHours()
    msg.innerText =  `Agora sao ${horaAgora} horas.`


    var body = document.querySelector('body')
    var img = document.getElementById('foto')
    if(horaAgora >= 0 && horaAgora < 12){
        body.style.background = '#5896e1'
        img.src ='manha.png'
    }else if(horaAgora >= 12 && horaAgora < 18){
        body.style.background = '#48596e'
        img.src ='tarde.png'
    }else{
        body.style.background = '#2d4e45'
        img.src ='noite.png'
    }
}
