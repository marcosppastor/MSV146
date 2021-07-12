/*
 * @author Marcos P
 * NatalPQ
 * TrueMS - 2016
 * truems.net.br/
*/


importPackage(Packages.world);
importPackage(Packages.client);
importPackage(Packages.server.maps);
importPackage(Packages.server.life);

var exitMap;
var flagmap;
var instanceId;
var minPlayers = 1;

function init() {
	instanceId = 1;
	em.setProperty("NPQOpen", "true");
}

function monsterValue(eim, mobId) {
	return 1;
}

function setup(eim) {
	em.setProperty("NPQOpen", "false")
	var instanceName = "NatalPQ" + instanceId;
	var eim = em.newInstance(instanceName);
	eim.setProperty("stage", "0");
	instanceId = em.getChannelServer().getInstanceId();
	exitMap = em.getChannelServer().getMapFactory().getMap(209000000);
    flagmap = em.getChannelServer().getMapFactory().getMap(211040401); // Mapa de início para PQ + Instância.
	exitMap2 = em.getChannelServer().getMapFactory().getMap(209000000);
	var mf = eim.getMapFactory();
	em.getChannelServer().addInstanceId();
	var map = mf.getMap(211040401); // Mapa de início para PQ + Instância.
	map.toggleHiddenNPC(2030006);
	map.spawnNpc(2001000, new java.awt.Point(323, 99));//Cliff
	map.removePortals();
	return eim;
}

function playerEntry(eim, player) {
	var map = eim.getMapInstance(211040401); // Mapa de início para PQ + Instância.
	player.changeMap(map, map.getPortal(0));
	map.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(6, "[Boneco de Neve] Vamos brincar? Estou chegando!"));
	eim.schedule("monsterSpawn", 10000);
	player.getClient().getSession().write(Packages.tools.MaplePacketCreator.getClock(10));
}

function monsterSpawn(eim, player) {
    var mf = eim.getMapFactory();
	var bossmap = mf.getMap(211040401); // Mapa de início para PQ + Instância.
	bossmap.removePortals();
	bossmap.killAllMonsters(false);
	var mob = Packages.server.life.MapleLifeFactory.getMonster(9500317);
	var overrideStats = new Packages.server.life.MapleMonsterStats();
	overrideStats.setHp(1000);
	overrideStats.setMp(mob.getMaxMp());
	mob.setOverrideStats(overrideStats);
	mob.setHp(overrideStats.getHp());
	//eim.registerMonster(mob);

	bossmap.spawnMonsterOnGroudBelow(mob, new java.awt.Point(134, 449));
}

function playerDead(eim, player) {
  if (player.getMap().hasTimer() == false) {
    player.getClient().getSession().write(Packages.tools.MaplePacketCreator.getClock(600));
   //  player.getMap().setTimer(true);
  }
}

function playerRevive(eim, player) {
	if (eim.isLeader(player)) { 
		var party = eim.getPlayers();
		for (var i = 0; i < party.size(); i++) {
			playerExit(eim, party.get(i));
		}
		eim.dispose2();
	}
	else {
		var party = eim.getPlayers();
		if (party.size() <= minPlayers) {
			for (var i = 0; i < party.size(); i++) {
				playerExit(eim,party.get(i));
			}
			eim.dispose2();
		}
		else
			playerExit(eim, player);
	}
}

function playerDisconnected(eim, player) {
	if (eim.isLeader(player)) {
		var party = eim.getPlayers();
		for (var i = 0; i < party.size(); i++) {
			if (party.get(i).equals(player)) {
				removePlayer(eim, player);
			}			
			else {
				playerExit(eim, party.get(i));
			}
		}
		eim.dispose2();
	}
	else { 
		var party = eim.getPlayers();
		if (party.size() < minPlayers) {
			for (var i = 0; i < party.size(); i++) {
				playerExit(eim,party.get(i));
			}
			eim.dispose2();
		}
		else
			playerExit(eim, player);
	}
}

function leftParty(eim, player) {			
	var party = eim.getPlayers();
	if (party.size() <= minPlayers) {
		for (var i = 0; i < party.size(); i++) {
			playerExit(eim,party.get(i));
		}
		eim.dispose2();
	}
	else
		playerExit(eim, player);
}

function disbandParty(eim) {
	var party = eim.getPlayers();
	for (var i = 0; i < party.size(); i++) {
		playerExit(eim, party.get(i));
	}
	eim.dispose2();
}

function playerExit(eim, player) {
	eim.unregisterPlayer(player);
	player.changeMap(exitMap, exitMap.getPortal(0));
}

function removePlayer(eim, player) {
	eim.unregisterPlayer(player);
	player.getMap().removePlayer(player);
	player.setMap(exitMap);
}

function clearPQ(eim) {
	var party = eim.getPlayers();
	for (var i = 0; i < party.size(); i++) {
		playerExit(eim, party.get(i));
	}
	eim.dispose2();
}

function allMonstersDead(eim) {
}

function cancelSchedule() {
}

function timeOut() {
	var iter = em.getInstances().iterator();
	while (iter.hasNext()) {
		var eim = iter.next();
		if (eim.getPlayerCount() > 0) {
			var pIter = eim.getPlayers().iterator();
			while (pIter.hasNext()) {
				playerExit(eim, pIter.next());
			}
		}
		eim.dispose2();
	}
}
