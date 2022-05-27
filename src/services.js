export function semaforo(cor){
    let msg = "";
    if(cor == "verde"){
        msg = "Pode passar";
    }

    else if(cor == "vermelho"){
        msg = "aguarde";
    }

    else 
    {
        msg = "invalido"
    }
    
    return msg;
}

export function diaSemana(dia){
    let msg = "";
    if(dia == 0){
        msg = "Domingo"
    }

    else if(dia == 1){
        msg = "Segunda"
    }

    else if(dia == 2){
        msg = "Terça"
    }

    else if(dia == 3){
        msg = "Quarta"
    }

    else if(dia == 4){
        msg = "Quinta"
    }

    else if(dia == 5){
        msg = "Sexta"
    }

    else if(dia == 6){
        msg = "Sabado"
    }

    else{
        msg = "Invalido"
    }

    return msg;
    
}
