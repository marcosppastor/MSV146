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
/* J.J.
	NLC VIP Eye Color Change.
*/
var status = 0;
var price = 1000000;
var colors = Array();

function start() {
    status = -1;
    action(1, 0, 0);
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
        if (status == 0) {
            cm.sendSimple("Ei, ai ~! Eu sou J.J.! Estou no comando das lentes cosm�ticas aqui na NLC Shop! Se voc� tem um #b#t5152036##k, Posso obter as melhores lentes de cosm�ticos que voc� j� teve! Agora, o que voc� gostaria de fazer??\r\n#L1#Eu quero comprar um #b#t5152036##k for " + price + " mesos, por favor!#l\r\n\#L2#Eu j� tenho um cupom!#l");
        } else if (status == 1) {
            if (selection == 1) {
                if(cm.getMeso() >= price) {
                    cm.gainMeso(-price);
                    cm.gainItem(5152036, 1);
                    cm.sendOk("Aprovete!");
                } else {
                    cm.sendOk("Voc� n�o tem mesos para comprar um cupom!");
                }
                cm.dispose();
            } else if (selection == 2) {
                if (cm.getPlayer().getGender() == 0) {
                    var current = cm.getPlayer().getFace() % 100 + 20000;
                }
                if (cm.getPlayer().getGender() == 1) {
                    var current = cm.getPlayer().getFace() % 100 + 21000;
                }
                colors = Array();
                colors = Array(current , current + 100, current + 200, current + 300, current +400, current + 500, current + 600, current + 700);
                cm.sendStyle("Com nossa m�quina especializada, voc� pode se ver ap�s o tratamento com anteced�ncia. Que tipo de lente voc� gostaria de usar? Escolha o estilo de sua prefer�ncia.", colors);
            }
        }
        else if (status == 2){
            cm.dispose();
            if (cm.haveItem(5152036) == true){
                cm.gainItem(5152036, -1);
                cm.setFace(colors[selection]);
                cm.sendOk("Aproveite suas novas lentes!");
            } else {
					cm.sendOk("Hmmm ... parece que voc� n�o tem o cupom designado ... Eu tenho medo de n�o poder cortar o seu cabelo sem isso. Eu sinto Muito...");
            }
        }
    }
}
