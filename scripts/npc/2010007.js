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
/* guild creation npc */
var status = 0;
var sel;

function start() {
    cm.sendSimple("O que voc� gostaria de fazer?\r\n#b#L0#Criar um Cl�#l\r\n#L1#Desfazer o Cl�#l\r\n#L2#Aumentar a capacidade da Cl�#l#k");
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
        if (status == 1) {
            sel = selection;
            if (selection == 0) {
                if (cm.getPlayer().getGuildId() > 0) {
                    cm.sendOk("Voc� n�o pode criar um novo Cl�, enquanto voc� estiver em um.");
                    cm.dispose();
                } else
                    cm.sendYesNo("Voc� ter� o custo de #b 1500000 mesos#k para criar um cl�. Deseja continuar?");
            } else if (selection == 1) {
                if (cm.getPlayer().getGuildId() < 1 || cm.getPlayer().getGuildRank() != 1) {
                    cm.sendOk("Voc� so pode desfazer um Cl� se voc� for o lider.");
                    cm.dispose();
                } else
                    cm.sendYesNo("Tem certeza de que quer desfazer o Cl�? Voc� n�o sera capaz de recupera-lo depois, e todo o seu GP ter� desaparecido.");
            } else if (selection == 2) {
                if (cm.getPlayer().getGuildId() < 1 || cm.getPlayer().getGuildRank() != 1) {
                    cm.sendOk("Voc� s� pode aumentar a capacidade de seu cl�, se voc� for o lider.");
                    cm.dispose();
                } else
                    cm.sendYesNo("Voc� realmente deseja aumentar a capacidade de jogadores do seu Cl� em #b5#k por #b 500000 mesos#k?");
            }
        } else if (status == 2) {
            if (sel == 0 && cm.getPlayer().getGuildId() <= 0) {
                cm.getPlayer().genericGuildMessage(1);
                cm.dispose();
            } else if (cm.getPlayer().getGuildId() > 0 && cm.getPlayer().getGuildRank() == 1) {
                if (sel == 1) {
                    cm.getPlayer().disbandGuild();
                    cm.dispose();
                } else if (sel == 2) {
                    cm.getPlayer().increaseGuildCapacity();
                    cm.dispose();
                }
            }
        }
    }
}
