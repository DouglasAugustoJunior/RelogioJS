
#[Douglas Augusto](http://github.com/DouglasAugustoJunior)- Outros projetos. # 
 
![VERSÃO DO SW](https://img.shields.io/badge/Version-1.0-blue.svg)
 
![LINGUAGEM FINALIDADE](https://img.shields.io/badge/javascript-test-orange.svg)
 
O **Relógio JS** é um projeto simples que utilizei para aprimorar meus conhecimentos em JS.

![Imagem](https://github.com/DouglasAugustoJunior/RelogioJS/blob/master/_images/App.PNG?raw=true)

Desenvolvido em HTML5,CSS3 e JS, ele traz uma forma de exibir um relógio com o Date().
 
## Back-End
 

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
    
    Mensagens:
    
    document.getElementById("mensagens").innerHTML = mensagem; // mensagem

## Front-end

    body{
        background-color: #000;
        text-align: center;
        font: bold 30px Arial;
        color: #fff;
    }
    #relogio{
        margin: 0;
        color: #f90;
        padding: 50px;
    }
    footer{
        position: absolute;
        bottom: 10px;
        right: 10px;
        font-size: 20px;
        text-align: right;
    }

 
Para mais informações acesse [meus repositórios](http://github.com/DouglasAugustoJunior).