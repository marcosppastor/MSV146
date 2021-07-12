/*
 * @author Marcos P. Pastor
 * TrueMS - 2017
 * truems.net.br/
*/

var status = 0;

function start() {
    cm.sendYesNo("Ol� #h #, como vai? Por acaso, voc� quer retirar sua bonifica��o de #e#b30.000 de NX#k#n que foi prometido aos novos jogadores?");
}

function action(mode, type, selection) {
    if (mode == 0) {
        cm.sendOk("Tudo bem. Quando mudar de ideia, saiba que estarei aqui!")
        cm.dispose();
    }else {
        if(mode > 0)
            status++;
        else if(mode < 0)
            cm.dispose();
        if (status == 1) {
            if (cm.getCashBonificacao('Bonifica��oCash') >= 1 || cm.getLevel() <70) {
                cm.sendOk("Para retirar a sua bonifica��o de #e#b30.000 de NX#k#n, � preciso que voc� esteja no m�nimo no LV. 70.");
                cm.dispose();
            } else
                cm.sendOk("Recompensa retirada.\r\nObrigado pelo apoio!");
        } else if (status == 2) {
            cm.modifyNX(30000, 1);
            cm.setCashLog('Bonifica��oCash');
            //cm.sendOk("Pr�mio retirado com sucesso!");
            cm.dispose();
        } else
            cm.sendOk("Tudo bem, darei a outro jogador sua recompensa...")
    }
}