/*setTimeout (function conhecaPersonagens() { */

function conhecaPersonagens() {
        document.write('<table><tr><td><img src="telafundo.png' +'" width=100% /></td>');
                     setTimeout (function (){
                alert ("Conheça os personagens")
                alert ("1- João, o cidadão seu objetivo é se manter o mais longe possível do Corona até a vacina chegar!");
                alert ("2 - Drauzio Varela Você sabe que o Brasil acredita em você, e todos esperam que você desenvolva a vacina a tempo e salve a todos");
                alert ("3 - Coronito você é realmente mau, seu objetivo é viajar o mundo!");
                var escolhaPersonagem = prompt ("Digite sua escolha \n 1 - João Cidadão \n 2 - Drauzio \n 3 - Coronito");
                parseInt (escolhaPersonagem);
                decisaoPersonagem(escolhaPersonagem);
        },1000)


}

function decisaoPersonagem (escolhaPersonagem) {
    if (escolhaPersonagem == 1) {
        return setTimeout("fase1joao()", 1000);


}  else if (escolhaPersonagem == 2) {
        return setTimeout("fase1Drauzio()", 1000);

}   else if (escolhaPersonagem == 3) { 
        return setTimeout("fase1Coronito()", 1000);
}   else {
        alert("Personagem não identificado")
}
}

