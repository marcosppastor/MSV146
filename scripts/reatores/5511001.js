/* @Author SharpAceX
* 5511001.js: Summons Scarlion.
*/

function act() {
	if (rm.getReactor().getMap().getMonsterById(9420547) == null) {
		rm.spawnMonster(9420547,-238,636);
		rm.changeMusic("Bgm09/TimeAttack");
		rm.mapMessage(6, "Tenha cuidado! O Furioso Scarlion acaba de aparecer.");
	}
}