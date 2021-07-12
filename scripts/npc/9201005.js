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
	Nicole
-- By ---------------------------------------------------------------------------------------------
	Angel (get31720 ragezone)
-- Extra Info -------------------------------------------------------------------------------------
	Fixed by  [happydud3] & [XotiCraze]
---------------------------------------------------------------------------------------------------
**/

var status;
var x;
var hasEngageRing = false;

function start() {  
    status = -1;  
    action(1, 0, 0);  
}  

function action(mode, type, selection) {  
     if (mode == -1 || mode == 0) {
        cm.sendOk("Ent�o adeus.."); 
            cm.dispose();
			return;
    } else if (mode == 1) {
            status++;
        } else {
            status--;
        }
		var item = new Array(4031360, 4031358, 4031362, 4031364);
		for (x = 0; x < item.length && !hasEngageRing; x++) {
			if (cm.haveItem(item[x], 1))
				hasEngageRing = true;
		}
    if (status == 0) {
		var text = "Estou aqui para ajud�-los em casamentos !";
		var choice = new Array("Como eu preparo meu casamento?", "Tenho uma autoriza��o de convites de casamento e preciso de convites para os meus amigos", "Eu sou a noiva / noivo e gostaria de come�ar o casamento", "Eu sou o convidado e gostaria de entrar no casamento");
		for (x = 0; x < choice.length; x++) {
			text += "\r\n#L" + x + "##b" + choice[x] + "#l";
		}
		cm.sendSimple(text);
	} else if (status == 1) {
		switch(selection) {
			case 0:
                                    cm.sendOk ("Moony faz o anel de noivado. O anel de noivado � necess�rio durante todo o casamento,e posterior a ele para obter alguns previlegios, ent�o nunca o perca. Para convidar seus amigos para o casamento, voc� precisa me mostrar a autoriza��o para obter convites e depois lhe darei 15 Folhas de Maple de Ouro . Seus convidados precisam de uma folha de cada para entrar no casamento. Desfrute! ");				cm.dispose();
				break;
			case 1:
				if (cm.haveItem(4000313,15)) {
                    cm.sendOk ("Voc� j� possui mais que 15 Folhas Maple de Ouro. V�, entregue-a aos seus convidados antes de entrar no casamento.");					cm.dispose();
                } else if (cm.haveItem(5251100)) {
					cm.sendOk("Voc� recebeu 5 Folhas maple de Ouro.");
					cm.gainItem(4000313,5);
                                        cm.gainItem(5251100,-1)
					cm.dispose();
				} else {
					cm.sendOk("Voc� n�o tem uma autoriza��o para convites de casamento.");
					cm.dispose();
				}
				break;
			case 2:
				if (hasEngageRing) {
					//cm.warp(680000210, 2);
					cm.sendOk("Fale com o Bispo John quando estiver pronto para se casar,lembre-se de ver todos os detalhes corretamente.");
					cm.dispose();
				} else {
					cm.sendOk("Voc� n�o tem um anel de noivado.");
					cm.dispose();
				}
				break;
			case 3:
				if (cm.haveItem(4000313)) {
					cm.warp(680000210);
					cm.sendOk("Aproveite o casamento. N�o deixe cair sua Folha  Maple de Ouro ou voc� n�o poder� terminar o casamento inteiro.");
					cm.dispose();
				} else {
					cm.sendOk("Voc� n�o tem uma folha maple de Ouro");
					cm.dispose();
				}
				break;
		}
	}
}