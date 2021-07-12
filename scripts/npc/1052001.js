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
/* Dark Lord
	Thief Job Advancement
	Victoria Road : Thieves' Hideout (103000003)
	Custom Quest 100009, 100011
*/

status = -1;
actionx = {"1stJob" : false, "2ndjob" : false, "3thJobI" : false, "3thJobC" : false};
job = 410;

function start() {
    if (cm.getJobId() == 0) {
        actionx["1stJob"] = true;
        if (cm.getLevel() >= 10)
            cm.sendNext("Quer ser um Gatuno? Tens muitas classes a seguir,por�m eu n�o aceito a todos... #bSeu level tem que ser pelo menos 10, com DEX acima de 25#k. Deixe-me ver.");
        else {
            cm.sendOk("Treine um pouco mais e eu lhe mostrarei o que � ser um #rGatuno#k.");
            cm.dispose();
        }
    } else if (cm.getLevel() >= 30 && cm.getJobId() == 400) {
        actionx["2ndJob"] = true;
        if (cm.haveItem(4031012))
            cm.sendNext("Vejo que voc� esta indo bem, terei de concordar em lhe ajudar no pr�ximo passo de sua longa jornada.");
        else if (cm.haveItem(4031011)){
            cm.sendOk("Va e veja #b#p1072003##k.");
            cm.dispose();
        } else
            cm.sendNext("The progress you have made is astonishing.");
    } else if (actionx["3thJobI"] || (cm.getPlayer().gotPartyQuestItem("JB3") && cm.getLevel() >= 70 && cm.getJobId() % 10 == 0 && parseInt(cm.getJobId() / 100) == 4 && !cm.getPlayer().gotPartyQuestItem("JBP"))){
        actionx["3thJobI"] = true;
        cm.sendNext("There you are. A few days ago, #b#p2020011##k of Ossyria talked to me about you. I see that you are interested in making the leap to the dark world of the third job advancement for thieves. To archieve that goal, I will have to test your strength in orden to see whether you are worthy of the advancement. There is an opening in the middle of a deep swamp in Victoria Island, where it'll lead you to a secret passage. Once inside, you'll face a clone of myself. Your task is to defeat him and bring #b#t4031059##k back with you.");
    } else if (cm.getPlayer().gotPartyQuestItem("JBP") && !cm.haveItem(4031059)){
        cm.sendNext("Please, bring me the #b#t4031059##k.");
        cm.dispose();
    } else if (cm.haveItem(4031059) && cm.getPlayer().gotPartyQuestItem("JBP")){
        actionx["3thJobC"] = true;
        cm.sendNext("Nice work. You have defeated my clone and brought #b#t4031059##k back safely. You have now proven yourself worthy of the 3rd job advancement from the physical standpoint. Now you should give this necklace to #b#p2020011##k in Ossyria to take on the second part of the test. Good luck. You'll need it.");
    } else if (cm.isQuestStarted(6141)) {
        cm.warp(910300000, 3);
    } else {
        cm.sendOk("You have chosen wisely.");
        cm.dispose();
    }
}

