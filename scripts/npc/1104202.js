/* 
 * NPC :      Mihai
 * Map :      Timu's Forest
 */

function start() {
    cm.sendNext("Oh ... Acabei de encontrar alguma coisa? Ent�o, h� apenas uma sa�da! Vamos lutar como uma #rBruxa Negra#k !");
}

function action(mode, type, selection) {
    if (mode == 1) {
	//cm.removeNPC(cm.getNpc());
	cm.spawnMonster(9001010); // Transforming
    }
    cm.dispose();
}