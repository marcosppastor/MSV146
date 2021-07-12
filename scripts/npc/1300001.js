/**
	Rolly - Ludibirum Maze PQ

importPackage(Packages.client);

var status = 0;
var minLevel = 10;
var maxLevel = 200;
var minPlayers = 3;
var maxPlayers = 6;
var time = 10;
var open = true;

function start() {
    status = -1;
    action(1, 0, 0);
}
var PQItems = new Array(4001106);

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
		
	if (status == 0) {
	    cm.sendSimple("Esta � a entrada para o evento do feriado da #r Proclama��o da rep�blica #k.\r\n#b#L0#Entrar na Miss�o#l \r\n#L1#Oque � esta miss�o?\r\n#L2#Trocar fragmentos por espada");
	 	
	} else if (status == 1) {
	    var em = cm.getEventManager("IndependenciaPQ");
	    if(selection == 0) {//ENTER THE PQ
			if (!hasParty()) {//NO PARTY
				cm.sendOk("Forme um grupo antes de entrar!");
			} else if (!isLeader()) {//NOT LEADER
				cm.sendOk("Pe�a a seu lider para que fale comigo!");
			} else if (!checkPartySize()) {//PARTY SIZE WRONG
				cm.sendOk("Seu grupo tem de consistir em pelo menos " + minPlayers + " membros!");
                        }else if (cm.getParty().getMembers()>= minLevel && cm.getParty().getMembers() <= maxLevel ){
				cm.sendOk("Um dos membros do seu grupo n�o cumpriu os requisitos de n�vel de " + minLevel + "/" + maxLevel + ".");
			} else if (em == null) {//EVENT ERROR
				cm.sendOk("Evento desabilitado!");
			} else if (!open){
				cm.sendOk("A Miss�o esta #rfechada#k por agora.");
			} else {
				em.startInstance(cm.getParty(), cm.getChar().getMap());
			}
			cm.dispose();
			} else if(selection == 1) {
				cm.sendOk("Esta miss�o especial, busca levar o jogador para uma aventura totalmente misteriosa, ser� necess�rio possuir um grupo com no minimo 3 jogadores entre os n�veis 10-200 para entrar. Uma vez dentro da miss�o voc� dever� quebrar as diversas caixas que h� no mapa, para tentar recuperar as espada da nossa republica que foi perdida, uma vez quebradas estas caixas podem lhe satisfazer com um fragmento de espada #i4031569# ou lhe dar a espada forjada #i4001259#, a espada forjada � extremamente rara de se dropar,mas voc� podera obte-la conquistando 15 fragmentos de espada, com a espada da Rep�lica em m�os voc� poder� trocar por inumeros objetos de sua escolha,desde livros de habilidades a po��es,basta falar  com meu filho, o principe #r Giuseppe #k !");
				cm.dispose();
			
                        
                        } else if (selection == 2) {
        if (selection == 2 && cm.haveItem(4031569  , 15)) {
                      cm.gainItem(4031569  , -15);
                      cm.gainItem(4001259 , 1);

			                      
                      
	              //cm.sendOk("Sua troca foi concluida com sucesso.");
                      cm.dispose();
            } else {
	cm.sendOk("Parece que voc� n�o possui os itens necess�rios,para realizar esta troca � necessario ter no minimo 15 #i4031569#.");
                cm.dispose();
        }
		}
    }
}}
     
function getPartySize(){
    if (cm.getParty() == null) {
		return 0;
    } else {
		return (cm.getParty().getMembers().size());
    }
}

function isLeader(){
    return cm.isLeader();
}

function checkPartySize(){
    var size = 0;
    if (cm.getParty() == null){
		size = 0;
    } else {
		size = (cm.getParty().getMembers().size());
    }
    if (size < 1  || size > 6) {
		return false;
    } else {
		return true;
    }
}

function checkPartyLevels(){
    var pass = true;
    var party = cm.getParty().getMembers();
    if (cm.getParty() == null) {
		pass = false;
    } else {
		for (var i = 0; i < party.size() && pass; i++) {
			if ((party.get(i).getLevel() < 51) || (party.get(i).getLevel() > 100) || (party.get(i).getMapId() != cm.getMapId())) {
				pass = false;
			}
		}
    }
    return pass;
}

function hasParty(){
    if(cm.getParty() == null){
		return false;
    } else {
		return true;
    }
}


* */

function start() {
//cm.gainItem()
cm.sendOk("Bem-vindo ao meu reinado!");
cm.dispose();
}

function action(mode, type, selection) {
cm.dispose();
}