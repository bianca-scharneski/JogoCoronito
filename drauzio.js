function fase1Drauzio () {
    var trabalho = prompt ("Hoje é um ótimo dia para salvar a humanidade, vamos para o laboratório?\nDigite:\n1 - Ir para o laboratório \n2 - Não ir para o laboratório");
    if (trabalho == 1) {
        return setTimeout("gameOverDrauzio()", 1000);
        }
    else {
        alert ("Nada de laboratório, vamos fazer a vacina no home office");
        fase2Drauzio();
    }
}

function fase2Drauzio () {
    var senha = prompt ("Crie uma senha para a porta do seu laboratório:");
    if (senha.length < 10) {
        return setTimeout("gameOverDrauzio2()", 1000);    
}    else {
        fase3Drauzio();
    }
}

function fase3Drauzio () {
    var ingrediente = prompt ("Você deixou seu café cair na mesa e acabou misturando os vidros do ingrediente final, o que falta para completar a vacina?\n 1 - Adicionar suco de laranja\n2 - Adicionar Essência de baunilha\n3 - Adicionar chá de boldo")
if (ingrediente == 3) {
    return setTimeout("vitoriaDrauzio()", 1000);}
else {
    alert ("Óh não! ingredite errado, você não conseguiu salvar o mundo")
}
}
function gameOverDrauzio (){
    alert ("Óh não! Você é do grupo de risco, o Coronito te pegou xP")
    document.write ("<img id = 'imagem'src='gameoverdrauzio.png'>")
}
function gameOverDrauzio2 (){
    alert ("Óh não! sua senha era muito fácil e foi descoberta, enquanto você não estava olhando o Bolsonaro entrou no laboratório e tocou fogo na fórmula da vacina ;-;")
    document.write ("<img id = 'imagem'src='gameoverdrauzio.png'>")
}
function vitoriaDrauzio (){
    alert ("Parabéns Drauzio, os brasileiros sempre souberam que poderiam contar com você, você encontrou a vacina e salvou a todos")
    document.write ("<img id = 'imagem'src='start.png'>")
}

