/*
 * @author Marcos D
 * TrueMS - 2016
 * MapleFolia - custom
 * truems.net/


var status = 0;
var minlvl = 30;
var maxlvl = 51;
var minplayers = 1;
var maxplayers = 6;
var time = 15;
var on = true;
var open = true;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else if (mode == 0) {
        cm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;		 
        if (status == 0) {
        if (on == false) {
        cm.sendOk("Eu n�o estou disponivel no momento. Por hora, j� existe guerreiros lutando.\r\nTente falar comigo em outro canal.");
        cm.dispose();
        } else {
            cm.sendSimple("AAAAH #h #, Eu sou o respons�vel pela sua entrada  na #r Maple Folia #k !\r\n H� boatos de que na terceira dimens�o do mundo maple,diversas criaturas est�o tramando um terr�vel ataque.Cabe a voc� e seu grupo de guerreiros impedir tal trag�dia..  S�o diversos #eMonstros#n por�m a gl�ria espera aos guerreiros que conseguirem finalizar a miss�o,recompensas os aguardam !\r\n Voc� tem a coragem necess�ria?\r\n#b\r\n#b#L0#Eu e meu grupo desejamos entrar!#l#k\r\n#L3#O que fazer com as moedas douradas? (#i4001129#)?#l\r\n#L1#Como funciona essa miss�o?");
	 	}
        
        } else if (status == 1) {
            var em = cm.getEventManager("MapleFolia");
            if(selection == 0) {//ENTRAR
                if (!hasParty()) {//MONGOL SEM PT
                    cm.sendOk("Voc� n�o possui um grupo.");
                } else if (!isLeader()) {//NAO E LIDER
                    cm.sendOk("Voc� n�o � o l�der do grupo. Pe�a para ele falar comigo!");
                } else if (!checkPartySize()) {//NAO POSSUI A QUANTIA MINIMA
                    cm.sendOk("Seu grupo precisa ter no min�mo " + minplayers + " membros.");
                } else if (!checkPartyLevels()) {//LEVEIS INCOMPATIVEIS
                    cm.sendOk("Algu�m do seu grupo n�o atende as exig�ncias de level " + minlvl + "~" + maxlvl + ".");
                } else if (em == null) {//ERRO NO EVENTO
                    cm.sendOk("Ocorreu um erro.\r\nPor favor, relate este para algum Moderador!");
                } else if (!open){
                    cm.sendOk("Eu n�o estou disponivel no momento.");
                } else {
                    em.startInstance(cm.getParty(), cm.getChar().getMap());
                    var party = cm.getChar().getEventInstance().getPlayers();
                    cm.removeFromParty(2388017, party);
                }
                cm.dispose();
            } else if(selection == 1) {
                cm.sendOk("Apos certo tempo, diversas criaturas ir�o aparecer.\r\nA sua miss�o ser� impedir o avan�o do ataque.\r\nApos derrotar os monstros, todos receber�o recomensas! ");
                cm.dispose();
            } else if(selection == 3) {
				cm.sendOk("Completando a miss�o, voc� e seus amigos poder�o trocar as moedas douradas (#i4001129#) comigo por colares de atributos de habilidades!");
                cm.dispose();
           }
    }
}
   
  
function getPartySize(){
    if(cm.getPlayer().getParty() == null){
        return 0;
    }else{
        return (cm.getPlayer().getParty().getMembers().size());
    }
}

function isLeader(){
    return cm.isLeader();
}

function checkPartySize(){
    var size = 0;
    if(cm.getPlayer().getParty() == null){
        size = 0;
    }else{
        size = (cm.getPlayer().getParty().getMembers().size());
    }
    if(size < minplayers || size > maxplayers){
        return false;
    }else{
        return true;
    }
}

function checkPartyLevels(){
    var pass = true;
    var party = cm.getPlayer().getParty().getMembers();
    if(cm.getPlayer().getParty() == null){
        pass = false;
    }else{
        for (var i = 0; i < party.size() && pass; i++) {
            if ((party.get(i).getLevel() < minlvl) || (party.get(i).getLevel() > maxlvl) || (party.get(i).getMapid() != cm.getMapId())) {
                pass = false;
            }
        }
    }
    return pass;
}

function hasParty(){
    if(cm.getPlayer().getParty() == null){
        return false;
    }else{
        return true;
    }
}
}
*/

function start() {
cm.sendOk("Estamos preparando a CPQ para voc�,aguarde,TrueMS Staff");
}

function action(m, t, s) {
   
   
   cm.dispose();
}