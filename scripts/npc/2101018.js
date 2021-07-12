/*
* @autor Marcos P. Pastor
** Origens MapleStory Private Server
* AriantPQ
*/


importPackage(Packages.server.maps); 

var status = 0; 

function start() { 
    action(1, 0, 0); 
} 

function action(mode, type, selection) { 
    if (status == 0) { 
        cm.sendYesNo("Deseja ir para o #e#bColiseu de Ariant?#k#n Se sim, sera necessario estar entre o nivel #e20~30#n para participar!"); 
        status++; 
    } else { 
        if ((status == 1 && type == 1 && selection == -1 && mode == 0) || mode == -1) { 
            cm.dispose(); 
        } else { 
            if (status == 1) { 
                if(cm.getChar().getLevel() >= 20 && cm.getChar().getLevel() < 31 || cm.getChar().isGM()) { 
                    cm.getPlayer().saveLocation(SavedLocationType.ARIANT); 
                    cm.warp(980010000, 3); 
                    cm.dispose(); 
                } else { 
                    cm.sendOk("Voce nao esta entre o nivel #e20~30#n. Desculpe, voce nao pode participar."); 
                    cm.dispose(); 
                } 
            } 
        } 
    } 
}  