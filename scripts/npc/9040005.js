var status = -1;

function action(mode, type, selection) {
    if (mode != 1) {
	cm.sendOk("Boa sorte em terminar a Miss�o de Cl�!");
	cm.dispose();
	return;
    }
status++;
    if (status == 0) {
	if (cm.isPlayerInstance()) {
		cm.sendSimple("O que voc� gostaria de fazer? \r\n #L0#Sair da Miss�o de Cl�#l");
	} else {
		cm.sendOk("Desculpe, mas eu n�o posso fazer nada por voc�!");
		cm.dispose();
	}
    }
    else if (status == 1) {
	cm.sendYesNo("Tem certeza de que quer fazer isso? Voc� n�o sera capaz de voltar!");
    }
    else if (status == 2) {
	if (cm.isPlayerInstance()) { 
		cm.getPlayer().getEventInstance().removePlayer(cm.getPlayer());
	}
	cm.dispose();
	return;
    }
}
