var status = 0;
var dispose = false;
function start(){
    status == 0;
    action(1, 0, 0);
}

function action(mode, type, selection){
    if(mode <= 0){
        if(!cm.getPlayer().getMap().getAllmonsters().size() == 2){
        cm.sendOk("Entendo. N�s temos grandes esperan�as com voc�, ent�o nos fa�a orgulhosos!");
        cm.dispose();
        } else {
        cm.getPlayer().getMap().killAllMonsters();
        Packages.server.events.BalrogPQ.partyLeader = "undefined";
        Packages.server.events.BalrogPQ.balrogSpawned = false;
        Packages.server.events.BalrogPQ.close();
            cm.warp(105100100);
            cm.dispose();
        }
    } else if(status == 0){
        if(cm.getPlayer().getMap().getCharacters().size() > 1){
            cm.sendYesNo("Voc� realmente vai sair desta batalha e deixar seus companheiros de viagem morrer?");
           
            dispose = false;
            status++;
        } else if(cm.getPlayer().getMap().getCharacters().size() <= 1 && cm.getPlayer().getMap().getAllmonsters().size() != 2){
            cm.sendYesNo("Se voc� � um covarde, voc� vai sair.");
            cm.killMob(8830004);
            cm.killMob(8830005);
            dispose = true;
            status++;
        } else if(cm.getPlayer().getMap().getAllmonsters().size() == 0){
            cm.sendOk("Uau! Voc� derrotou o balrog.");
            dispose = true;
            cm.getPlayer().getClient().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0, Packages.server.Events.BalrogPQ.partyLeader + "'s party has successfully defeated the Balrog! Praise to them, they finished with " + cm.getPlayer().getMap().getCharacters().size() + " players."));
            status++;
        } else {
            cm.sendYesNo("Ent�o, voc� realmente vai sair?");
            cm.killMob(8830004);
            cm.killMob(8830005);
            status++;
        }
    } else if(status == 1){
        if(dispose){
        cm.getPlayer().getMap().killAllMonsters();
        Packages.server.events.BalrogPQ.partyLeader = "undefined";
        Packages.server.events.BalrogPQ.balrogSpawned = false;
        Packages.server.events.BalrogPQ.close();
        }
        cm.warp(105100100);
        cm.dispose();
    }
}  