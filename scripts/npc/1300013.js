/*function start() {
    cm.sendSimple("#b\r\n#L0#Yeti (Requer um grupo)#l\r\n#L1#Violetta#l#k");
}

function action(mode,type,selection) {
    if (mode == 1) { //or 931000400 + selection..?
	switch(selection) {
	    case 0:
	    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
		cm.sendOk("O lider do grupo preisa estar aqui.");
	    } else {
		var party = cm.getPlayer().getParty().getMembers();
		var mapId = cm.getPlayer().getMapId();
		var next = true;
		var size = 0;
		var it = party.iterator();
		while (it.hasNext()) {
			var cPlayer = it.next();
			var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
			if (ccPlayer == null) {
				next = false;
				break;
			}
			size += (ccPlayer.isGM() ? 4 : 1);
		}	
		if (next && (cm.getPlayer().isGM() || size >= 3)) {
	    	    for(var i = 0; i < 10; i++) {
			if (cm.getMap(106021500 + i).getCharactersSize() == 0) {
		    		cm.warpParty(106021500 + i);
				cm.dispose();
		    		return;
			}
	    	    }
			cm.sendOk("Outro grupo j� esta usando este canal,tente outro...");
		} else {
			cm.sendOk("Todos os 3 ou mais membros do seu grupo precisam estar aqui");
		}
	    }
		break;
	    case 1:
		cm.warp(106021401,0);
		break;
	}
    }
    cm.dispose();
}

*/
function start() {
//cm.gainItem()
//cm.sendOk(" #h #, estamos trabalhando para liberar todos os mapas dispon�veis, Att Desenvolvedor TrueMS!!");
cm.warp(106021401);
cm.dispose();
}

function action(mode, type, selection) {
cm.dispose();
}