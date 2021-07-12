/*
 * @author Marcos P
 * TrueMS - 2016
 * truems.net/
*/

var status;
var minLevel = 90;
var state;
var maxPlayers = 6;

function isLeader(){
    return cm.isLeader();
}

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
		status++;
        if (mode == 0 && status == 0) {
			cm.sendOk("At� mais!");
            cm.dispose();
            return;
        }
        if (status == 0) {
            if (cm.getPlayer().getLevel() < minLevel && !cm.getPlayer().isGM()) {
                //cm.warp(211042300);
                cm.sendOk("Volte quando estiver preparado para enfrentar o Scarlion/Targa!\r\nPara que voce possa participar, requer-se que voc� seja no minimo #eLV. 90#n.");
                cm.dispose();
                return;
            }
            cm.sendSimple("Oi #h #, eu sou a #bAldol#k, a guardi� da entrada do\r\n#eScarlion#n e #eTarga#n.\r\nO que voc� gostaria de fazer?#b\r\n#L0#Adquirir um #eSpirit of Fantasy Theme Park#n#l\r\n#L1#Abandonar a batalha contra o #eScarlion#n e #eTarga#n#l");
        }
        else if (status == 1) {
            state = selection;
            if (selection == 0) {//Participar
                cm.sendYesNo("A miss�o para obten��o de #b#eSpirit of Fantasy Theme Park#k#n foi removida. Voc� podera estar adquirindo este por apenas #e#r150000000 (150M) mesos cada.#n#k\r\nPor acaso, deseja fazer a adquiricao?");
	        } else if (selection == 1) {//Abandonar
			if (cm.getPlayer().getParty() == null) {//SEM PT
				cm.sendOk("Para que voc� possa sair, sera necess�rio estar em um grupo.");
			} else if (!cm.isLeader()) {//NÃO É LIDER
				cm.sendOk("Para que voc� possa sair, sera necess�rio que o lider do grupo fale comigo.");
			} else {
				cm.sendYesNo("Voc� realmente deseja abandonar esta batalha contra o #eScarlion#n e #eTarga#n?");
				}
			}
        }
        else if (status == 2) {
            var em = cm.getEventManager("ScargaBattle");
            if (em == null)
                cm.sendOk("Esta miss�o esta temporariamente desativada.");
            else {
                if (state == 0) { //Compra
                    if(mode != 1){
						cm.sendOk("Sem um #i4032246#, voc� n�o poder� invocar o #e#bTarga ou Scarlion.#k");
						cm.dispose();
						return;
					}
					if (cm.c.getPlayer().getMapId() == 551030200){
						if(cm.getMeso() >= 150000000 && cm.canHold(4032246)){
						cm.gainMeso(-150000000);
						cm.gainItem(4032246,1);
						cm.sendOk("#eCompra efetuada com sucesso!#n\r\n#eSaiba:#n Tendo um #i4032246#, voc� poder� invocar #e#bTarga ou Scarlion.#k");
						cm.mapMessage("[Noticia] " + cm.getPlayer().getName() + " adquiriu um Spirit of Fantasy Theme Park e pode invocar um Targa/Scarlion");
						cm.dispose();
					}else
						cm.sendOk("Voc� n�o possui #bmesos suficiente#k, ou seu invent�rio esta cheio.");
					    cm.dispose();
					}
				}
                if (state == 1) {
					if (mode < 1) {
						cm.sendOk("Por favor, decida-se.");
						cm.dispose();
					}else if (cm.getPlayer().getParty() == null) {//SEM PT
					    cm.dispose();
					} else if (!cm.isLeader()) {//NÃO É LIDER
				        cm.dispose();
					} else {
						cm.warpParty(551030100);
						//if (cm.getPlayer().getMap().getCharacters().size() < 1){
							//cm.getPlayer().getMap().killAllMonsters();
							//cm.getPlayer().getMap().resetReactors();
						//}
						cm.dispose();
					}
					/*else {
						if (cm.getPlayer().getMap().getCharacters().size() < 1){
							cm.getPlayer().getMap().killAllMonsters();
							cm.getPlayer().getMap().resetReactors();
						}
						cm.warp(551030100);
						//if (cm.getPlayer().getMap().getCharacters().size() < 2){
							//cm.getPlayer().getMap().killAllMonsters();
							//cm.getPlayer().getMap().resetReactors();
						//}
						cm.dispose();
					}
					*/
                }
            }
        }
    }
}