/*huegm
function start() {
	cm.sendSimple("#e#dOl�, tenho algo para voc�,anda cansado de andar por ai? seria bom sentarum pouco e ralaxar,poderia fazer uma cadeira para voc� caso me de 1 parafuso e uma madeira \r\n#d#L0#Fazer cadeira#l\!");
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {
		if (cm.haveItem(4031161) && cm.haveItem(4031161)) {
			cm.sendOk("#e#dUAL!#n#k\r\n#dagora voc� pode sentar e relaxar aonde quiser.");
			cm.gainExp(50);
            
            cm.dispose();
			}
			else if (cm.haveItem(3010000) || cm.getPlayer().getLevel() >=7 ) {
			cm.sendOk("#dLamento, mas voc� j� completou minha miss�o ou possui um n�vel superior ou igual 7.");
			cm.dispose();
			}
	}
		
              else  if (selection == 1) {
		
			cm.sendOk("#bOs Ap's Resets s�o usados para resetarem Atributos colocados de forma errada ou para t�cnica de wash!#n#k\r\n");
			cm.dispose();
}

else if (selection == 2) {
		
	cm.dispose();
}

if (selection==3){
    
    if((cm.getMeso() >=45000)){
    cm.sendOk("#e#dParab�ns!#n#k\r\n#dVoc� adquiriu seus itens com sucesso.");
    cm.jogador.getCashShop().gainCash(-45000);
    cm.gainItem(5050000,30);
    cm.dispose();
    
    }
}
   else if (!cm.getCash(1) <= 45000) {
			cm.sendOk("#dLamento, mas voce n�o possui a quantia de cash necess�ria.");
			cm.dispose();
			}
}

*/