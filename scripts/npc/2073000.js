/*
 * @author Marcos P
 * TrueMS - 2016
 * truems.net/


function start() {
//cm.gainItem()
cm.sendOk("Ola #h #, tudo bem?");
cm.dispose();
}

function action(mode, type, selection) {
cm.dispose();
}

*/


/* Relapse (G-Dev) 
- Simple Item Check Script
- Made for Quest FM's
*/



/* global cm 

var rand = Math.floor(Math.random()*100);
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else {
        cm.sendOk("Ok, n�o ficarei aqui o dia todo!");
        cm.dispose();
        return;
    }
    
    //if (cm.getMapId()===105040300 && cm.getLevel() <=34) {
    if (status == 0 ) {
	cm.sendSimple("#r Aten��o #k ,eu troco os itens  necess�rios a se recolher pelo item de premia��o do evento.Para todos poderem participar, os itens necess�rios para os jogadores de menor level ser�o distintos dos de level maior,no entanto � sempre bom ajudar os amigos, confira: #b \r\n\r\n#L0#Eu possuo os itens e sou n�vel 10~~34.#l \r\n\r\n#L1#Eu possuo os itens e sou n�vel 35~~200.#l \r\n\r\n#L2#Desejo saber qual quais itens devo recolher.#l");
      
        }  else if (selection == 0) {
            cm.sendSimple("Selecione o item que deseja receber #b\r\n\#L3#Nariz com FOR \r\n\#L4#Nariz com DES \r\n\#L5#Nariz com INT \r\n#L6# Nariz com SOR");
        }  else if (selection == 1) {
            cm.sendSimple("Selecione o item que deseja receber #b\r\n\#L7#Nariz com FOR \r\n\#L8#Nariz com DES \r\n\#L9#Nariz com INT \r\n#L10# Nariz com SOR");
        }  else if (selection == 2) {
            if (cm.getLevel() >= 10 && cm.getLevel() <= 34) {
        cm.sendOk("Se voc� for level 10~~34 voc� deve recolher \r\n\\r\n\ #i4000003# 100x \r\n\ #i4000026# 100x \r\n\ #i4000106# 100x \r\n\ #i4001126# 500x.");
    }
    
      else  {
        cm.sendOk("Se voc� for level 35~~200 voc� deve recolher \r\n\\r\n\ #i4000120# 100x \r\n\ #i4000048 # 100x \r\n\ #i4000096# 100x \r\n\ #i4001126# 500x.");
    }
    
    
    } else if (selection == 3) {
        if (selection == 3 && cm.haveItem(4000003, 100) && cm.haveItem(4000026, 100) && cm.haveItem(4000106, 100)  && cm.haveItem(4001126 , 500) && cm.getLevel() <= 34) {
                      cm.gainItem(4001126, -500);
                      cm.gainItem(4000003, -100);
                      cm.gainItem(4000026, -100);
                      cm.gainItem(4000106, -100);
                      

                      cm.gainItem(1012058 ,1,true,true);
	              cm.sendOk("Bom trabalho,lembre-se voc� pode fazer mais vezes a troca at� as 15h.");
                      cm.dispose();
            } else {
	cm.sendOk("Parece que voc� n�o possui os itens necess�rios ou n�o selecionou a op��o do nivel necess�rio .");
                cm.dispose();
        }
        } else if (selection == 4) {
      if (selection == 4 && cm.haveItem(4000003, 100) && cm.haveItem(4000026, 100) && cm.haveItem(4000106, 100)  && cm.haveItem(4001126 , 500) && cm.getLevel() <= 34) {
                      cm.gainItem(4001126, -500);
                      cm.gainItem(4000003, -100);
                      cm.gainItem(4000026, -100);
                      cm.gainItem(4000106, -100);
                      

                      cm.gainItem(1012059 ,1,true,true);
	              cm.sendOk("Bom trabalho,lembre-se voc� pode fazer mais vezes a troca at� as 15h.");
                      cm.dispose();
            } else {
	cm.sendOk("Parece que voc� n�o possui os itens necess�rios ou n�o selecionou a op��o do nivel necess�rio .");
                cm.dispose();
        }
        } else if (selection == 5) {
      if (selection == 5 && cm.haveItem(4000003, 100) && cm.haveItem(4000026, 100) && cm.haveItem(4000106, 100)  && cm.haveItem(4001126 , 500) &&  cm.getLevel() <= 34) {
                      cm.gainItem(4001126, -500);
                      cm.gainItem(4000003, -100);
                      cm.gainItem(4000026, -100);
                      cm.gainItem(4000106, -100);
                      

                      cm.gainItem(1012060 ,1,true,true);
	              cm.sendOk("Bom trabalho,lembre-se voc� pode fazer mais vezes a troca at� as 15h.");
                      cm.dispose();
            } else {
	cm.sendOk("Parece que voc� n�o possui os itens necess�rios ou n�o selecionou a op��o do nivel necess�rio .");
                cm.dispose();
            }
        
        
        } else if (selection == 6) {
      if (selection == 6 && cm.haveItem(4000003, 100) && cm.haveItem(4000026, 100) && cm.haveItem(4000106, 100)  && cm.haveItem(4001126 , 500) && cm.getLevel() <= 34) {
                      cm.gainItem(4001126, -500);
                      cm.gainItem(4000003, -100);
                      cm.gainItem(4000026, -100);
                      cm.gainItem(4000106, -100);
                      

                      cm.gainItem(1012061 ,1,true,true);
	              cm.sendOk("Bom trabalho,lembre-se voc� pode fazer mais vezes a troca at� as 15h.");
                      cm.dispose();
            } else {
	cm.sendOk("Parece que voc� n�o possui os itens necess�rios ou n�o selecionou a op��o do nivel necess�rio .");
                cm.dispose();
            }
        }
        else if (selection == 7) {
      if ( cm.haveItem(4000120, 100) && cm.haveItem(4000048, 100) && cm.haveItem(4000096, 100)  && cm.haveItem(4001126 , 500) && cm.getLevel() >34) {
                      cm.gainItem(4001126, -500);
                      cm.gainItem(4000120, -100);
                      cm.gainItem(4000048, -100);
                      cm.gainItem(4000096, -100);
                      

                      cm.gainItem(1012058 ,1,true,true);
	              cm.sendOk("Bom trabalho,lembre-se voc� pode fazer mais vezes a troca at� as 15h.");
                      cm.dispose();
            } else {
	cm.sendOk("Parece que voc� n�o possui os itens necess�rios ou n�o selecionou a op��o do nivel necess�rio .");
                cm.dispose();
            }
        }
        else if (selection == 8) {
      if (selection == 8 && cm.haveItem(4000120, 100) && cm.haveItem(4000048, 100) && cm.haveItem(4000096, 100)  && cm.haveItem(4001126 , 500) && cm.getLevel() && cm.getLevel() >34) {
                      cm.gainItem(4001126, -500);
                      cm.gainItem(4000120, -100);
                      cm.gainItem(4000048, -100);
                      cm.gainItem(4000096, -100);
                      

                      cm.gainItem(1012059 ,1,true,true);
	              cm.sendOk("Bom trabalho,lembre-se voc� pode fazer mais vezes a troca at� as 15h.");
                      cm.dispose();
            } else {
	cm.sendOk("Parece que voc� n�o possui os itens necess�rios ou n�o selecionou a op��o do nivel necess�rio .");
                cm.dispose();
            }
        }   else if (selection == 9) {
      if (selection == 9 && cm.haveItem(4000120, 100) && cm.haveItem(4000048, 100) && cm.haveItem(4000096, 100)  && cm.haveItem(4001126 , 500) && cm.getLevel() && cm.getLevel() >34) {
                      cm.gainItem(4001126, -500);
                      cm.gainItem(4000120, -100);
                      cm.gainItem(4000048, -100);
                      cm.gainItem(4000096, -100);
                      

                      cm.gainItem(1012060 ,1,true,true);
	              cm.sendOk("Bom trabalho,lembre-se voc� pode fazer mais vezes a troca at� as 15h.");
                      cm.dispose();
            } else {
	cm.sendOk("Parece que voc� n�o possui os itens necess�rios ou n�o selecionou a op��o do nivel necess�rio .");
                cm.dispose();
            }     
        }else if (selection == 10) {
      if (selection == 10 && cm.haveItem(4000120, 100) && cm.haveItem(4000048, 100) && cm.haveItem(4000096, 100)  && cm.haveItem(4001126 , 500) && cm.getLevel() >34) {
                      cm.gainItem(4001126, -500);
                      cm.gainItem(4000120, -100);
                      cm.gainItem(4000048, -100);
                      cm.gainItem(4000096, -100);
                      

                      cm.gainItem(1012061 ,1,true,true);
	              cm.sendOk("Bom trabalho,lembre-se voc� pode fazer mais vezes a troca at� as 15h.");
                      cm.dispose();
            } else {
	cm.sendOk("Parece que voc� n�o possui os itens necess�rios ou n�o selecionou a op��o do nivel necess�rio .");
                cm.dispose();
            }
        }
    //}
    
//else {
    	//cm.sendOk("Parece que voc� n�o esta no mapa do seu n�vel,caso voc� possua nivel 34 ou superior dirija-se a #eNeo city .");
       // cm.dispose();
//}

    
}

*/

function start() {
//cm.gainItem()
cm.sendOk("Ol� #h #, tudo bem?");
cm.dispose();
}

function action(mode, type, selection) {
cm.dispose();
}