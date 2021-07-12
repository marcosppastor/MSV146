/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
		       Matthias Butz <matze@odinms.de>
		       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
/* 
 * @Author TheRamon
 * 
 * Sharen III's Soul, Sharenian: Sharen III's Grave (990000700)
 * 
 * Guild Quest - end of stage 4
 */

var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            cm.dispose();
        if (status == 0) {
            if (cm.getPlayer().getEventInstance().getProperty("leader").equals(cm.getPlayer().getName())) {
                if (cm.getPlayer().getEventInstance().getProperty("stage4clear") != null && cm.getPlayer().getEventInstance().getProperty("stage4clear").equals("true"))
                {
                    cm.sendOk("Depois do que pensei que seria um sono imortal, finalmente encontrei algu�m que salvar� Sharenian. Eu realmente posso descansar em paz agora.");
                    cm.dispose();
                }
                else {
                    var prev = cm.getPlayer().getEventInstance().setProperty("stage4clear","true",true);
                    if (prev == null) {
                        cm.sendNext("Depois do que pensei que seria um sono imortal, finalmente encontrei algu�m que salvar� Sharenian. Este velho agora abrir� o caminho para voc� terminar a miss�o." + mode);
                    }
                    else {//if not null, was set before, and Gp already gained
                    cm.sendOk("Depois do que pensei que seria um sono imortal, finalmente encontrei algu�m que salvar� Sharenian. Eu realmente posso descansar em paz agora.");
                        cm.dispose();
                    }
                }
            }
            else
            {
                if (cm.getPlayer().getEventInstance().getProperty("stage4clear") != null && cm.getPlayer().getEventInstance().getProperty("stage4clear").equals("true"))
                    cm.sendOk("Depois do que pensei que seria um sono imortal, finalmente encontrei algu�m que salvar� Sharenian. Eu realmente posso descansar em paz agora.");
                else
                    cm.sendOk("Preciso que o l�der da sua festa fale comigo, ningu�m mais.");
                cm.dispose();
            }
        }
        else if (status == 1) {
            cm.getGuild().gainGP(30);
            cm.getPlayer().getMap().getReactorByName("ghostgate").hitReactor(cm.getClient());
            cm.showEffect("quest/party/clear");
            cm.playSound("Party1/Clear");
            cm.dispose();
        }
    }
}