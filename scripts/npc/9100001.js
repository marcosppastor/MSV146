/*
var status = 0;

function start() {
    cm.sendNext("Sou o assistente da promo��o da nossa p�gina no Facebook, para se cadastrar e concorrer a pr�mios em #rCash#k, siga os passos comigo e v� para nossa p�gina no facebook,seguir os de l�, � importante n�o esquecer de nenhum passo ou seu nome n�o ser� validado ao final da promo��o, portanto n�o se esque�a, v� para (#bFacebook.com/TrueBrMapleStory).#k");
}

function action(mode, type, selection) {
    if (mode == 0) {
        cm.sendOk("Tudo bem, voc� quem sabe..")
        cm.dispose();
    }else {
        if(mode > 0)
            status++;
        else if(mode < 0)
            cm.dispose();
        if (status == 1) {
            if (cm.getGiftLog('Promocao') >= 1 || cm.getLevel() <20) {
                cm.sendOk("Desculpe,acreditamos que voc� j� est� participando da promo��o com esta conta, ou ainda n�o possui o min�mo de n�vel 20!");
                cm.dispose();
            }else
                cm.sendYesNo("Parab�ns,voc� gostaria de se cadastrar na promo��o da nossa p�gina no Facebook #r True MapleStory#k?");
        }else if (status == 2) {
            
            cm.setBossLog('Promocao');
            cm.sendOk("Voc� se cadastrou na promo��o com sucesso, fique ligado na nossa P�gina no Facebook!#e(True MapleStory) ");
            cm.dispose();
        } else
            cm.sendOk("Tem certeza?, a promo��o vai at� o dia 29/09 as 23:59min (hor�rio de brasilia!")
    }
}

*/

/*
 * @author Marcos P
 * TrueMS - 2016
 * truems.net/
*/

function start() {
//cm.gainItem()
cm.sendOk("Ola #h #, tudo bem?");
cm.dispose();
}

function action(mode, type, selection) {
cm.dispose();
}