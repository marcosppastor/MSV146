importPackage(Packages.server.maps);

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("Ok,te vejo depois.");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("Ol�,eu tenho um barco.");
		} else if (status == 1) {
			cm.sendNextPrev("Eu posso te levar para #b Praia Florina #k por uma pequena taxa.")
		} else if (status == 2) {
			if (cm.getMeso() < 1500) {
				cm.sendOk("Voc� n�o possui mesos suficientes (1500).")
				cm.dispose();
			} else {
				cm.sendYesNo("Ent�o voc� quer pagar #b1500 mesos#k e ir para Praia florina?.Ent�o, esteja ciente de que voc� pode encontrar com alguns monstros por a�, tamb�m. Ok, voc� gostaria de dirigir-se a Praia Florina agora mesmo?");
			}
		} else if (status == 3) {
			cm.gainMeso(-1500);
			cm.getChar().saveLocation(SavedLocationType.FLORINA);
			cm.warp(110000000, 0);
			cm.dispose();
		}
	}
}