function action(mode, type, selection) {
    status++;
    if (mode == 0 && type != 1)
        status -= 2;
    if (status == -1){
        start();
        return;
    } else if (mode != 1 || status == 7 && type != 1 || (actionx["1stJob"] && status == 4) || (cm.haveItem(4031008) && status == 2) || (actionx["3thJobI"] && status == 1)){
        if (mode == 0 && status == 2 && type == 1)
            cm.sendOk("Voc� sabe que n�o h� outra escolha....");
        if (!(mode == 0 && type != 1)){
            cm.dispose();
            return;
        }
    }
    if (actionx["1stJob"]){
        if (status == 0)
            cm.sendYesNo("Oh...! Voc� parece que faz parte de n�s... voc� apenas precisa de uma mente agu�ada,com sede de aprender.Quer se tornar um Gatuno?");
        else if (status == 1){
            if (cm.canHold(2070000) && cm.canHold(1472061)){
                if (cm.getJobId() == 0){
                    cm.changeJobById(400);
                    cm.gainItem(2070000, 500);
                    cm.gainItem(1472061, 1);
                    cm.gainItem(1003033,1);
                    cm.resetStats();
                }
                cm.sendNext("Tudo bem, daqui para frente, voc� � uma parte de n�s! Voc� vai viver a vida de um andarilho ...seja paciente logo, voc� estar� vivendo a vida bela. Certo, n�o � muito, mas vou te dar algumas das minhas habilidades ...HAAAHHH!!!");
            } else {
                cm.sendNext("Deixe espa�o no seu invent�rio e volte a falar comigo.");
                cm.dispose();
            }
        } else if (status == 2) 
            cm.sendNextPrev("Voc� se tornou muito mais forte agora. Al�m disso, a cada um de seus estoques foram adicionou espa�os extras.Eu apenas dei-lhe um pouco de #bSP#k. Quando voc� abrir o menu #bSkill#k no canto inferior esquerdo da tela, existem habilidades que voc� pode aprender por meio de pontos. Um aviso, por�m: Voc� n�o pode ter todas habilidades juntas de uma vez juntos de uma vez. . H� tamb�m habilidades que voc� pode adquirir apenas depois de ter aprendido outras ");
        else if (status == 3)
            cm.sendNextPrev("Nos veremos novamente!");
    } else if(actionx["2ndJob"]){
        if (status == 0){
            if (cm.haveItem(4031012))
                cm.sendSimple("Ok, quando voc� tomar sua decis�o clique em [Eu quero escolher minha classe] abaixo.#b\r\n#L0#Me explique o que faz um Mercen�rio.\r\n#L1#Me explique o que faz um Arruaceiro.\r\n#L3#Eu quero escolher minha classe!");
            else
                cm.sendNext("Sabia decis�o. Voc� parece forte, mas eu preciso ver se voc� � forte o suficiente para passar no teste, n�o � um teste dificil, voc� vai se sair bem. Agora, pegue minha carta primeiro... tenha certeza de que n�o vai perde-la!");
        } else if (status == 1){
            if (!cm.haveItem(4031012)){
                if (cm.canHold(4031011)){
                    if(!cm.haveItem(4031011))
                        cm.gainItem(4031011, 1);
                    cm.sendNextPrev("Por favor entregue esta carta para #b#p1072003##k que se encontra nos arredores #b#m102040000##k pr�ximo a Cidade de Kerning.Ele sera o respons�vel por instruir seu avan�o de classe. De a ele minha carta e ele te mostrara a pr�xima etapa deste teste.");
                } else {
                    cm.sendNext("Por favor, deixe espa�o livre em seu invent�rio.");
                    cm.dispose();
                }
            }else{
                if (selection < 3){
                    cm.sendNext("Incompleto.");
                    status -= 2;
                } else
                    cm.sendSimple("Agora ... voc� se decidiu? Escolha a classe que deseja  para o seu segundo avan�o. #b\r\n#L0#Mercen�rio\r\n#L1#Arruaceiro");
            }
        } else if (status == 2){
            if (cm.haveItem(4031011)){
                cm.dispose();
                return;
            }
            job += selection * 10;
            cm.sendYesNo("Ent�o voc� quer definir  a sua segunda classe como " + (job == 410 ? "#bMercen�rio#k" : "#bArruaceiro#k") + "? Voc� sabe que voc� n�o poder� escolher uma classe diferente para o 2� avan�o , uma vez que voc� fa�a sua escolha aqui, certo?");
        } else if (status == 3){
            if (cm.haveItem(4031012))
                cm.gainItem(4031012, -1);
            cm.sendNext("Ok,voc� � um" + (job == 410 ? "#bMercen�rio#k" : "#bArruaceiro#k") + " daqui em diante. A sua classe � o grupo inteligente com agilidade, capaz de derrotar monstros  com facilidade ... por favor, treine todos os dias. N�s o ajudaremos a tornar-se ainda mais forte do que voc� j� �!.");
            if (cm.getJobId() != job)
                cm.changeJobById(job);
        } else if (status == 4)
            cm.sendNextPrev("Acabei de dar-lhe um livro que lhe d� a lista de habilidades que voc� pode adquirir como um " + (job == 410 ? "mercen�rio" : "arruaceiro") + ". Tamb�m o seu invent�rio ETC expandiu adicionando mais espa�o para armazenamento. Seu HP e MP m�ximo aumentaram tamb�m. V� verificar e ver por voc� mesmo.");
        else if (status == 5)
            cm.sendNextPrev("Eu tamb�m lhe dei um pouco de #bAtributos de Habiliddes # k. Abra o #bMenu de Habilidades Menu # k localizado no canto inferior direito. Voc� poder� aumentar as novas habilidades de segunda classe adquiridas. Uma palavra de aviso . Voc� n�o pode aument�-las de uma s� vez. Algumas das habilidades s� est�o dispon�veis depois de ter aprendido outras habilidades. Certifique-se de que voc� lembre disso. ");
        else if (status == 6)
            cm.sendNextPrev((job == 410 ? "Mercen�rio" : "Arruaceiro") + " precisa ser forte. Mas lembre-se de que voc� n�o pode abusar desse poder e us�-lo errado. Use seu  poder do jeito certo, porque ... para que voc� siga esse caminho correto, isso � muito mais complexo do que apenas ficar mais forte. Encontre-me depois que estiver mais forte. Eu estarei esperando por voc�..");
    } else if (actionx["3thJobI"]){
        if (status == 0){
            if (cm.getPlayer().gotPartyQuestItem("JB3")){
                cm.getPlayer().removePartyQuestItem("JB3");
                cm.getPlayer().setPartyQuestItemObtained("JBP");
            }
            cm.sendNextPrev("Since he is a clone of myself, you can expect a tough battle ahead. He uses a number of special attacking skills unlike any you have ever seen, and it is your task to successfully take him one on one. There is a time limit in the secret passage, so it is crucial that you defeat him within the time limit. I wish you the best of luck, and I hope you bring the #b#t4031059##k with you.");
        }
    } else if (actionx["3thJobC"]){
        cm.getPlayer().removePartyQuestItem("JBP");
        cm.gainItem(4031059, -1);
        cm.gainItem(4031057, 1);
        cm.dispose();
    }
}