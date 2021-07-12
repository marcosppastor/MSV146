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
var status = -1;

function start() {
    if (cm.haveItem(4031508, 5) && cm.haveItem(4031507,5)) {
        cm.sendNext("Uau ~ Voc� conseguiu coletar 5 de cada um #b#t4031508##k e #b#t4031507##k. Ok, ent�o, eu o enviarei para o Zoo. Por favor, fale comigo novamente quando chegar l�.");
    } else {
        cm.sendYesNo("Voc� n�o completou os requisitos. Voc� tem certeza de que quer sair?");
    }
}

function action(mode, type, selection){
    status++;
    if (mode != 1) {
        if (status > 0)
            cm.warp(230000003);
        cm.dispose();
        return;
    }
    if (status == 0)
        if (cm.haveItem(4031508, 5) && cm.haveItem(4031507, 5)) {
            cm.warp(230000003);
            cm.dispose();
        } else {
            cm.sendOk("Bem, eu vou que te enviar de volta.");
            cm.warp(230000003);
            cm.dispose();
        }
    else {
        cm.warp(230000003);
        cm.dispose();
    }
}