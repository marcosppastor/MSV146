/* Author: Xterminator (Modified by RMZero213)
	NPC Name: 		Roger
	Map(s): 		Maple Road : Lower level of the Training Camp (2)
	Description: 		Quest - Roger's Apple
*/
importPackage(Packages.client);

var status = -1;

function start(mode, type, selection) {
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			qm.sendNext("Ol�, tudo bem? Meu nome � Roger e hoje vou lhe ensinar coisas necess�rias sobre este vasto mundo...");
		} else if (status == 1) {
			qm.sendNextPrev("Uma das coisas mais comum que acontecem, � ficarmos com a taxa de HP baixa.\r\nEu n�o quero que isso aconte�a com voc�, mas te ensinarei o que fazer em casos como este.");
		} else if (status == 2) {
			qm.sendAcceptDecline("Ent�o... Deixe-me mostrar-te!\r\nAbaracadabra ~!");
		} else if (status == 3) {
		       if (qm.c.getPlayer().getHp() >= 50) {
                        qm.c.getPlayer().setHp(25);
                        qm.c.getPlayer().updateSingleStat(MapleStat.HP, 25);
               }
        if (!qm.haveItem(2010007))
                        qm.gainItem(2010007, 1);
			qm.sendNext("Surpreso(a)? Se sua taxa de HP fica em 0, isso se torna algo preocupante. Agora, eu lhe darei a #rMa�� do Roger#k. Por favor, use-a. Voc� vai se sentir mais forte. Abra o seu invent�rio e clique duas vezes para us�-lo.\r\nEi, � muito simples para abrir o seu invent�rio. Basta pressionar #bI#k em seu teclado.");
		} else if (status == 4) {
			qm.sendPrev("Estarei lhe dando algumas ma��s, portanto, use-as quando haver necessidade! ");
		} else if (status == 5) {
			qm.forceStartQuest();
			qm.dispose();
		}
	}
}

function end(mode, type, selection) {
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			qm.sendNext("Viu como � facil de consumir o item? Simples, n�o? Voc� pode definir um #bhotkey#k no slot inferior direito.\r\nHaha, voc� nao sabia disso! certo? Ah, e se voc� � um iniciante, a taxa de HP ir� se recuperar automaticamente conforme o tempo passa. Bem, leva tempo, mas esta � uma das estrategias para os novatos.");
		} else if (status == 1) {
			qm.sendNextPrev("Tudo bem! Agora que voc� aprendeu muito, vou dar-lhe um presente. Esta � uma obriga��o para sua viagem neste vasto mundo. Por favor, use isso em casos de emergencia!");
		} else if (status == 2) {
			qm.sendNextPrev("Bom... isso � tudo que eu posso te ensinar. Eu sei que � triste, mas � hora de dizer adeus. Bem, tome cuidado, e boa sorte!\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v2010000# 3 #t2010000#\r\n#v2010009# 3 #t2010009#\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 10 exp");
		} else if (status == 3) {
                       if(qm.isQuestCompleted(1021))
                          qm.dropMessage(1,"Houve um erro!");
                else if(qm.canHold(2010000) && qm.canHold(2010009)){
                        qm.gainExp(10);
                        qm.gainItem(2010000, 3);
                        qm.gainItem(2010009, 3);
                        qm.forceCompleteQuest();
                } else
                        qm.dropMessage(1,"Seu invetario est� cheio!");
                        qm.dispose();
               }
	}
}

