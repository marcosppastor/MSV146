function enter(pi) {
	if (pi.isQuestStarted(22583)) {
	    pi.forceCompleteQuest(22583);
	    pi.playerMessage(5, "Free spirits released.");
	}
	if (pi.isQuestStarted(22584)) {
	    pi.forceCompleteQuest(22584);
	    pi.playerMessage(5, "Door lock destroyed.");
	}
	pi.warp(220011001,0);
}