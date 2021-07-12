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
/* Mr. Smith
	Victoria Road: Perion (102000000)
	
	Refining NPC: 
	* Warrior Gloves - 10-60 + upgrades
	* Processed Wood/Screws
*/

var status = 0;
var selectedType = -1;
var selectedItem = -1;
var item;
var mats;
var matQty;
var cost;
var qty;
var equip;

function start() {
    cm.getPlayer().setCS(true);
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        cm.dispose();
    if (status == 0 && mode == 1) {
        var selStr = "Um ... Oi, sou o aprendiz do Sr. Trov�o. Ele est� subindo de idade, ent�o ele lida com a maior parte do trabalho pesado enquanto lido com alguns dos trabalhos mais leves. O que posso fazer para voc�?#b"
        var options = new Array("Produzir uma luva","Modificar uma luva","Criar materiais");
        for (var i = 0; i < options.length; i++){
            selStr += "\r\n#L" + i + "# " + options[i] + "#l";
        }
			
        cm.sendSimple(selStr);
    }
    else if (status == 1 && mode == 1) {
        selectedType = selection;
        if (selectedType == 0){ //glove refine
            var selStr = "Ok,qual luva gostaria de fazer?#b";
            var items = new Array ("Juno#k - Warrior Lv. 10#b","Steel Fingerless Gloves#k - Warrior Lv. 15#b","Venon#k - Warrior Lv. 20#b","White Fingerless Gloves#k - Warrior Lv. 25#b",
                "Bronze Missel#k - Warrior Lv. 30#b","Steel Briggon#k - Warrior Lv. 35#b","Iron Knuckle#k - Warrior Lv. 40#b","Steel Brist#k - Warrior Lv. 50#b","Bronze Clench#k - Warrior Lv. 60#b");
            for (var i = 0; i < items.length; i++){
                selStr += "\r\n#L" + i + "# " + items[i] + "#l";
            }
            cm.sendSimple(selStr);
            equip = true;
        }
        else if (selectedType == 1){ //glove upgrade
            var selStr = "Modificar uma luva? Isso n�o deve ser muito dif�cil. O que voc� tem em mente??#b";
            var crystals = new Array ("Steel Missel#k - Warrior Lv. 30#b","Orihalcon Missel#k - Warrior Lv. 30#b","Yellow Briggon#k - Warrior Lv. 35#b","Dark Briggon#k - Warrior Lv. 35#b",
                "Adamantium Knuckle#k - Warrior Lv. 40#b","Dark Knuckle#k - Warrior Lv. 40#b","Mithril Brist#k - Warrior Lv. 50#b","Gold Brist#k - Warrior Lv. 50#b",
                "Sapphire Clench#k - Warrior Lv. 60#b","Dark Clench#k - Warrior Lv. 60#b");
            for (var i = 0; i < crystals.length; i++){
                selStr += "\r\n#L" + i + "# " + crystals[i] + "#l";
            }
            cm.sendSimple(selStr);
            equip = true;
        }
        else if (selectedType == 2){ //material refine
            var selStr = "Materiais? Conhe�o alguns materiais que eu posso fazer para voc�...#b";
            var materials = new Array ("Fa�a madeira processada com galho de �rvore","Fa�a madeira processada com lenha","Fa�a parafusos (pacote de 15)");
            for (var i = 0; i < materials.length; i++){
                selStr += "\r\n#L" + i + "# " + materials[i] + "#l";
            }
            cm.sendSimple(selStr);
            equip = false;
        }
        if (equip)
            status++;
    }
    else if (status == 2 && mode == 1) {
        selectedItem = selection;
        if (selectedType == 2){ //material refine
            var itemSet = new Array (4003001,4003001,4003000);
            var matSet = new Array(4000003,4000018,new Array (4011000,4011001));
            var matQtySet = new Array (10,5,new Array (1,1));
            var costSet = new Array (0,0,0)
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
        }
		
	var prompt = "Ent�o, voc� quer fazer alguns #t" + item + "#s? neste caso, quantos deseja fazer?";
		
        cm.sendGetNumber(prompt,1,1,100)
    }
    else if (status == 3 && mode == 1) {
        if (equip)
        {
            selectedItem = selection;
            qty = 1;
        }
        else
            qty = selection;

        if (selectedType == 0){ //glove refine
            var itemSet = new Array(1082003,1082000,1082004,1082001,1082007,1082008,1082023,1082009,1082059);
            var matSet = new Array(new Array(4000021,4011001),4011001,new Array(4000021,4011000),4011001,new Array(4011000,4011001,4003000),new Array(4000021,4011001,4003000),new Array(4000021,4011001,4003000),
                new Array(4011001,4021007,4000030,4003000),new Array(4011007,4011000,4011006,4000030,4003000));
            var matQtySet = new Array(new Array(15,1),2,new Array(40,2),2,new Array(3,2,15),new Array(30,4,15),new Array(50,5,40),new Array(3,2,30,45),new Array(1,8,2,50,50));
            var costSet = new Array(1000,2000,5000,10000,20000,30000,40000,50000,70000);
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
        }
        else if (selectedType == 1){ //glove upgrade
            var itemSet = new Array(1082005,1082006,1082035,1082036,1082024,1082025,1082010,1082011,1082060,1082061);
            var matSet = new Array(new Array(1082007,4011001),new Array(1082007,4011005),new Array(1082008,4021006),new Array(1082008,4021008),new Array(1082023,4011003),new Array(1082023,4021008),
                new Array(1082009,4011002),new Array(1082009,4011006),new Array(1082059,4011002,4021005),new Array(1082059,4021007,4021008));
            var matQtySet = new Array (new Array(1,1),new Array(1,2),new Array(1,3),new Array(1,1),new Array(1,4),new Array(1,2),new Array(1,5),new Array(1,4),new Array(1,3,5),new Array(1,2,2));
            var costSet = new Array (20000,25000,30000,40000,45000,50000,55000,60000,70000,80000);
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            cost = costSet[selectedItem];
        }
		
        var prompt = "Voc� quer fazer ";
        if (qty == 1)
            prompt += "a #t" + item + "#?";
        else
            prompt += qty + " #t" + item + "#?";
			
	prompt += " Nesse caso, vou precisar de itens espec�ficos de voc� para faz�-lo. Certifique-se de que voc� tenha espa�o em seu invent�rio.!#b";
		
        if (mats instanceof Array){
            for(var i = 0; i < mats.length; i++){
                prompt += "\r\n#i"+mats[i]+"# " + matQty[i] * qty + " #t" + mats[i] + "#";
            }
        }
        else {
            prompt += "\r\n#i"+mats+"# " + matQty * qty + " #t" + mats + "#";
        }
		
        if (cost > 0)
            prompt += "\r\n#i4031138# " + cost * qty + " meso";
		
        cm.sendYesNo(prompt);
    }
    else if (status == 4 && mode == 1) {
        var complete = true;
		
        if(!cm.canHold(item)) {
            cm.sendOk("Cheque seu invent�rio, h� espa�os livres? .");
            cm.dispose();
            return;
        }
        else if (cm.getMeso() < cost * qty)
        {
            cm.sendOk("Eu ainda posso ser um aprendiz, mas eu preciso ganhar a vida...");
            cm.dispose();
            return;
        }
        else
        {
            if (mats instanceof Array) {
                for(var i = 0; complete && i < mats.length; i++)
                    if (!cm.haveItem(mats[i], matQty[i]))
                        complete = false;
            }
            else if (!cm.haveItem(mats, matQty))
                complete = false;
            
            /*
            if (mats instanceof Array) {
                for(var i = 0; complete && i < mats.length; i++)
                {
                    if (matQty[i] * qty == 1)	{
                        if (!cm.haveItem(mats[i]))
                        {
                            complete = false;
                        }
                    }
                    else {

                        if (!cm.haveItem(mats[i],matQty[i]*qty)) complete=false;
                    }
                }
            }
            else {
                if (!cm.haveItem(mats,matQty)) complete=false;
            }
            */
        }
			
        if (!complete)
            cm.sendOk("Ainda sou aprendiz, n�o sei se posso fazer outros itens ainda ... Voc� pode trazer o que a produ��o exige?");
        else {
            if (mats instanceof Array) {
                for (var i = 0; i < mats.length; i++){
                    cm.gainItem(mats[i], -matQty[i] * qty);
                }
            }
            else
                cm.gainItem(mats, -matQty * qty);
					
            if (cost > 0)
                cm.gainMeso(-cost * qty);
				
            if (item == 4003000)//screws
                cm.gainItem(4003000, 15 * qty);
            else
                cm.gainItem(item, qty);
            cm.sendOk("Isso foi certo? Venha at� mim novamente se voc� tiver alguma coisa para que pratique.");
        }
        cm.dispose();
    }
}