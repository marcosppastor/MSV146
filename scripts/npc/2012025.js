/*
var rand = Math.floor(Math.random()*100);
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else {
        cm.sendOk("Ok, n�o ficarei aqui o dia todo!");
        cm.dispose();
        return;
    }
    
    //if (cm.getMapId()===105040300 && cm.getLevel() <=34) {
    if (status == 0 ) {
	cm.sendSimple("#r N�o se esque�a de presta aten��o em todos os detalhes ditos no texto #k,eu sou o encarregado de iniciar o evento.Para todos poderem participar, para todos terem tempo de participar o evento acontecer� das #b 8AM-19PM:#k #b \r\n\r\n#L0#Desejo ir para o evento.#l\r\n\#L1#Obter informa��es sobre o evento.#l");
      
          
    
    } else if (selection == 0) {
                      cm.warp(280020000,0);
                      cm.gainItem(4032055,1);
                      cm.mapMessage(1,"[Etapa F�sica] \r\n Nesta primeira etapa, o jogador deve enfrentar o desafio da JQ de lava.A �nica maneira de chegar ao proximo estagio � falando com a NPC no fim desta miss�o,la voc� vai encontrar enigmas no qual o conduzir�o a certos lugares,o jogador deve ser esperto para n�o ceder.");
		
	
cm.dispose();
            
        
} else if (selection == 1) {
      
                      

                      cm.sendOk("Nesta primeira etapa do evento voc� deve enfrentar um dificil exercicio,n�o s�o todos que conseguem, para come�ar lhe darei um  ticket #i4032055# voc� deve entrega-lo ao NPC localizado no mapa final para onde te levarei.");
                      cm.dispose();
                  }
              }


*/function start() {
//cm.gainItem()
cm.sendOk("Ol� #h #, tudo bem?");
cm.dispose();
}

function action(mode, type, selection) {
cm.dispose();
}