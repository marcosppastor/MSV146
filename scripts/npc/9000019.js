/*
 * @author Marcos P
 * TrueMS - 2016
 * truems.net.br/
*/


function start() {
	cm.sendSimple("#h #, tudo bem?\r\nPor favor, escolha uma das op��es abaixo:\r\n#L0#Pedra de Invoca��o (#i4006001#)\r\n#b(100 pedras por 500.000 mesos)#k\r\n#k#l\r\n#L1##bPedra M�gica (#i4006000#)\r\n#b(100 pedras por 500.000 mesos)#k#l\r\n#L2##rPo��o cura tudo (#i2022178#)\r\n#b(100 po��es por 300.000 mesos)#k#l\r\n");
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {
		if ((cm.getMeso() >= 500000)) {
			//.sendOk("#e#dPronto!#n#k\r\n#dSeu item foi comprado com sucesso.");
			cm.gainMeso(-500000);
            cm.gainItem(4006001, 100);	
            cm.dispose();
			}
			else if (!cm.getMeso() <= 500000) {
			//cm.sendOk("#dLamento, mas voc� n�o possui a quantia de mesos exigida.");
			cm.dispose();
			}
	}
		if (selection == 1) {
		if ((cm.getMeso() >= 500000)) {
			//cm.sendOk("#e#dPronto!#n#k\r\n#dSeu item foi comprado com sucesso.");
			cm.gainMeso(-500000);
            cm.gainItem(4006000, 100);
            cm.dispose();
			}
			else if (!cm.getMeso() <= 500000) {
			//cm.sendOk("#dLamento, mas voc� n�o possui a quantia de mesos exigida.");
			cm.dispose();
			}
	}
		if (selection == 2) {
		if ((cm.getMeso() >= 300000)) {
			//cm.sendOk("#e#dPronto!#n#k\r\n#dSeu item foi comprado com sucesso.");
			cm.gainMeso(-300000);
            cm.gainItem(2022178, 100);
            cm.dispose();
			}
			else if (!cm.getMeso() <= 300000) {
			//cm.sendOk("#dLamento, mas voc� n�o possui a quantia de mesos exigida.");
			cm.dispose();
		    }
			
	}
}

