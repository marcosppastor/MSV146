
/*
 * @author Marcos P
 * TrueMS - 2017
 * truems.net.br/

*/
importPackage(Packages.server.maps);
function start() {
//cm.gainItem()
cm.sendOk("Ol� #h #, Tudo bem. At� o pr�ximo Carnaval,comparecerei trazendo muitas novidades.Att True MapleStory Staff!");
cm.dispose();
}

function action(mode, type, selection) {
cm.dispose();
}

/*
var status = 0;
var rnk = 0;
var minLevel = 10;
var maxLevel = 2555;
var minJogadores = 1; //DEIXAR EM 3
var maxJogadores = 6;
 
function start() {
  status = -1;
        action(1, 0, 0);
}
 
function action(mode, type, selection) {
        if (mode == -1) {
                cm.dispose();
        } else {
                if (status >= 0 && mode == 0) {
                        cm.sendOk("Tudo bem. At� o pr�ximo Carnaval,Att Staff!");
                        cm.dispose();
                        return;
                }
                if (mode == 1)
                        status++;
                else
                        status--;
                    
	if (cm.getChar().getMap().getId() == 680000000) {	
        cm.getPlayer().getStorage().sendStorage(cm.getClient(), 9201042);
        cm.dispose();
	}		
    if (cm.getChar().getMap().getId() == 100000000) {
        if (status == 0) {
            cm.sendSimple("O que dizer do final de semana? dia lindo n�o � mesmo?...\r\nAmo poder curtir e jogar . !\r\n Nada pior que o frio para estragar tudo n�o �?, h� um monstro que deseja acabar com a nossa divers�o.\r\nEstou preocupado quanto a isso. Preciso de ajuda para resolver este problema e afastar o frio de uma vez!\r\n\r\n#L0#Desejo ajudar!#l\r\n#L1#Como posso ajudar-lhe?#l\r\n#L2#Desejo obter minha premiac�o.#l");
        } else if (status == 1) {
            if (selection == 0) {
                if (cm.getLevel()>=10 || cm.getPlayer().isGM()) {
					if (cm.getParty() == null) { 
						cm.sendOk("Voc� n�o esta em um grupo.");
						cm.dispose();
						return;
					}
					if (!cm.isLeader()) { 
						cm.sendOk("Voc� n�o � o lider do grupo.");
						cm.dispose();
					}
                    var em = cm.getEventManager("CarnavalPQ");
						if (em == null) {
	                          cm.sendOk("Este evento esta indisponivel.");
		                } else {
							  var prop = em.getProperty("state");
							  if (prop == null || prop.equals("0")) {
								  em.startInstance(cm.getParty(),cm.getChar().getMap());
								  party = cm.getChar().getEventInstance().getPlayers();
								  cm.dispose();
								  } else {
									  cm.sendOk("Existe outro grupo dentro da PQ.");
									  cm.dispose();
								  }
					    }
                } else {
                    cm.sendOk("Para participar dessa miss�o, voc� precisa estar ao menos LV. 10 .");
                    cm.dispose();
                    return;
                }
            } else if (selection == 1) {
                cm.sendOk("Como eu lhe disse, ha um monstro tentando sabotar o nosso Final de semana, e pretendendo atrapalhar nosso jogo !.\r\nEstou a procura de fortes guerreiros para ajudar-me a derrotar este monstro, a fim de salvarmos o #bO FINAL DE SEMANA#k.\r\nPara que voc� possa entrar e obter sua recompensa, ser� necess�rio ter o n�vel 10 ou superior. Voc� podera conquistar esse matando monstros ao decorrer de sua jornada.\r\nTendo o item, fale comigo, pois te levarei ate o mapa!");
                cm.dispose();
                status = 0;
        } else if (selection == 2) {
	     cm.sendSimple("Lembre-se: Voc� somente poder� duas premia��es uma equipada e outra no invent�rio caso tenha coletado o item necess�rio, derrotado o inimigo que est� a sabotar o final de semana e possuir o item dropado pelo mesmo.\r\n\r\n#L43#Fiz todos os passos. Dei-me minha recompensa!#l");
	 }
    }  else if (selection == 43) {
        if (cm.haveItem(1002980))  {
         
                    cm.sendOk("Voc� ja possui uma unidade desta premia��o.");

        }
        else {
         if(cm.haveItem(4031470 , 1 && !cm.haveItem(1002980))) {
           cm.gainItem(1002980, 1);	
           Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1,1002980 , "str", 5);
           Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1,1002980 , "dex", 5);
           Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1,1002980 , "int", 5);
           Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1,1002980 , "luk", 5);	
		   Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1,1002980 , "watk", 1);	
           Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1,1002980 , "matk", 1);	
            cm.gainItem(4031470, -1);
           cm.reloadChar();				
           cm.sendOk("Parab�ns #h #!\r\nVoc� ganhou um(a) #i1002980#.\r\n\r\n#rObs:#k Voc� so pode ter 1 unidade deste item em seu inventario. Caso adiquira mais de uma,ir� perder seu esfor�o #b#en�o havera ressarcimento algum!#n");
           cm.dispose();
           } else {
               cm.sendOk("Voc� n�o possui o item deixado pelo inimigo quando morto. Derrote-o novamente!\r\n\r\nItem necess�rio: #i4031470#");
               cm.dispose();
           }
        
      }}
  }}}
  

*/