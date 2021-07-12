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

/* Dr. Lenu
	Henesys Random/VIP Eye Color Change.
*/
var status = 0;
var beauty = 0;
var regprice = 1000000;
var vipprice = 1000000;
var colors = Array();

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (mode == 0 && status == 0)
            cm.dispose();
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0)
            cm.sendSimple("Oi, h� ~! Eu sou a Dr. Lenu, respons�vel pelas lentes de cosm�ticos aqui na Henesys Plastic Surgery Shop! Com #b#t5152010##k ou #b#t5152013##k, Voc� pode nos deixar cuidar do resto e ter o tipo de olhar bonito que voc� sempre quis ~! Lembre-se, a primeira coisa que todos observam em voc� � os olhos, e podemos ajud�-lo a encontrar as lentes de cosm�ticos que mais se encaixam em voc�! Agora, o que voc� gostaria de usar?\r\n#L0#Eu quero comprar um cupom!#l\r\n#L1#Cupom de lentes de contato: #i5152010##t5152010##l\r\n#L2#Cupom de lentes de contato: #i5152013##t5152013##l");
        else if (status == 1) {
            if (selection == 0) {
                beauty = 0;
                cm.sendSimple("Eu gostaria de comprar um:\r\n#L0#Cupom de lentes de contato por " + regprice + " mesos: #i5152010##t5152010##l\r\n#L1#Cupom de lentes de contato por " + vipprice + " mesos: #i5152013##t5152013##l");
            } else if (selection == 1) {
                beauty = 1;
                if (cm.getPlayer().getGender() == 0)
                    var current = cm.getPlayer().getFace()% 100 + 20000;
                if (cm.getPlayer().getGender() == 1)
                    var current = cm.getPlayer().getFace()% 100 + 21000;
                colors = Array();
                colors = Array(current , current + 100, current + 200, current + 300, current +400, current + 500, current + 600, current + 700);
                cm.sendYesNo("Se voc� usar o cupom normal, voc� receber� um par aleat�rio de lentes cosm�ticas. Voc� vai usar um #b#t5152010##k e realmente faz a mudan�a para em seus olhos?");
            } else if (selection == 2) {
                beauty = 2;
                if (cm.getPlayer().getGender() == 0)
                    var current = cm.getPlayer().getFace()% 100 + 20000;
                if (cm.getPlayer().getGender() == 1)
                    var current = cm.getPlayer().getFace() % 100 + 21000;
                colors = Array();
                colors = Array(current , current + 100, current + 200, current + 300, current +400, current + 500, current + 600, current + 700);
                cm.sendStyle("Com nossa m�quina especializada, voc� pode se ver ap�s o tratamento com anteced�ncia. Que tipo de tratamento de pele voc� gostaria de fazer? Escolha o estilo de sua prefer�ncia", colors);
            }
        }
        else if (status == 2){
            cm.dispose();
            if (beauty == 1){
                if (cm.haveItem(5152010) == true){
                    cm.gainItem(5152010, -1);
                    cm.setFace(colors[Math.floor(Math.random() * colors.length)]);
                    cm.sendOk("Aproveite suas novas lentes de contato!");
                } else
				cm.sendOk("Um ... voc� n�o tem o cupom de lentes de contato que voc� precisa para receber o tratamento. Desculpe, mas receio que n�o possamos fazer isso por voc�...");
            }
            if (beauty == 2){
                if (cm.haveItem(5152013) == true){
                    cm.gainItem(5152013, -1);
                    cm.setFace(colors[selection]);
                    cm.sendOk("Aproveite suas novas lentes de contato!");
                } else
				cm.sendOk("Um ... voc� n�o tem o cupom de lentes de contato que voc� precisa para receber o tratamento. Desculpe, mas receio que n�o possamos fazer isso por voc�...");
            }
            if (beauty == 0){
                if (selection == 0 && cm.getMeso() >= regprice) {
                    cm.gainMeso(-regprice);
                    cm.gainItem(5152010, 1);
                    cm.sendOk("Aproveite!");
                } else if (selection == 1 && cm.getMeso() >= vipprice) {
                    cm.gainMeso(-vipprice);
                    cm.gainItem(5152013, 1);
                    cm.sendOk("Aproveite!");
                } else
                    cm.sendOk("Voc� n�o tem mesos para comprar um cupom!");
            }
        }
    }
}
