function fase1joao () {
    var hidratação = 1;
    var tipodeBebida = prompt ("Quantos copos de água você já tomou hoje?") 
    while (hidratação < 5) {
        if (tipodeBebida => 10) {
            alert ("Vamos manter a hidratação");
            //break;
        }
    alert ("Bebe mais um copo de água aqui vai");
    hidratação = hidratação + 1;
    alert (hidratação);
    }
    var chaGengibre = prompt ("Você recebeu no zap a notícia de que chá de gengibre mata o corona, bora pro cházinho? \n 1 - Sim \n 2 - Não");
        if (chaGengibre == 1) {
            alert ("Um cházinho não vai fazer mal não é?")
            fase2joao();
        }
        else {
            alert ("Mehor não!")
            fase2joao();
        }
            }

function fase2joao () {
    var ivermectina = prompt ("E que tal uma Ivermectina? \nDigite: \n 1 - Tomar \n 2 - Não Tomar");
    if (ivermectina == 1) {
               return setTimeout("gameOverJoao()", 1000);
            }
    else {
        alert ("Uffa se livrou de uma Hepatite!")
        fase3joao();
    }
}
function fase3joao () {
    var imunidade = prompt ("Agora vamos fortalecer a imunidade.\nDigite:\n1 - Tomar um suplemento vitamínico\n2 - Tomar Própolis\n3 - Tomar um suco verde");
    if (imunidade == 1) {
        return setTimeout("gameOverJoao2()", 1000);
    }
    else {
        return setTimeout("vitoriaJoao()", 1000);
    }

}
function gameOverJoao () {
    alert ("Óh não! você teve um efeito colateral do tratamento precoce e acabou morrendo de Hepatite xP");
    document.write ("<img id = 'imagem'src='gameoverjoao.png'>")
}
function gameOverJoao2 () {
    alert ("Óh não! seu corpo não absorveu as vitaminas e o Coronito te pegou xP");
    document.write ("<img id = 'imagem'src='gameoverjoao.png'>")  
}
function vitoriaJoao () {
    alert ("Parabéns Cidadão, você se manteve firme e forte, a vacina chegou e você se salvou :D");
    document.write ("<img id = 'imagem'src='start.png'>")  
}
