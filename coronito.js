function fase1Coronito () {
    var meioDeTransporte = prompt ("Escolha um meio de transporte para conhecer o mundo\nDigite:\n1 - Vou de Batmóvel\n2 - Vou de Avião");
    if (meioDeTransporte == 1) {
        return setTimeout("gameOverCoronito()", 1000);
    }
    else {
        fase2Coronito();
    }
}


function fase2Coronito () {
    alert ("Agora gire o dado para saber seu potencial de infecção\n BOA SORTE!")
    const getRandomIntegerInclusive = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min 
    alert (getRandomIntegerInclusive (0 , 20));

    var inserirNumero = prompt ("Digite o número do dado:");
    if (inserirNumero >= 5) {
        alert ("Você teve força suficiente para infectar, continue no jogo!");
        fase3Coronito();
            }
    else {
        return setTimeout("gameOverCoronito2()", 1000);
        
    }
}

function fase3Coronito () {
    var espirro = prompt ("Vamos infectar! Você precisa contaminar uma classe toda do avião que mede 9m³ se um espirro joga no ar 16.000 gotículas, o suficiente para contaminar 1m³, quantos espirros você tem que provocar para infectar uma classe toda do avião?");
    if (espirro == 9) {
        return setTimeout("vitoriaCoronito()", 1000);
    }
    else {
        return setTimeout("gameOverCoronito3()", 1000);
    }
 }

function gameOverCoronito (){
    alert ("Óh não! o morcego te ajudou da primeira vez mas não da segunda, você morreu sem infectar o mundo :/")
    document.write ("<img id = 'imagem'src='gameovercoronito.png'>")
}
function gameOverCoronito2 (){
    alert ("Sua força de infecção não foi suficiente xP")
    document.write ("<img id = 'imagem'src='gameovercoronito.png'>")
}
function gameOverCoronito3 (){
    alert ("Resposta errada! os espirros não conseguiram infectar o avião :/")
    document.write ("<img id = 'imagem'src='gameovercoronito.png'>")
}
function vitoriaCoronito (){
    alert ("Você acertou, contaminou as pessoas do avião que agora vão te dar uma carona pelo mundo!")
    document.write ("<img id = 'imagem'src='coronito.png'>")
}
