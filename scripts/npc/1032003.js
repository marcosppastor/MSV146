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

/**
-- Odin JavaScript --------------------------------------------------------------------------------
	Shane - Ellinia (101000000)
-- By ---------------------------------------------------------------------------------------------
	Unknown
-- Version Info -----------------------------------------------------------------------------------
	1.1 - Statement fix [Information]
	1.0 - First Version by Unknown
---------------------------------------------------------------------------------------------------
**/

var status = 0;
var check = 0;

function start() {
    if (cm.getLevel() < 10) {
        cm.sendOk("Voc� deve ser de um n�vel mais alto para entrar na Floresta da Paci�ncia.");
        cm.dispose();
        check = 1;
    }
    else
        cm.sendYesNo("Oi, eu sou Shane. Posso deixar voc� entrar na floresta da paci�ncia por uma pequena taxa. Voc� gostaria de entrar por #b5000#k mesos?. Entrando nela voc� pode completar a quest ou ganhar uma pequena quantia de NX ao concluir!");
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("Tudo bem, te vejo na pr�xima.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 1) {
            if (check != 1) {
                if (cm.getPlayer().getMeso() < 5000) {
                    cm.sendOk("Desculpe, mas voc� n�o parece ter mesos suficientes,m�nimo 5k!")
                    cm.dispose();
                }
                else {
                    if (cm.isQuestStarted(2050))
                        cm.warp(101000100, 0);
                    else if (cm.isQuestStarted(2051))
                        cm.warp(101000102, 0);
                    else if (cm.getLevel() >= 25 && cm.getLevel() < 50)
                        cm.warp(101000100, 0);
                    else if (cm.getLevel() >= 10)
                        cm.warp(101000104, 5);
                    cm.gainMeso(-5000);
                    cm.dispose();
                }
            }
        }
    }
}