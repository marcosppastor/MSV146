/*
 * @autor JS-Maple
 *

importPackage(Packages.server.maps);
importPackage(Packages.server.life)
importPackage(Packages.tools)

var status = -1;
var partyss;
var items = Array(2000001, 2000002, 2000003, 2000004, 2000005, 2000006);
var equips = Array(1002850,1002728 , 1322065,1012011,1012012,1012013,1012014,1012015,1012016,1012017,1012018,1012019,1012020,1072427,1072428,1072429,1072430,1072431,1072432);


function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
		return;
	}
	status--;
    }
    switch(cm.getPlayer().getMapId()) {
	case 889100100: 
    	if (status == 0) {
	        cm.sendSimple("Ol�, eu sou o Esp�rito da Neve.#b\r\n\r\n#L0#Ir para o Boneco de Neve - F�cil (Lvl. 10)#l\r\n#L1#Ir para o Boneco de Neve - M�dio (Lvl. 30)#l\r\n#L2#Ir para o Boneco de Neve - Dif�cil (Lvl. 70)#l");
    	} else if (status == 1) {
	        if (selection == 0) {
                    if(cm.getPlayer().getLevel() > 9 && cm.getPlayer().getLevel() < 31 || cm.getPlayer().isGM()) {
		        cm.warp(889100000,0); 
		        cm.dispose();
                    } else {
                        cm.sendOk("Voc� deve estar entre lv. 10 ~ 30.");
                        cm.dispose();
                    }
                } else if (selection == 1) {
                        if(cm.getPlayer().getLevel() > 29 && cm.getPlayer().getLevel() < 71 || cm.getPlayer().isGM()) {
			cm.warp(889100010,0); 
		        cm.dispose();
			} else {
                          cm.sendOk("Voc� deve estar entre lv. 30 ~ 70.");
                          cm.dispose();
                        } 
                    } else if (selection == 2) {
                        if(cm.getPlayer().getLevel() >= 70 || cm.getPlayer().isGM()) {
			cm.warp(889100020,0); 
		        cm.dispose();
		      } else {
                         cm.sendOk("Voc� deve acima ou igual ao lv. 70");
                     } 
		}
            }
	    break;
	case 889100000:
        if (status == 0) {
	        cm.sendSimple("Ol�, eu sou o Esp�rito da Neve!#b\r\n\r\n#L0#Eu quero batalhar contra o Boneco de Neve!#l");
    	    } else if (status == 1) {
		    var s = ((cm.getMapId() % 100) / 10) | 0;
   		    var em = cm.getEventManager("NPQFacil");
    		    if (em == null) {
			cm.sendOk("Este evento est� desabilitado!");
			cm.dispose();
			return;
    		    }
		    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
			cm.sendOk("Fale com o l�der para falar comigo!");
		    } else {
			var party = cm.getPlayer().getParty().getMembers();
			var mapId = cm.getPlayer().getMapId();
			var next = true;
			var size = 0;
			var it = party.iterator();
			while (it.hasNext()) {
				var cPlayer = it.next();
				var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
				if (ccPlayer == null || ccPlayer.getLevel() < (s == 0 ? 10 : (s == 1 ? 30 : 70))) {
					next = false;
					break;
				}
				size++;
			}	
			if (next && size >= 1) {
		    		if (em.getInstance("NPQFacil" + s) == null) {
					em.startInstance(cm.getParty(),cm.getChar().getMap());
		    		} else {
					cm.sendOk("Outro grupo j� entrou neste canal.");
		    		}
			} else {
				cm.sendOk("Todos os membros de seu grupo devem estar aqui.");
			}
		    }
	        cm.dispose();
            }
	    break;
	case 889100010:
         if (status == 0) {
	        cm.sendSimple("Ol�, eu sou o Esp�rito da Neve!#b\r\n\r\n#L0#Eu quero batalhar contra o Boneco de Neve!#l");
    	    } else if (status == 1) {
		    var s = ((cm.getMapId() % 100) / 10) | 0;
   		    var em = cm.getEventManager("NPQMedio");
    		    if (em == null) {
			cm.sendOk("Este evento est� desabilitado!");
			cm.dispose();
			return;
    		    }
		    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
			cm.sendOk("Fale com o l�der para falar comigo!");
		    } else {
			var party = cm.getPlayer().getParty().getMembers();
			var mapId = cm.getPlayer().getMapId();
			var next = true;
			var size = 0;
			var it = party.iterator();
			while (it.hasNext()) {
				var cPlayer = it.next();
				var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
				if (ccPlayer == null || ccPlayer.getLevel() < (s == 0 ? 10 : (s == 1 ? 30 : 70))) {
					next = false;
					break;
				}
				size++;
			}	
			if (next && size >= 1) {
		    		if (em.getInstance("NPQMedio" + s) == null) {
					em.startInstance(cm.getParty(),cm.getChar().getMap());
		    		} else {
					cm.sendOk("Outro grupo j� entrou neste canal.");
		    		}
			} else {
				cm.sendOk("Todos os membros de seu grupo devem estar aqui.");
			}
		    }
	        cm.dispose();
            }
	    break;
	case 889100020:
    	    if (status == 0) {
	        cm.sendSimple("Ol�, eu sou o Esp�rito da Neve!#b\r\n\r\n#L0#Eu quero batalhar contra o Boneco de neve!#l");
    	    } else if (status == 1) {
		    var s = ((cm.getMapId() % 100) / 10) | 0;
   		    var em = cm.getEventManager("NPQDificil");
    		    if (em == null) {
			cm.sendOk("Este evento est� desabilitado!");
			cm.dispose();
			return;
    		    }
		    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
			cm.sendOk("Fale com o l�der para falar comigo!");
		    } else {
			var party = cm.getPlayer().getParty().getMembers();
			var mapId = cm.getPlayer().getMapId();
			var next = true;
			var size = 0;
			var it = party.iterator();
			while (it.hasNext()) {
				var cPlayer = it.next();
				var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
				if (ccPlayer == null || ccPlayer.getLevel() < (s == 0 ? 10 : (s == 1 ? 30 : 70))) {
					next = false;
					break;
				}
				size++;
			}	
			if (next && size >= 1) {
		    		if (em.getInstance("NPQDificil" + s) == null) {
					em.startInstance(cm.getParty(),cm.getChar().getMap());
		    		} else {
					cm.sendOk("Outro grupo j� entrou neste canal.");
		    		}
			} else {
				cm.sendOk("Todos os membros de seu grupo devem estar aqui.");
			}
		    }
	        cm.dispose();
            }
	    break;
	case 889100001:
	case 889100011:
	case 889100021:
		if (cm.getPlayer().getEventInstance() == null || !cm.isLeader()) {
			cm.sendOk("Por favor, eu preciso do seu l�der.");
		} else {
			  if (cm.getPlayer().getMap().countMonster(9500317 ) > 0 || cm.getPlayer().getMap().countMonster(9500318 ) > 0 || cm.getPlayer().getMap().countMonster(9500319 ) > 0) {
				cm.sendOk("Por favor, elimine o boneco de neve antes que o tempo se esgote!");
			} else {
                            	var eim = cm.getChar().getEventInstance();
                                var mf = eim.getMapFactory();
				map = mf.getMap(cm.getMapId() + 1);
				partyss = eim.getPlayers();
                                var random = Math.floor(Math.random() * items.length);
                                var randome = Math.floor(Math.random() * equips.length);
				var s = ((cm.getMapId() % 100) / 10) | 0;
				cm.givePartyExp((s == 0 ? 2500 : (s == 1 ? 7500 : 20000)), partyss);
                                cm.givePartyItems(items[random], 20, partyss);
                                cm.givePartyItems(equips[random], 1, partyss);

                                for (var i = 0; i < partyss.size(); i++) {
					partyss.get(i).changeMap(map, map.getPortal(0));
					eim.unregisterPlayer(partyss.get(i));
				 }
				eim.dispose();
				cm.dispose();
			}
		}
		cm.dispose();
		break;
    }
}

*/

/*
 * @author Marcos P
 * TrueMS - 2016
 * truems.net/
*/

function start() {
//cm.gainItem()
cm.sendOk("Ola #h #, tudo bem?");
cm.dispose();
}

function action(mode, type, selection) {
cm.dispose();
}