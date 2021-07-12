/*
 * @author Marcos P
 * TrueMS - 2016
 * truems.net.br/
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
		cm.sendNext("Ol� novamente #h #! Por acaso, deseja sair de Ereve? Posso leva-lo de Ereve ate #bEllinia#k por apena 5.000 mesos.");
	else if (status == 1)
		cm.sendNextPrev("Estando em #bEllinia#k. voc� ira explorar regi�es novas,tome cuidado!\r\n!");
	else if (status == 2)
		cm.sendSimple(" O que deseja fazer?\r\n#b#L0#Desejo ir ate Ellinia.#l");
	else if (status == 3) {
		if (cm.getMeso() < 5000) {
			cm.sendOk("Lamento mas voc� n�o possui a quantia de mesos necess�ria.");
		}
		else {
			if (selection == 0) {
				cm.warp(101000400);
			}
		}
	}
}