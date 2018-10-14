function relogio(){
    let data = new Date(); //cria objeto Date
    let horas = data.getHours(); // pega as horas atuais
    let minutos = data.getMinutes(); // pega minutos atuais
    let segundos = data.getSeconds(); // pega segundos atuais
    let milisegundos = Math.floor(data.getMilliseconds()); // pega milisegundos
    
    if (segundos<10){
        segundos = "0"+segundos; // adiciona um 0 a frente para manter 2 digitos
    }
    if (minutos<10){
        minutos = "0"+minutos; // adiciona um 0 a frente para manter 2 digitos
    }
    if (horas<10){
        horas = "0"+horas; // adiciona um 0 a frente para manter 2 digitos
    }
    
    document.getElementById('relogio').innerHTML = horas+":"+minutos+":"+segundos+":"+milisegundos; // exibe na div
}

window.setInterval("relogio()",1); // atualiza