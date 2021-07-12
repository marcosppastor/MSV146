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

/* Ms. Tan 
	Henesys Skin Change.
*/
var status = 0;
var price = 1000000;
var skin = Array(0, 1, 2, 3, 4);

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
			cm.sendSimple("Eu cuidarei do resto por voc�. Bem Ol�! Bem-vindo ao Henesys Skin-Care! Voc� gostaria de ter uma pele firme, apertada e saud�vel como a minha? o estilo de seu gosto com o #b#t5153000##k, voc� pode nos deixar cuidar do resto e ter o tipo de pele que voc� sempre quis~!\r\n#L1#Eu gostaria de comprar um #b#t5153000##k por " + price + " mesos, por favor!#l\r\n\#L2#Eu ja tenho um cupom!#l");
			} else if (status == 1) {
			if (selection == 1) {
				if(cm.getPlayer().getMeso() >= price) {
					cm.gainMeso(-price);
					cm.gainItem(5153000, 1);
					cm.sendOk("Aproveite!");
				} else {
					cm.sendOk("Voc� n�o tem mesos suficientes para comprar o cupom!");
				}
				cm.dispose();
			} else if (selection == 2) {
				cm.sendStyle("Com nossa m�quina especializada, voc� pode se ver ap�s o tratamento com anteced�ncia. Que tipo de tratamento de pele voc� gostaria de fazer? Escolha o estilo de sua prefer�ncia.", skin);
			}
		}
		else if (status == 2){
			cm.dispose();
			if (cm.haveItem(5153000) == true){
				cm.gainItem(5153000, -1);
				cm.setSkin(skin[selection]);
				cm.sendOk("Aproveite sua nova pele !");
			} else {
				cm.sendOk("Um ... voc� n�o tem o cupom de cuidados da pele que voc� precisa para receber o tratamento. Desculpe, mas receio que n�o possamos fazer isso por voc�...");
			}
		}
	}
}
