

function fecha_es_tupla(fecha){
    try{
        return (Number.isInteger(fecha[0]) && Number.isInteger(fecha[1]) && Number.isInteger(fecha[2]) && fecha[0]>0 && fecha[1]>0 && fecha[2]>0 );
    }catch(e){
        return false;
    }
}

function bisiesto(anio){
    return (anio%4 ==0 && (!anio % 100 ==0 || !anio % 400 == 0));
}

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
            if (fecha>31){
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

function dia_primero_enero(anioACalcular){
    //Domingo es=0
    resultado1=(anioACalcular-1)%7;
    resultado2=Math.floor(((anioACalcular-1)/4-(3*((anioACalcular-1)/100+1)/4)) % 7);
    return ((resultado1+resultado2+2) %7);
}
