/*
 * @author Marcos P
 * TrueMS - 2016
 * truems.net/
*/
function start() {
cm.sendSimple("Caso voc� queira ir para um novo conceito de mundo, voc� esta no lugar certo!\r\nSempre vejo muitos guerreiros com sonhos extraordin�rios, mas quando deparam-se com a realidade, desistem facil.\r\n #L0#Eu quero ir para o Templo do Tempo #k#l");
}

function action(m, t, s) {
   if (m > 0){
      //cm.useItem(2210016); //TRANSFORM. DRAG�O
      cm.warp(200090500, 0);
   }
   cm.dispose();
}  