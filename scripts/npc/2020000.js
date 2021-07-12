/* Vogen
	El Nath: El Nath Market (211000100)
	
	Refining NPC: 
	* Minerals
	* Jewels
	* Moon/Star Rocks
	* Crystals (including Dark)
	* Processed Wood/Screws
	* Arrows/Bronze Arrows/Steel Arrows
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
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	cm.dispose();
    if (status == 0 && mode == 1) {
	var selStr = "Hm? Quem � voc�r? Oh, voc� j� ouviu falar sobre minhas habilidades de forjamento? Nesse caso, ficaria feliz em processar alguns dos seus min�rios ... por uma taxa pequena...#b"
	var options = new Array("Refinar um min�rio","Refinar uma j�ia","Refine uma j�ia rara","Refinar um cristal","Criar materiais","Criar flechas");
	for (var i = 0; i < options.length; i++){
	    selStr += "\r\n#L" + i + "# " + options[i] + "#l";
	}
	cm.sendSimple(selStr);
    } else if (status == 1 && mode == 1) {
	selectedType = selection;
	if (selectedType == 0){ //mineral refine
	    var selStr = "Ent�o,qual material voc� gostaria de refinar?#b";
	    var minerals = new Array ("Bronze","A�o","Mithril","Adamantium","Prata","Orihalcon","Ouro");
	    for (var i = 0; i < minerals.length; i++){
		selStr += "\r\n#L" + i + "# " + minerals[i] + "#l";
	    }
	    equip = false;
	    cm.sendSimple(selStr);
	} else if (selectedType == 1){ //jewel refine
	    var selStr = "Ent�o, que tipo de min�rio de j�ia voc� gostaria de refinar??#b";
	    var jewels = new Array ("Garnet","Amethyst","Aquamarine","Emerald","Opal","Sapphire","Topaz","Diamond","Black Crystal");
	    for (var i = 0; i < jewels.length; i++){
		selStr += "\r\n#L" + i + "# " + jewels[i] + "#l";
	    }
	    equip = false;
	    cm.sendSimple(selStr);
	} else if (selectedType == 2){ //rock refine
	    var selStr = "Uma j�ia rara? Em qual voc� estava pensando??#b";
	    var items = new Array ("Moon Rock","Star Rock");
	    for (var i = 0; i < items.length; i++){
		selStr += "\r\n#L" + i + "# " + items[i] + "#l";
	    }
	    cm.sendSimple(selStr);
	} else if (selectedType == 3){ //crystal refine
	    var selStr = "Min�rio de cristal? � dif�cil encontrar por aqui...#b";
	    var crystals = new Array ("Power Crystal","Wisdom Crystal","DEX Crystal","LUK Crystal","Dark Crystal");
	    for (var i = 0; i < crystals.length; i++){
		selStr += "\r\n#L" + i + "# " + crystals[i] + "#l";
	    }
	    equip = false;
	    cm.sendSimple(selStr);
	} else if (selectedType == 4){ //material refine
	    var selStr = "Materials? I know of a few materials that I can make for you...#b";
	    var materials = new Array ("Fa�a madeira processada com galho de �rvore","Fa�a madeira processada com lenha","Fazer parafusos (pacote de 15)");
	    for (var i = 0; i < materials.length; i++){
		selStr += "\r\n#L" + i + "# " + materials[i] + "#l";
	    }
	    equip = false;
	    cm.sendSimple(selStr);
	} else if (selectedType == 5){ //arrow refine
	    var selStr = "Flechas? N�o s�o um problema.#b";
	    var arrows = new Array ("Flecha para arco","Flecha para besta","Flecha de bronze para arco","Flecha de bronze para besta","Flecha de a�o para arco","Flecha de a�o para besta");
	    for (var i = 0; i < arrows.length; i++){
		selStr += "\r\n#L" + i + "# " + arrows[i] + "#l";
	    }
	    equip = true;
	    cm.sendSimple(selStr);
	}
	if (equip)
	    status++;
    } else if (status == 2 && mode == 1) {
	selectedItem = selection;
	if (selectedType == 0){ //mineral refine
	    var itemSet = new Array(4011000,4011001,4011002,4011003,4011004,4011005,4011006);
	    var matSet = new Array(4010000,4010001,4010002,4010003,4010004,4010005,4010006);
	    var matQtySet = new Array(10,10,10,10,10,10,10);
	    var costSet = new Array(300,300,300,500,500,500,800);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	} else if (selectedType == 1){ //jewel refine
	    var itemSet = new Array(4021000,4021001,4021002,4021003,4021004,4021005,4021006,4021007,4021008);
	    var matSet = new Array(4020000,4020001,4020002,4020003,4020004,4020005,4020006,4020007,4020008);
	    var matQtySet = new Array(10,10,10,10,10,10,10,10,10);
	    var costSet = new Array (500,500,500,500,500,500,500,1000,3000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 2){ //rock refine
	    var itemSet = new Array(4011007,4021009);
	    var matSet = new Array(new Array(4011000,4011001,4011002,4011003,4011004,4011005,4011006), new Array(4021000,4021001,4021002,4021003,4021004,4021005,4021006,4021007,4021008));
	    var matQtySet = new Array(new Array(1,1,1,1,1,1,1),new Array(1,1,1,1,1,1,1,1,1));
	    var costSet = new Array(10000,15000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 3){ //crystal refine
	    var itemSet = new Array (4005000,4005001,4005002,4005003,4005004);
	    var matSet = new Array(4004000,4004001,4004002,4004003,4004004);
	    var matQtySet = new Array (10,10,10,10,10);
	    var costSet = new Array (5000,5000,5000,5000,1000000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 4){ //material refine
	    var itemSet = new Array (4003001,4003001,4003000);
	    var matSet = new Array(4000003,4000018,new Array (4011000,4011001));
	    var matQtySet = new Array (10,5,new Array (1,1));
	    var costSet = new Array (0,0,0);
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
		
	if (selectedType == 5){ //arrow refine
	    var itemSet = new Array(2060000,2061000,2060001,2061001,2060002,2061002);
	    var matSet = new Array(new Array (4003001,4003004),new Array (4003001,4003004),new Array (4011000,4003001,4003004),new Array (4011000,4003001,4003004),
		new Array (4011001,4003001,4003005),new Array (4011001,4003001,4003005));
	    var matQtySet = new Array (new Array (1,1),new Array (1,1),new Array (1,3,10),new Array (1,3,10),new Array (1,5,15),new Array (1,5,15));
	    var costSet = new Array (0,0,0,0,0,0);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
		
	var prompt = "Voc� quer que eu fa�a ";
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
    } else if (status == 4 && mode == 1) {
	var complete = false;
		
	if (cm.getMeso() < cost * qty) {
	    cm.sendOk("Receio que voc� n�o possa pagar meus servi�os.")
	    cm.dispose();
	    return;
	} else {
	    if (mats instanceof Array) {
		for (var i = 0; i < mats.length; i++) {
		    complete = cm.haveItem(mats[i], matQty[i] * qty);
		    if (!complete) {
			break;
		    }
		}
	    } else {
		complete = cm.haveItem(mats, matQty * qty);
	    }	
        }
	if (!complete) {
	    cm.sendOk("Eu nao posso refinar nada sem os itens necess�rios.");
	} else {
	    if (mats instanceof Array) {
		for (var i = 0; i < mats.length; i++){
		    cm.gainItem(mats[i], -(matQty[i] * qty));
		}
	    } else
		cm.gainItem(mats, -matQty * qty);
					
	    if (cost > 0)
		cm.gainMeso(-(cost * qty));

	    if (item >= 2060000 && item <= 2060002) //bow arrows
		cm.gainItem(item, 1000 - (item - 2060000) * 100);
	    else if (item >= 2061000 && item <= 2061002) //xbow arrows
		cm.gainItem(item, 1000 - (item - 2061000) * 100);
	    else if (item == 4003000)//screws
		cm.gainItem(4003000, 15 * qty);
	    else
		cm.gainItem(item, qty);
	    cm.sendOk("Tudo pronto, caso queira algo mais,s� pedir..");
	}
	cm.dispose();
    }
}