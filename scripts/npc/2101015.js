/*
 * @author Marcos P
 * TrueMS - 2016
 * APQ
 * truems.net/
*/

var status = 0;

importPackage(Packages.client);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			apqpontos = cm.getPlayer().getAriantPontos();
			if (apqpontos < 100) {
				cm.sendOk("#h #, a sua atual #bPontua��o de Arena de Batalha#k � de #b" + apqpontos + "#k pontos.\r\nVoc� precisa possuir ao menos #b100 pontos#k para que eu possa lhe dar a Cadeira de Praia com Palmeira (#i3010018#).\r\nQuando possuir os #b100 pontos#k, volte a falar comigo.")
				cm.dispose();
				}
				if (apqpontos > 99) {
					cm.sendNext("Vejo que voc� conseguiu conquistar os #b100 pontos#k necess�rios para troca!");
					}
				} else if (status == 1) {
                                    cm.getPlayer().getCashShop().gainCash(2, 50);

                  cm.playerMessage("Voc� ganhou 50 pontos Maple como bonifica��o!")
					cm.getPlayer().gainAriantPontos(-100);
					cm.gainItem(3010018, 1);
					cm.dispose();
				}
	}
}