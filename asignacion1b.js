
//Funcion R0
function fecha_es_tupla(fecha){
    try{
        return (Number.isInteger(fecha[0]) && Number.isInteger(fecha[1]) && Number.isInteger(fecha[2]) && fecha[0]>0 && fecha[1]>0 && fecha[2]>0 );
    }catch(e){
        return false;
    }
}

//Funcion R1
function bisiesto(anio){
    return (anio%4 ==0 && (!anio % 100 ==0 || !anio % 400 == 0));
}

//Funcion R2
function fecha_es_valida(fecha){
    if(fecha[0]>=1582 && fecha[1]<=12 && fecha[2]<=31 && fecha[1]>=1 && fecha[2]>=1){
        if(fecha[1]==2 && bisiesto(fecha[0])){   
            return (fecha[2]<=29)
        }else{
            if(fecha[1]<=7){
                if(fecha[1]==2){
                    return (fecha[2]<=28);
                }else if(fecha[1]%2==0){
                    return (fecha[2]<=30);
                }else{
                    return (fecha[2]<=31);
                }
            }else{
                if(fecha[1]%2==0){
                    return (fecha[2]<=31);
                }else{
                    return (fecha[2]<=30);
                }
            }
        }
    }
    return false;
}

//Funcion R3
function dia_siguiente(fecha){
    fecha[2]++;
    if(fecha[1]<=7){
        if(fecha[1]==2){
            if(fecha[0]%4==0){
                if(fecha[2]>29){
                    fecha[2]=1;
                    fecha[1]=3;
                }
            }else{
                if(fecha[2]>28){
                    fecha[2]=1;
                    fecha[1]=3;
                }
            }
        }else if(fecha[1]%2==0){
            if(fecha[2]>30){
                fecha[2]=1;
                fecha[1]++;
            }
        }else{
            if (fecha[2]>31){
                fecha[2]=1;
                fecha[1]++;
            }
        }
    }else{
        if(fecha[1]%2==0){
            if (fecha[2]>31){
                fecha[2]=1;
                fecha[1]++;
                if(fecha[1]>12){
                    fecha[1]=1;
                    fecha[0]++;
                }
            }
        }else{
            if (fecha[2]>30){
                fecha[2]=1;
                fecha[1]++;
            }
        }
    }
    return fecha;
}

//Funcion R4
function dias_desde_primero_enero(fecha){
    var dias=0;
    dias+=fecha[2];
    dias--;
    while(fecha[1]!=1){
        fecha[1]--;
        if(fecha[1]<=7){
            if(fecha[1]==2){
                if(fecha[0]%4==0){
                    dias++;
                }
                dias+=28;
            }else{ 
                if(fecha[1]%2!=0){
                    dias++;
                }
                dias+=30;
            }
        }else{
            if(fecha[1]%2==0){
                dias++;
            }
            dias+=30;
        }
    }
    return dias;
}

//Funcion R5
function dia_primero_enero(anioACalcular){
    //Domingo es=0
    resultado1=(anioACalcular-1)%7;
    resultado2=Math.floor(((anioACalcular-1)/4-(3*((anioACalcular-1)/100+1)/4)) % 7);
    return ((resultado1+resultado2+2) %7);
}

