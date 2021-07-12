/*
 * Avanço de Classe - Cygnus
 * Feito por Marcos P
 * OrbisMS - 2015
 * http://orbisms.net/
 */
 
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
		qm.sendNext("Olha so... Voce realmente deseja negar minha proposta? Com a minha ajuda, garanto que voce saira deste lugar, e saira mais forte do que esta!");
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            qm.sendNext("Bem vindo a Ereve! Espera... quem � voc�? Oh, voc� � o #b#h ##k! \r\nBom conhece-lo, pois eu estava esperando por voc�. Voc� deseja se tornar um Cygnus Knight, certo? Antes de tudo, prazer, meu nome e Kimu e atualmente recruto novos jogadores para a Empress Cygnus.");
        } else if (status == 1) {
            qm.sendNextPrev("Caso voc� fa�a parte dos Cygnus Knight, tera de fazer missoes e cumprir ordens, tudo para ficar forte e proteger quem for preciso. Ao longo da sua aventura, alguns dos meus irm�os ir�o lhe ajudar com #bcoisas basicas#k, tudo bem?");
        } else if (status == 2) {
            qm.sendOk("Ah, antes que eu esqueca... Estou botando f� em voc�!");
        } else if (status == 3) {
            qm.sendAcceptDecline("Voc� gostaria de conhecer #bKizan#k, e aprender a Cacar?");
        } else if (status == 4) {
            qm.forceStartQuest();
            qm.guideHint(2);
            qm.dispose();
        }
    }
}

function end(mode, type, selection) {
    status++;
    if (mode != 1) {
        qm.dispose();
    } else {
        if (status == 0) {
            qm.sendNext("Voc� � o Novato que meu irm�o #bKimu#k enviou? Prazer em conhece-lo! Eu sou Kizan. Por meu irm�o ter gostado e colocado f� em voc�, te ajudarei na sua aventura, dando-lhe alguns equipamentos e items gerais.\r\n\r\n#fUI/UIWindow.img/Quest/reward# \r\n\r\n#v2000020# #z2000020# \r\n#v2000021# #z2000021# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0#15 exp");
        } else if (status == 1) {
           if(qm.canHold(2000020) && qm.canHold(2000021)){
				if(!qm.isQuestCompleted(21010)) {		
					//qm.gainItem(2000020, 5);
					//qm.gainItem(2000021, 5);
					qm.gainExp(15);
				}
				qm.guideHint(3);
				qm.forceCompleteQuest();
			} else 
				qm.dropMessage(1, "Seu invent�rio est� cheio");
				
				qm.dispose();        
        }
    }
}