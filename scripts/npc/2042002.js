/*
  [Monster Carnival PQ] [By Haiku01]
  Update 1: Fixed bracket errors..
*/
importPackage(Packages.server.maps);

var status = 0;
var rnk = -1;

function start() {
    status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 0 && mode == 0) {
			cm.sendOk("Tudo bem ent�o, eu espero que n�s possamos conversar mais na pr�xima vez.");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		 if (cm.getPlayer().getMapId() == 980000010) {
			if (status == 0) {
				cm.sendNext("Eu espero que voc� tinha divertido na F�lia dos Monstros!");
			} else if (status > 0) {
				cm.warp(980000000, 0);
				cm.dispose();
			}
		} else if (cm.getChar().getMap().isCPQLoserMap()) {
	        if (status == 0) {
	          if (cm.getChar().getParty() != null) {
	            var shiu = "Desculpe pela perda... No entanto, voc� foi muito bem e deu um show! De agora em diante � isso que eu espero de voc� sempre que participar, desempenho!\r\n\r\nRank do Festival dos Monstros: ";
	            switch (cm.calculateCPQRanking()) {
	              case 10:
	                shiu += "#rA#k";
	                cm.sendOk(shiu);
                        rnk = 10;
	                break;
	              case 20:
	                shiu += "#rB#k";
                        rnk = 20;
	                cm.sendOk(shiu);
	                break;
	              case 30:
	                shiu += "#rC#k";
                        rnk = 30;
	                cm.sendOk(shiu);
	                break;
	              case 40:
	                shiu += "#rD#k";
                        rnk = 40;
	                cm.sendOk(shiu);
	                break;
	              default:
	                cm.sendOk("Houve um erro com a F�lia de Monstros.");
			cm.dispose();
			break;
	            }
	          } else {
	            cm.warp(980000000, 0);
	            cm.dispose();
	          }
	        } else if (status == 1) {
		        switch (rnk) {
		            case 10:
						cm.warp(980000000, 0);
						cm.gainExp(10000);
                                                cm.getChar().setFestivalPoints(0);
						cm.dispose();
						break;
					case 20:
						cm.warp(980000000, 0);
						cm.gainExp(8500);
                                                cm.getChar().setFestivalPoints(0);
						cm.dispose();
						break;
					case 30:
						cm.warp(980000000, 0);
						cm.gainExp(7000);
                                                cm.getChar().setFestivalPoints(0);
						cm.dispose();
						break;
					case 40:
						cm.warp(980000000, 0);
						cm.gainExp(4550);
                                                cm.getChar().setFestivalPoints(0);
						cm.dispose();
						break;
					default:
						cm.warp(980000000, 0);
						cm.dispose();
						break;
				}
			}
        } else if (cm.getChar().getMap().isCPQWinnerMap()) {
	        if (status == 0) {
	            if (cm.getChar().getParty() != null) {
	                var shi = "Parab�ns pela sua vit�ria!!! Foi realmente perfeita! O grupo oposto mal pode reagir! De agora em diante � isso que eu espero de voc� sempre que participar!\r\n\r\n#bRank do Festival dos Monstros: ";
	                switch (cm.calculateCPQRanking()) {
	                    case 1:
	                        shi += "#rA#k";
	                        rnk = 1;
	                        cm.sendOk(shi);
	                        break;
	                    case 2:
	                        shi += "#rB#k";
	                        rnk = 2;
	                        cm.sendOk(shi);
	                        break;
	                    case 3:
	                        shi += "#rC#k";
	                        rnk = 3;
	                        cm.sendOk(shi);
	                        break;
	                    case 4:
	                        shi += "#rD#k";
	                        rnk = 4;
	                        cm.sendOk(shi);
	                        break;
	                    default:
	                        cm.sendOk("Houve um erro com a F�lia de Monstros.");
	                }
	            } else {
	                cm.warp(980000000, 0);
	                cm.dispose();
				}
			} else if (status == 1) {
	            switch (rnk) {
	                case 1:
	                    cm.warp(980000000, 0);
	                    cm.gainExp(30000);
                            cm.getChar().setFestivalPoints(0);
	                    cm.dispose();
	                    break;
	                case 2:
	                    cm.warp(980000000, 0);
	                    cm.gainExp(25500);
                            cm.getChar().setFestivalPoints(0);
	                    cm.dispose();
	                    break;
	                case 3:
	                    cm.warp(980000000, 0);
	                    cm.gainExp(21000);
                            cm.getChar().setFestivalPoints(0);
	                    cm.dispose();
	                    break;
	                case 4:
	                    cm.warp(980000000, 0);
	                    cm.gainExp(19550);
                            cm.getChar().setFestivalPoints(0);
	                    cm.dispose();
	                    break;
			default:
			cm.warp(980000000, 0);
			cm.dispose();
			break;
	            }
	        }
		} else {
	        if (status == 0) {
	            cm.sendSimple("Ol�, meu nome � Spieglemann, e eu sou respons�vel pela F�lia de Monstros. Eu estou tentando encontrar jogadores que est�o dispostos a lutar, por l� vive uns contra os outros em uma competi��o justa.\r\n\r\n#L0#Gostaria de participar#l\r\n#L1#O que � o F�lia de Monstros?#l\r\n#L2#Trocar MapleCoins#l");
	        } else if (status == 1) {
	            if (selection == 0) {
	                if ((cm.getLevel() > 29 && cm.getLevel() < 51) || cm.getPlayer().isGM()) {
	                    cm.getChar().saveLocation(SavedLocationType.MONSTER_CARNIVAL);
	                    cm.warp(980000000, 0);
	                    cm.dispose();
	                    return;
	                } else {
	                    cm.sendOk("Sinto muito, mas apenas os jogadores de n�vel 30~50 podem participar.");
	                    cm.dispose();
	                    return;
	                }
	            } else if (selection == 1) {
	                cm.sendOk("O que � F�lia de Monstros? Ha Ha Ha! Vamos apenas dizer que � uma experi�ncia que nunca vou esquecer! � uma batalha contra outros viajantes como voc�, e eu sei que � muito perigoso para voc� lutar entre si usando armas reais, nem eu gostaria de sugerir um ato t�o b�rbaro. N�o meu amigo, o que eu ofere�o � a competi��o. A emo��o de batalha e emo��o contra pessoas t�o fortes e motivados como a ti mesmo . Essa � aess�ncia da F�lia de Monstros. Al�m disso, voc� pode usar suas MapleCoins ganhas durante a F�lia de Monstros e obter novos itens e armas! Claro, n�o � t�o simples assim. Existem diferentes maneiras para impedir a outra parte de ca�ar monstros, e � at� voc� para descobrir como. O que voc� acha? Interessado em um pouco de competi��o amig�vel (ou n�o t�o amig�vel)?");
	                cm.dispose();
		        } else if (selection == 2) {
		            cm.sendSimple("Aqui voc� pode adquirir um colar, voc� precisa de 50 MapleCoins.\r\n#L43#Clique para ganhar!#l");
		        }
		  } else if (selection == 43) {
                             if(cm.haveItem(4001129, 50)) {
                               cm.gainItem(1122007, 1)
                               cm.gainItem(4001129, -50)
                               cm.dispose();
                   } else {
                       cm.sendOk("Voc� nao tem moedas suficiente!");
                       cm.dispose();
                   }
                  }
		}
	}
}

