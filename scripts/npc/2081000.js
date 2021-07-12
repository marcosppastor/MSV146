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
	Chief Tatamo - Leafre(240000000)
-- By ---------------------------------------------------------------------------------------------
	Information
-- Version Info -----------------------------------------------------------------------------------
	1.1 - Add missing column [Information]
	1.0 - First Version by Information
---------------------------------------------------------------------------------------------------
**/

var section;
var temp;
var cost;
var count;
var menu = "";
var itemID = new Array(4000226,4000229,4000236,4000237,4000261,4000231,4000238,4000239,4000241,4000242,4000234,4000232,4000233,4000235,4000243);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if(mode == -1) {
		cm.dispose();
		return;
	}
	if(mode == 0 && (status == 0 || status == 1 || status == 2)) {
		cm.dispose();
		return;
	} else if(mode == 0) {
		if(section == 0) {
			cm.sendOk("Por favor, pense com cuidado. Depois de tomar sua decis�o, avise-me.");
		} else {
			cm.sendOk("Pense nisso e, em seguida, deixe-me saber de sua decis�o.");
		}
		cm.dispose();
		return;
	}
	if(mode == 1) {
		status++;
	}
	if(status == 0) {
		cm.sendSimple("...Posso te ajudar ?\r\n#L0##bCompre as Sementes M�gicas#k#l\r\n#L1##bFa�a algo para Leafre#k#l");
	} else if(status == 1) {
		section = selection;
		if(section == 0) {
			cm.sendSimple("Voc� n�o parece ser da cidade. Como posso ajud�-lo?#L0##bEu gostaria de alguns #t4031346#.#k#l");
		} else {
			cm.sendNext("O dever do chefe � tornar a cidade mais hospitaleira para as pessoas viverem, e a realiza��o do dever exigir� muitos itens. Se voc� coletou itens em torno de Leafre, voc� est� interessado em doar eles?");
		}
	} else if(status == 2) {
		if(section == 0) {
			cm.sendGetNumber("#b#t4031346##k � um item precioso que n�o posso dar a voc� assim. Que tal me fazer um pequeno favor? Ent�o eu vou dar a voc�. Vou vender o#b#t4031346##k por #b30,000 mesos#k cada. Voc� est� disposto a fazer a compra? Quantos voc� gostaria, ent�o?",0,0,99);
		} else {
			for(var i=0; i < itemID.length; i++) {
				menu += "\r\n#L"+i+"##b#t"+itemID[i]+"##k#l";
			}
			cm.sendNext("Qual item voc� gostaria de doar?"+menu);
			cm.dispose();
		}
	} else if(status == 3) {
		if(section == 0) {
			if(selection == 0) {
				cm.sendOk("N�o posso te vender 0.");
				cm.dispose();
			} else {
				temp = selection;
				cost = temp * 30000;
				cm.sendYesNo("Comprando #b"+temp+" #t4031346#(s)#k vai lhe custar #b"+cost+" mesos#k. Tem certeza de que deseja fazer a compra?");
			}
		} else {
			temp = selection;
			if(!cm.haveItem(itemID[temp])) {
				cm.sendNext("Eu n�o acho que voc� tenha o item.");
				cm.dispose();
			} else {
				cm.sendGetNumber("Quantos #b#t"+itemID[temp]+"#k's voc� gostaria de doar?\r\n#b< Oh : #c"+itemID[temp]+"# >#k",0,0,"#c"+itemID[temp]+"#");
			}
		}
	} else if(status == 4) {
		if(section == 0) {
			if(cm.getPlayer().getMeso() < cost || !cm.canHold(4031346)) {
				cm.sendOk("Verifique e veja se voc� possui mesos suficientes para fazer a compra. Al�m disso, sugiro que voc� verifique o invent�rio etc. e veja se voc� tem espa�o suficiente para fazer a compra.");
			} else {
				cm.sendOk("Te vejo novamente~");
				cm.gainItem(4031346, temp);
				cm.gainMeso(-cost);
			}
			cm.dispose();
		} else {
			count = selection;
			cm.sendYesNo("Tem certeza de que deseja doar #b"+count+" #t"+itemID[temp]+"##k?");
		}
	} else if(status == 5) {
		if(count == 0 || !cm.haveItem(itemID[temp],count)) {
			cm.sendNext("Verifique e veja se voc� tem o suficiente do item.");
		} else {
			cm.gainItem(itemID[temp],-count);
			cm.sendNext("Muito obrigado.");
		}
		cm.dispose();
	}
}
