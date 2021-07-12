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
	Author: Traitor, XxOsirisxX, Moogra
*/

/**
 * Dojo Entrance NPC
 */
var status = -2;
var readNotice = 0;

function start() {
    cm.sendSimple("#e< Noticia >#n\r\nSe houver algu�m que tenha a coragem de desafiar o Dojo Mu Lung, venha para o Dojo Mu Lung.  - Mu Gong -\r\n\r\n\r\n#b#L0#Desafie o Dojo de Mu Lung.#l\r\n#L1#Leia o aviso com mais detalhes.#l");
}

function action(mode, type, selection) {
    status++;
    if(mode == 0 && type == 0)
        status -= 2;
    if (mode >= 0) {
        if (selection == 1 || readNotice == 1) {
            if (status == -1) {
                readNotice = 1;
                cm.sendNext("#e< Noticia : Aceite o desafio! >#n\r\nMeu nome � Mu Gong, o dono do My Lung Dojo. Desde h� muito tempo, tenho treinado em Mu Lung at� o ponto em que minhas habilidades j� alcan�aram o pin�culo. A partir de hoje, assumirei todos e todos os candidatos ao Mu Lung Dojo. Os direitos do Dojo Mu Lung ser�o dados apenas para a pessoa mais forte. \r\n Se h� algu�m que deseje aprender comigo, venha levar o desafio a qualquer momento! Se houver algu�m que deseje me desafiar, tamb�m ser� bem-vindo. Eu o tornarei plenamente consciente da sua pr�pria fraqueza.");
            } else if (status == 0)
                cm.sendPrev("PS:Voc� pode me desafiar sozinho. Mas se voc� n�o tem esse tipo de coragem, v� em frente e chame todos os seus amigos.");
            else
                cm.dispose();
        } else {
            if (status == -1 && mode == 1) {
                cm.sendYesNo("(Uma vez que coloquei minhas m�os no quadro de avisos, uma energia misteriosa come�ou a me envolver.) \r\n\r\ nVoc� gostaria de ir ao Mu-Lung Dojo?");
            } else if (status == 0) {
                if (mode == 0) {
                    cm.sendNext("#b(Quando tirei minha m�o do quadro de avisos, a energia misteriosa  estava cobrindo meu desaparecido tamb�m.)");
                } else {
                    cm.getPlayer().saveLocation("DOJO");
                    cm.warp(925020000, 4);
                }
                cm.dispose();
            }
        }
    } else
        cm.dispose();
}