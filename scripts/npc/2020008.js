var status = 0;
var jobName;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    var jobId=cm.getPlayer().getJob().getId();
    if (mode == -1) {
        cm.sendOk("Volte se voc� mudar de ideia.\r\n\r\n Boa sorte em suas aventuras.");
        cm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("#eOl� #r#h ##k, sou o respons�vel pela evoluc�o da sua terceira classe.");
        } else if (status == 1) {
            if ( cm.getLevel() < 70) {
               cm.sendNext("Desculpe voc� precisa estar no nivel 70 para usar os meus servi�os.");
               cm.dispose ();
               
            }
                
                if(status==1) {
                
                if (cm.getJobId() == 110) {
                
                cm.changeJobById(111);
                cm.sendOk("Voc� atingiu o level necess�rio,agora voc� � um templ�rio!");
                cm.dispose();
                
                }   
                
               
                if (cm.getJobId() == 120) {
                cm.changeJobById(121);
                cm.sendOk("Voc� atingiu o level necess�rio,agora voc� � um cavaleiro branco!");
                cm.dispose();
                }
                
                if (cm.getJobId() == 130) {
                cm.changeJobById(131);
                cm.sendOk("Voc� atingiu o level necess�rio,agora voc� � um cavaleiro draconiano!");
                cm.dispose();
                }
                
                                
                    
                
            
                        
            
              
    
}
    

    }
    
        }
    
}