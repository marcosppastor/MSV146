function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (cm.getPlayer().getLevel()>10 && cm.getPlayer().isMarried() == 0) {
            if (!cm.haveItem(4000083,20) ) {
                if (status == 0) {
                    cm.sendNext("Hey, voc� parece que precisa de provas de amor? Hmmm est� pretendendo pedir a m�o de algu�m em casamento? Eu posso leva-las para voc�.");
                } else if (status == 1) {
                    cm.sendNext("Tudo que voc� tem a fazer e trazer-me 20 #b Blindagens de sentinela .Jr#k.");
                    cm.dispose();
                }
            } else {
                if (status == 0) {
                    cm.sendNext("Uau, voc� foi r�pido ! Aqui a prova de amor...");
                    cm.gainItem(4000083, -20)
                    cm.gainItem(4031369, 1);
                    cm.dispose();
                }
            }
        } else {
            cm.sendOk("Oi, eu sou Nana a fada amor ... e voc� quem �?");
            cm.dispose();
        }
    }
}