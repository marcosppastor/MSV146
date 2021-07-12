/*
 * LeaderMS 2012 
 */
var setupTask;
var nomeServer = "DicaMaple";

function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 1);
    cal.set(java.util.Calendar.MINUTE, 0);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis())
        nextTime += 300 * 1000;
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
    scheduleNew();
    var Message = new Array("Use os atalhos do teclado (I, E, S, K, G, W, M, R, H) para acessar todos os menus rapidamente.",
        "Para associar um item a um atalho de teclado, arraste o item do seu invent�rio para o slot r�pido.",
        "Procure portais escondidos para ampliar sua aventura!",
        "Pressione F1~F7 para fazer careta.",
        "Use o portal em um mapa para ir para uma �rea diferente.",
        "A maioria dos portais � exibida no minimapa como um ponto azul.",
        "Ao sair da Ilha Victoria, voc� n�o poder� voltar � Ilha Maple.",
        "Outros personagens ao seu redor ser�o mostrados, no minimapa, como pontos vermelhos.",
        "Ficar parado recupera lentamente a barra de vida.",
        "Pressione CTRL para atacar e ALT para saltar.",
        "Visite as lojas para comprar as po��es e equipamentos necess�rios para sua jornada.",
        "Quando voc� subir de n�vel, entre na janela de atributos para gastar os pontos de atributos ganhos.",
        "Voc� s� pode escolher uma classe. Ao escolher a primeira classe, o caminho do seu personagem ser� na classe escolhida.",
        "Para usar com um item, entre no invent�rio de equipamentos e arraste o item para a janela de itens usados ou clique duas vezes no item desejado no invent�rio.",
        "Usu�rios que abusarem dos Termos de Servi�o ser�o bloqueados do jogo.",
        "Quem usar, vender, trocar ou promover hackers ou ferramentas de hackers ser� bloqueado do jogo.",
        "Itens pagos podem ser comprados na Loja de Itens, usando Dinheiro Nexon comprado em nosso site.",
        "Fale com os instrutores das cclasses em cada cidade para mudar de classe.",
        "Para se tornar um bruxo, voc� precisa estar no n�vel 8. As outras profiss�es exigem no m�nimo o n�vel 10.",
        "S�o PROIBIDOS o compartilhamento, a venda e a troca de contas. Essas contas ser�o bloqueadas.");
        em.getChannelServer().yellowWorldMessageAprendiz("["+ nomeServer +"] " + Message[Math.floor(Math.random() * Message.length)]);
}