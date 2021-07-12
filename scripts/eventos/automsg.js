/*
 * @author Marcos Paulo Pastor
 * True MapleStory - 2018
 * https://truems.net.br/
 */
 
var setupTask;
var nomeServer = "DicaMaple";


function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 8);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis())
        nextTime += 100 * 1000;
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
    scheduleNew();
    var Message = new Array(
	    "�ltima atualiza��o: 14/05/2018.",
        "Agora foi melhorado o evento de experi�ncia em dobro durante os finais de semana!!",
        "Para saber como casar, fale com o Ames, O S�bio, em Amoria. Ele lhe explicar�!",
        "Vender itens ou mesos por dinheiro acarreta em banimento permanente do jogador!",
        "Para casar-se na Catedral, compre o Bilhete Casamento Catedral Chique na Loja!",
        "Casamentos Catedral e Capela dispon�veis!",
        "Para casar-se na Capela compre o Bilhete Casamento Capela Chique na Loja!",
        "Ao descartar o anel de noivado, voc� perde os v�nculos com o(a) parceiro(a) e ser� necessario casar-se novamente para ter os beneficios!",
        "Procurando itens raros? Abra o Gachapon!",
        "Para se casar, primeiro voc� deve escolher um(a) parceiro(a) e em seguida se informar pr�ximo a Catedral em Amoria!",
        "Somente personagens casados podem fazer a Miss�o de Amoria e em hor�rios pr� definidos",
        "Voc� pode obter itens raros nos Gachapons de todas as cidades. Basta comprar um Cupom na Loja!",
		"Varias Miss�es em Grupo disponiveis. Aproveite!",
        "Troque Folhas Maple por Items Maple falando com a Mia, localizada em Henesys!",
        //"Troque Folhas Maple por Items Maple LV. 77 falando com o NPC Mad Bunny, localizado em Henesys!",
        "Personagem travado? Digite '@w' para resolver!",
        "Ficar parado recupera lentamente a barra de vida.",
		"Para adquirir a Terceira Classe, fale com o seu instrutor em El Nath!",
		"Aproveite as miss�es em grupo dispon�veis no Mercado 7!");
        //"Presentei-e um amigo com item de cash. V� � Loja e clique em presente!");         

        em.getChannelServer().yellowWorldMensagemAmarela("["+ nomeServer +"] "+Message[Math.floor(Math.random() * Message.length)]);
        
}