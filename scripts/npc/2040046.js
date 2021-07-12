/*
Robert - 2040046.js
OrbisMS - Marcos Paulo Pastor
www.orbisms.net - 2015
Arquivo revisado, melhorado e traduzido.
*/

var status = 0;
	
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
	if (status == 0 && mode == 0) {
		cm.sendNext("Entendo...\r\nDe qualquer forma, � voc� quem sabe! Se decidir voltar atr�s, basta falar comigo.");
		cm.dispose();
		return;
	} else if (status >= 1 && mode == 0) {
		cm.sendNext("Entendo...\r\nDe qualquer forma, � voc� quem sabe! Se decidir voltar atr�s, basta falar comigo.");
		cm.dispose();
		return;
	}	
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		cm.sendYesNo("Oi #h #, tudo bem? Meu nome � Robert e tenho a fun��o de aumentar a sua lista de amigos!\r\nPor acaso, voc� deseja aumenta-la?");
	} else if (status == 1) {
		cm.sendYesNo("�timo!\r\nPor uma taxa de #b240,000 mesos#k, eu posso adicionar\r\n#b5 espa�os#k a mais na sua lista de amigos. Essa quantidade adicionada � permanente!\r\nApos ler o pre�o que cobro, voc� realmente deseja pagar #b240,000 mesos#k por isso?");
	} else if (status == 2) {
		var capacity = cm.getPlayer().getBuddylist().getCapacity();
		if (capacity >= 50 || cm.getMeso() < 240000){
			cm.sendNext("Acho que voc� n�o tem a quantia de mesos suficiente, ou a sua lista de amigos j� est� com a capacidade m�xima...");
			cm.dispose();
		} else {
			var newcapacity = capacity + 5;
			cm.gainMeso(-240000);
			cm.updateBuddyCapacity(newcapacity);		
			cm.sendOk("Obrigado!\r\nGra�as a voc�, agora eu tenho bastante dinheiro e voc� tem mais espa�os para adicionar amigos!\r\nQuando voc� desejar aumentar essa lista, fale comigo.");
			cm.dispose();
			}
		}
	}
}