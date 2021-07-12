var status = -1;

function start(mode, type, selection) {
	if (mode == 0 && type == 0) {
		status--;
	} else if (mode == -1) {
		qm.dispose();
		return;
	} else {
		status++;
	}
	if (status == 0) {
        qm.sendNext("N�o h� muito registro dos her�is que lutaram contra o Mago Negro. Mesmo no Livro da Profecia, a �nica informa��o dispon�vel � que havia cinco deles. N�o h� nada sobre quem eram ou o que eles pareciam. Existe alguma lembran�a? Nada mesmo?", 8);
    } else if (status == 1) {
		qm.sendNextPrev("Eu n�o me lembro de nada..", 2);
	} else if (status == 2) {
		qm.sendNextPrev("Como eu esperava. Claro, a maldi��o do Black Mage foi forte o suficiente para acabar com sua mem�ria. Mas mesmo que seja o caso, deve haver um ponto em que o passado ir� descobrir, especialmente agora que estamos certos de que voc� � um dos her�is. Eu sei que voc� perdeu sua armadura e arma durante a batalha, mas ... Oh, sim, sim. Eu quase esqueci! Sua #bArma#k!", 8);
	} else if (status == 3) {
		qm.sendNextPrev("Minha arma?", 2);
	} else if (status == 4) {
		qm.sendNextPrev("Encontrei uma arma incr�vel enquanto cavava por blocos de gelo um tempo atr�s. Achei que a arma pertencia a um her�i, ent�o eu a trouxe Para a cidade e colocou-o em algum lugar no centro da cidade. Voc� n�o viu isso?? #bThe #p1201001##k... \r\r#i4032372#\r\rEla se parece com isso...", 8);
	} else if (status == 5) {
		qm.sendNextPrev("Penso nisso, eu vi uma #p1201001# na cidade.", 2);
	} else if (status == 6) {
		qm.sendAcceptDecline("Sim � isso. De acordo com o que foi gravado, a arma de um her�i reconhecer� o seu propriet�rio leg�timo, e se voc� � o her�i que usou o #p1201001#, o #p1201001# vai reagir quando voc� o pegar #p1201001#. Please go find the #b#p1201001# e clique nele.#k");
	} else if (status == 7) {
		if (mode == 0 && type == 15) {
			qm.sendNext("O que est� parando voc�? Eu prometo que n�o ficarei desapontado, mesmo que o #p1201001# N�o mostra nenhuma rea��o a voc�. Por favor, apressar-se l� e pegar o #p1201001#. apenas #bclick#k nele.", 8);
		} else {
			qm.forceCompleteQuest();
			qm.sendOk("Se o #p1201001# Reage para voc�, ent�o saberemos que voc� � #bAran#k, O her�i que exercia uma #p1201001#.", 8);
			qm.showIntro("Effect/Direction1.img/aranTutorial/ClickPoleArm");
		}
		qm.dispose();
	}
}