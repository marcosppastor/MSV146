function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.isLeader()) {
		pi.warp(920010200);
	} else {
		pi.playerMessage(5,"Please get the leader in this portal.");
	}
}