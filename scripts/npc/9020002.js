/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/**
-- Odin JavaScript --------------------------------------------------------------------------------
	Nella - Hidden Street : 1st Accompaniment
-- By ---------------------------------------------------------------------------------------------
	Xterminator
-- Version Info -----------------------------------------------------------------------------------
	1.0 - First Version by Xterminator
---------------------------------------------------------------------------------------------------
**/

var status;

function start() {
    status = -1;
    action(1,0,0);
}

function action(mode, type, selection){
    if (mode == 1)
        status++;
    else {
        cm.dispose();
        return;
    }
    var mapId = cm.getPlayer().getMapId();
    if (mapId == 103000890) {
        if (status == 0) {
            cm.sendOk("At� a proxima.");
        } else {
            cm.getPlayer().changeMap(970000102, cm.getClient().getChannelServer().getMapFactory().getMap(970000102).getRandomSpawnpoint());
            cm.removeAll(4001007);
            cm.removeAll(4001008);
            cm.dispose();
        }
    } else {
        if (status == 0) {
            var outText = "Caso saia deste mapa, voc� n�o podera voltar. Voc� realmente deseja sair?";
            if (mapId == 103000805) {
                outText = "Voc� esta pronto para sair deste mapa?";
            }
            cm.sendYesNo(outText);
        } else if (mode == 1) {
            var eim = cm.getPlayer().getEventInstance(); // Remove them from the PQ!
            if (eim == null)
                cm.warp(970000102, "st00"); // Warp player
            else if (cm.isLeader()) {
                //cm.getEventManager("KerningPQ").setProperty("KPQOpen" , "true");
                eim.disbandParty();
            }
            else
                eim.leftParty(cm.getPlayer());
            cm.dispose();
        }
    }
}