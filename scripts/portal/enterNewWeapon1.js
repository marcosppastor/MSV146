function enter(pi) {
    if (pi.isQuestStarted(23049)) {
	pi.getMap(pi.getMapId() + 10).resetFully();
    	pi.warp(pi.getMapId() + 10, 0);
    } else {
	pi.playerMessage(5, "Talk to your job instructor.");
    }
}