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
/*9201091 - Ames
 *@author Moogra
*/

/*
 * @author Marcos P
 * TrueMS - 2016
 * truems.net/
*/

function start() {
//cm.gainItem()
cm.sendOk("Desejando se casar ? \r\n \r\n #r Leia com aten��o todos os passos #k \r\n\r\n 1� Voc� vai precisar fazer um anel com o NPC #rmoony#k, e entrega-lo para sua parceira\r\n\r\n 2�Ap�s ambos estarem com o anel, o noivo dever� ir para a area de ca�a de henesys 3 e falar com os Pais,completar a pequena miss�o da prova de amor e coletar a ben��o dos pais.\r\n\r\n 3� Troque a ben��o dos pais com o NPC #rBispo john#k pela permiss�o do oficial, ela � a autoriza��o para voc� se casar.\r\n\r\n 4� Compre o cupom de casamento capela ou catedral chique na #rLOJA#k (depende do gosto),estando em grupo com a parceira o noivo como lider clique nao npc #rBispo John #k e comece o casamento.\r\n\r\n #bDentro do casamento #k \r\n\r\n1� No primeiro mapa voc�s devem apenas esperar zerar o rel�gio, � o mapa de entrada. \r\n\r\n2� No segundo mapa voc�s devem ambos clicar no #rBispo John #k e aceitar os termos de casamento clicando em sim, ap�s ambos aceitarem, aparecer� a mensagem de que voc�s foram casados, espere o tempo terminar.\r\n\r\n3� Neste mapa voc� estar� no mapa das fotos, onde h� um enorme bolo, tire fotos, guarde lambran�as,aguarde o tempo passar.\r\n\r\n4� Neste mapa clique na npc e colete os drops dos mobs para prosseguir para o b�nus, quanto mais r�pido for,mais tempo ficar� no b�nus.\r\n\r\n\r\n\r\n Bom casamento!");
cm.dispose();
}

function action(mode, type, selection) {
cm.dispose();
}