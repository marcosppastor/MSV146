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
		cm.sendNext("Ol� #h #, tudo bem? Eu sou o Puro e trabalho neste guich�.\r\nPor acaso, voc� ja pensou em explorar outros continentes?");
	else if (status == 1)
		cm.sendNextPrev("Caso voc� queira, eu posso levar-te para #bLith Harbor#k.");
	else if (status == 2)
		cm.sendSimple("Por #b800#k mesos, eu posso levar-te para #bLith Harbor#k!\r\nCaso voc� queira, basta falar, que eu te levo.\r\n#b#L0#Desejo ir ate #bLith Harbor#k.#l");
	else if (status == 3) {
		if (cm.getMeso() < 800) {
			cm.sendOk("Lamento mas voc� n�o possui a quantia de mesos necess�ria.");
		}
		else {
			if (selection == 0) {
				cm.gainMeso(-800);
				cm.warp(104000000, 0);
			}
		}
	}
}