var fromMap = new Array(211000000,220000000,240000000);
var toMap = new Array(211040200,220050300,240030000);
var cost = new Array(45000,25000,55000);
var location;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
        if (mode == -1) {
			cm.dispose();
		} else {
			if(mode == 0 && status == 1) {
				cm.sendNext("Hmm... pense novamente. Este t�xi vale pelo servi�o! Voc� n�o ir� se arrepender!");
				cm.dispose();
				return;
			} 
			if (mode == 0 && status == 0) {
				cm.dispose();
				return;
			}
			if (mode == 1) {
				status++;
			} else {
				status--;
			}
		} 
		if(status == 0) {
        switch(cm.getPlayer().getMapId()) {
            case fromMap[0]:
                location = 0;
                break;
            case fromMap[1]:
                location = 1;
                break;
            case fromMap[2]:
                location = 2;
                break;
        }
        cm.sendNext("Ol�, como vai? Este T�xi pode lhe levar para qualquer zona perigosa de #m"+cm.getPlayer().getMapId()+"# at� #b#m"+toMap[location]+"##k no Continente de Ossyria! A Taxa de transporte de #b"+cost[location]+" meso#k pode parecer cara, mas n�o � tanto quando voc� quer se locomover com facilidade entre zonas perigosas!");
    } else if(status == 1) {
        cm.sendYesNo("#bVoc� quer pagar "+cost[location]+" meso#k e ir para #b#m"+toMap[location]+"##k?");
    } else if(status == 2) {
        if(cm.getPlayer().getMeso() < cost) {
            cm.sendNext("Voc� n�o parece ter mesos suficientes. Eu lamento muito, mas eu n�o posso ajudar a menos que voc� pague. Arrume alguns mesos ca�ando e volte aqui quando voc� tiver mesos suficientes.");
            cm.dispose();
        } else{
            cm.warp(toMap[location]);
            cm.gainMeso(-cost[location]);
            cm.dispose();
        }
    }
}  