function carregar(){
    var msg = document.getElementById('msg')
    var horaSistema = new Date()
    var horaAgora = horaSistema.getHours()
    msg.innerText =  `Agora sao ${horaAgora} horas.`


    var body = document.querySelector('body')
    var img = document.getElementById('foto')
    if(horaAgora >= 0 && horaAgora < 12){
        body.style.background = '#7DD3FF'
        img.src ='manha.png'
    }else if(horaAgora >= 12 && horaAgora < 18){
        body.style.background = '#A2574B'
        img.src ='tarde.png'
    }else{
        body.style.background = '#485659'
        img.src ='noite.png'
    }
}
