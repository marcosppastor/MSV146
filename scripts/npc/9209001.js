var item =-45000;
var itemprice =45000;

function start() {
	cm.sendSimple("Precisando aumentar seus #batributos temporariamente#k?, eu sou a Mimi,tenho algo para voc�,gostaria de comprar um #bAnel#k com atributos #respeciais#k por 30 dias?.Apenas 5k de NX? . Lembrando que o jogador #rn�o#k deve comprar mais de um anel, pois o mesmo n�o poder� usar, nenhum #rreembolso#k ser� feito, por tanto, aten��o! \r\n\r\n.#b #L0#Confirmar compra#l\r\n #L1#Saber mais sobre o item#l\r\n\r\n  ");
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {
     if (cm.getPlayer().getCashShop().getCash(1) >= 5000) {
			cm.sendOk("#e#dParab�ns!#n#k\r\n#dVoc� adquiriu seu item com sucesso.");
                        cm.getPlayer().getCashShop().gainCash(1, -5000); 
                       cm.gainItem (1112300,1,false,false,2592000000);

            cm.dispose();
			}
                         else if (cm.getPlayer().getCashShop().getCash(1) < 5000)  {
			cm.sendOk("#dDesculpe-me, mas voce n�o possui a quantia de NX necess�ria.");
			cm.dispose();
			}
	}
        
        else if (selection ==1){
            
           cm.sendOk("O anel � uma #bop��o#k para jogadores que est�o buscando complementar seus #batributos#k afim de usar algum item,complementar seu ataque,ou, para praticar alguma outra t�cnica em #r True MapleStory #k.");

        }
        
        
        
        }