//Funcion R6
function imprimir_4x3(anio){
    str="Calendario del año "+anio+ " D.C\n"
    mes=1
    var cont=[ ["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""] ]
    for(let i=0; i < 12; i++){
        cont[i]=["                     ","                     ","                     ","                     ","                     ","                     "]
    }
    while(mes<=12){
        inicio=dia_semana([anio,mes,1])*3;
        dia=1
        var maximo=31
        texto=""
        if(mes<=7){
            if(mes==2){
                if(bisiesto(anio)){
                    maximo=29
                }else{
                    maximo=28
                }
            }else if(mes%2==0){
                maximo=30
            }else{
                maximo=31
            }
        }else{
            if(!((mes%2)==0)){
                maximo=30
            }else{
                maximo=31
            }
        }
        var pos=0;
        while(pos<inicio){
            texto+=" "
            pos++;
        }
        var semana=0;
        while(dia<=maximo){
            if(dia<10){
                texto+=" "+dia+" ";
            }else{
                texto+=dia+" ";
            }
            dia++;
            if(texto.length==21){
                cont[(mes-1)][semana]=texto;
                semana++;
                texto="";
            }
        }
        if(texto!=""){
            while(texto.length<21){
                texto+=" "
            }
            cont[(mes-1)][semana]=texto;
            semana++;
            texto="";
        }
        mes++;
    }
    str+="       Enero         |        Febrero      |        Marzo        |\n"
    str+=" D  L  K  M  J  V  S | D  L  K  M  J  V  S | D  L  K  M  J  V  S |\n"
  //str+="                     |"
    str+=cont[0][0]+"|"+cont[1][0]+"|"+cont[2][0]+"|\n"
    str+=cont[0][1]+"|"+cont[1][1]+"|"+cont[2][1]+"|\n"
    str+=cont[0][2]+"|"+cont[1][2]+"|"+cont[2][2]+"|\n"
    str+=cont[0][3]+"|"+cont[1][3]+"|"+cont[2][3]+"|\n"
    str+=cont[0][4]+"|"+cont[1][4]+"|"+cont[2][4]+"|\n"
    str+=cont[0][5]+"|"+cont[1][5]+"|"+cont[2][5]+"|\n"
    str+="\n";
    str+="       Abril         |         Mayo        |        Junio        |\n"
    str+=" D  L  K  M  J  V  S | D  L  K  M  J  V  S | D  L  K  M  J  V  S |\n"
    str+=cont[3][0]+"|"+cont[4][0]+"|"+cont[5][0]+"|\n"
    str+=cont[3][1]+"|"+cont[4][1]+"|"+cont[5][1]+"|\n"
    str+=cont[3][2]+"|"+cont[4][2]+"|"+cont[5][2]+"|\n"
    str+=cont[3][3]+"|"+cont[4][3]+"|"+cont[5][3]+"|\n"
    str+=cont[3][4]+"|"+cont[4][4]+"|"+cont[5][4]+"|\n"
    str+=cont[3][5]+"|"+cont[4][5]+"|"+cont[5][5]+"|\n"
    str+="\n";
    str+="       Julio         |        Agosto       |      Setiembre      |\n"
    str+=" D  L  K  M  J  V  S | D  L  K  M  J  V  S | D  L  K  M  J  V  S |\n"
    str+=cont[6][0]+"|"+cont[7][0]+"|"+cont[8][0]+"|\n"
    str+=cont[6][1]+"|"+cont[7][1]+"|"+cont[8][1]+"|\n"
    str+=cont[6][2]+"|"+cont[7][2]+"|"+cont[8][2]+"|\n"
    str+=cont[6][3]+"|"+cont[7][3]+"|"+cont[8][3]+"|\n"
    str+=cont[6][4]+"|"+cont[7][4]+"|"+cont[8][4]+"|\n"
    str+=cont[6][5]+"|"+cont[7][5]+"|"+cont[8][5]+"|\n"
    str+="\n";
    str+="      Octubre        |       Noviembre     |      Diciembre      |\n"
    str+=" D  L  K  M  J  V  S | D  L  K  M  J  V  S | D  L  K  M  J  V  S |\n"
    str+=cont[9][0]+"|"+cont[10][0]+"|"+cont[11][0]+"|\n"
    str+=cont[9][1]+"|"+cont[10][1]+"|"+cont[11][1]+"|\n"
    str+=cont[9][2]+"|"+cont[10][2]+"|"+cont[11][2]+"|\n"
    str+=cont[9][3]+"|"+cont[10][3]+"|"+cont[11][3]+"|\n"
    str+=cont[9][4]+"|"+cont[10][4]+"|"+cont[11][4]+"|\n"
    str+=cont[9][5]+"|"+cont[10][5]+"|"+cont[11][5]+"|\n"
    return str
}

//Funcion R7
function dia_semana(fecha){
    diasTranscurridos = dias_desde_primero_enero(fecha);
    primeroEnero = dia_primero_enero(fecha[0])
    return (diasTranscurridos + primeroEnero)%7
}

//Funcion R8
function fecha_futura(fecha,dias){
    while(dias>0){
        fecha=dia_siguiente(fecha);
        dias--;
    }
    return fecha;
}

//Funcion R9
function dias_entre(fecha1,fecha2){
    var fechaMayor;
    var fechaMenor;
    if(fecha1[0]!=fecha2[0]){
        if(fecha1[0]<fecha2[0]){
            fechaMenor=fecha1;
            fechaMayor=fecha2;
        }else{
            fechaMenor=fecha2;
            fechaMayor=fecha1;
        }
    }else{
        if(fecha1[1]!=fecha2[1]){
            if(fecha1[1]<fecha2[1]){
                fechaMenor=fecha1;
                fechaMayor=fecha2;
            }else{
                fechaMenor=fecha2;
                fechaMayor=fecha1;
            }
        }else{
            if(fecha1[2]!=fecha2[2]){
                if(fecha1[2]<fecha2[2]){
                    fechaMenor=fecha1;
                    fechaMayor=fecha2;
                }else{
                    fechaMenor=fecha2;
                    fechaMayor=fecha1;
                }   
            }else{
                return 0;
            }
        }
    }
    var diasFechaMenor=dias_desde_primero_enero(fechaMenor);
    var diasFechaMayor=dias_desde_primero_enero(fechaMayor);
    resultado=0;
    while(fechaMayor[0]>fechaMenor[0]){
        resultado+=dias_desde_primero_enero([fechaMenor[0],12,31]);
        resultado-=diasFechaMenor;
        fechaMenor[0]++;
        if(fechaMenor[2]==29 && fechaMenor[1]==2){
            fechaMenor[2]=1;
            fechaMayor[1]=3;
        }
        resultado+=dias_desde_primero_enero(fechaMenor);
    }
    resultado+=diasFechaMayor-diasFechaMenor;
    return resultado;
}
