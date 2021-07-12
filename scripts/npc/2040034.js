/*
 * @author Marcos P
 * NPC = Red Sign
 * TrueMS - 2016
 * truems.net/
*/


var status = 0;
var minlvl = 35;
var maxlvl = 51;
var minplayers = 1;
var maxplayers = 6;
var time = 60;//Tempo em minutos.
var open = true;


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }else if (mode == 0){
        cm.dispose();
    }else{
        if (mode == 1)
            status++;
        else
            status--;
        var em = cm.getEventManager("LudiPQ");
        if (status == 0) {
            cm.sendNext("Ol�, tudo bem?\r\nEu fa�o o intermedio para que voc� possa participar da Miss�o de Ludibrium!\r\nVoc� tem interesse em participar?");
        }else if (status == 1){
            if (hasParty() == false) {//NO PARTY
                cm.sendOk("Este lugar e cheio de objetos e monstros perigosos, por isso n�o posso deixa-lo prosseguir sozinho. Se voc� estiver interessado em nos salvar e trazer a paz de volta para Ludibrium, voc� ter� de derrotar uma poderosa criatura que reside no topo. Reuna um grupo de no minimo 5 pessoas, e salve Ludibrium");
                cm.dispose();
            }else if (isLeader() == false) {//NOT LEADER
                cm.sendOk("Se voc� quiser prosseguir, pe�a para que o #blider do seu grupo#k fale comigo.");
                cm.dispose();
            }else if (checkPartyLevels() == false){//WRONG LEVELS
                cm.sendOk("Por favor, verifique se todos os membros do seu grupo est�o entre os niveis de #b" + minlvl + "~" + maxlvl)
                cm.dispose();
            }else if (checkPartySize() == false){//PARTY SIZE WRONG
                cm.sendOk("Seu grupo n�o consiste em #b" + minplayers + "~" + maxplayers + "#k, portando, voc� n�o pode prosseguir para com a quest. Por favor, arrume seu grupo e fale comigo novamente.");
                cm.dispose();
            }else if (em == null){//EVENT ERROR
                cm.sendOk("ERROR IN EVENT");
                cm.dispose();
            }else if (open == false){//MANUALLY CLOSED
                cm.sendOk("Lamento, mas a Miss�o de Ludribrium ja possui #rparticipantes!#k");
                cm.dispose();
            }else{//CAN START EVENT
                cm.sendOk("Otimo!\r\nVamos dar inicio a Miss�o de Ludibrium!\r\nPreprare-se, pois a miss�o agora est� #baberta!#k");
            }
        }else if (status == 2){//START EVENT
            em.startInstance(cm.getParty(),cm.getChar().getMap());
            var eim = cm.getChar().getEventInstance();
            //var party = eim.getPlayers();
			var party = cm.getPartyMembers();
            cm.removeAll(4001022);//Item to Remove
            cm.dispose();
        }
    }
}
	

function getPartySize(){
    if(cm.getPlayer().getParty() == null)
        return 0;
    return (cm.getPlayer().getParty().getMembers().size());
    
}

function isLeader(){
    if(cm.getParty() == null)
        return false;
    return cm.isLeader();
}

function checkPartySize(){
    var size = 0;
    if(cm.getPlayer().getParty() == null)
        size = 0;
    else
        size = (cm.getPlayer().getParty().getMembers().size());
    if(size < minplayers || size > maxplayers)
        return false;
    return true;
}

function checkPartyLevels(){
    var pass = true;
    var party = cm.getPlayer().getParty().getMembers();
    if(cm.getPlayer().getParty() == null)
        pass = false;
    else{
        for (var i = 0; i < party.size() && pass; i++) {
            if ((party.get(i).getLevel() < minlvl) || (party.get(i).getLevel() > maxlvl) || (party.get(i).getMapId() != cm.getMapId()))
                pass = false;
            
        }
    }
    return pass;
}

function hasParty(){
    if(cm.getPlayer().getParty() == null)
        return false;
    return true;
}

					
