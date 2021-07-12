/*
 * @author Marcos P
 * TrueMS - 2016
 * truems.net/
*/

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1 || mode == 0)
		cm.dispose();
	if (mode == 1)
		status++;
	else
		status--;

	if (status == 0) 
		cm.sendNext("Ol� #h #, tudo bem? Eu sou a Mel e trabalho neste guich�.\r\nPor acaso, voc� ja pensou em explorar outros continentes?");
	else if (status == 1)
		cm.sendNextPrev("Caso voc� queira, eu posso te vender uma passagem para #bOrbis#k.");
	else if (status == 2)
		cm.sendSimple("Por #b6,000#k mesos, posso te vender uma passagem para Orbis!\r\n#b#L0#Desejo comprar uma passagem para Orbis (Regular).#l");
	else if (status == 3) {
		if (cm.getMeso() < 6000) {
			cm.sendOk("Lamento mas voc� n�o possui a quantia de mesos necess�ria.");
		}
		else {
			if (selection == 0) {
				cm.gainMeso(-6000);
				cm.gainItem(4031045);
				cm.sendOk("Obrigada!\r\nFale com a #bTian#k para ir ate a #bEsta��o de Orbis#k.");
			}
		}
	}
}