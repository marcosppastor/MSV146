var status = 0;
var maps = [104000000, 102000000, 100000000, 101000000, 103000000];
var cost = [1000, 1000, 1000, 800, 1000];
var selectedMap = -1;


function start() {
    cm.sendNext("Ol�, eu dirijo o T�xi. Se voc� quiser ir de uma cidade a outra com seguran�a e rapidez, ent�o pegue nosso t�xi. N�s iremos lev�-lo ao seu destino com um pre�o acess�vel.");
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status == 1 && mode == 0) {
            cm.dispose();
            return;
        } else if (status >= 2 && mode == 0) {
            cm.sendNext("H� muito a ver nesta cidade tamb�m. Volte e encontre-nos quando precisar ir a uma cidade diferente.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 1) {
            var selStr = "";
            if (cm.getJobId() == 0)
                selStr += "N�s temos um desconto especial para a classe aprendiz.";
            selStr += "Escolha o seu destino, pois as taxas ir�o mudar de lugar para lugar.#b";
            for (var i = 0; i < maps.length; i++)
                selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + (cm.getJobId() == 0 ? cost[i] / 10 : cost[i]) + " mesos)#l";
            cm.sendSimple(selStr);
        } else if (status == 2) {
            cm.sendYesNo("Voc� n�o tem mais nada para fazer aqui, hein? Voc� realmente quer ir para #b#m" + maps[selection] + "##k? Vai custar-lhe #b"+ (cm.getJobId() == 0 ? cost[selection] / 10 : cost[selection]) + " mesos#k.");
            selectedMap = selection;
        } else if (status == 3) {
            if (cm.getMeso() < (cm.getJobId() == 0 ? cost[selection] / 10 : cost[selection])) {
                cm.sendNext("Voc� n�o tem mesos suficientes. Desculpe por dizer isso, mas sem eles, voc� n�o poder� utilizar o t�xi.");
                cm.dispose();
                return;
            }
            if (cm.getJobId() == 0) {
            	mesos = -cost[selectedMap] / 10;
            } else {
            	mesos = -cost[selectedMap];
            }
            cm.gainMeso(mesos);
            cm.warp(maps[selectedMap], 0);
            cm.dispose();
        }
    }
}