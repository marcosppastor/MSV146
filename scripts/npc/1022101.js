/*
 * @author Marcos P
 * TrueMS - 2016
 * truems.net/
*/


function start() {
//cm.gainItem()
cm.sendOk("Lamento informar, mas ainda n�o estamos em vespera de Natal!");
cm.dispose();
}

function action(mode, type, selection) {
cm.dispose();
}


/*
        Author: Biscuit
*/

/*
var status = 0;

function start() {
        if(cm.getMapId() == 100000000) {
        cm.sendYesNo("Voc� est� curioso(a) sobre as aventuras que Vila Feliz reservou para voc�?");
       } else if (cm.getMapId() == 200000000) {
        cm.sendYesNo("Voc� est� curioso(a) sobre as aventuras que Vila Feliz reservou para voc�?");   
       } else {
           cm.sendYesNo("Aguarde!");
       }
}

function action(mode, type, selection) {
    if(mode != 1)
        cm.dispose();
    else {
        status++;
        if(status == 1) {
            //cm.setPlayerVariable("HV_map", cm.getMapId()+"");
            cm.warp(209000000);
			//cm.sendOk("N�o estamos em epoca de natal...");
            cm.dispose();
        }
    }
}

*/