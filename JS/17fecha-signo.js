function validaFechaMenor(campo){
        var bRet = false;
        var dHoy = new Date();
        var dCapt = null;
        if (campo.value == "")
          alert("Faltan datos");
        else{
          dCapt = validaFecha(campo.value);
          if (dCapt != null && dCapt < dHoy)
            bRet = true;
          else
            alert("La fecha debe ser menor a la fecha actual");
        }
        return bRet;
      }

        function validaFecha(valor){
        		var dConvertida = null;
        		var sAnio = "";
        		var sMes = "";
        		var sDia = "";
        		var nAnio=0, nMes=0, nDia = 0;

        		if (valor.match(/^\d{4}\-\d{2}\-\d{2}$/)){
        			nAnio = parseInt(valor.substring(0,4), 10);
        			nMes = parseInt(valor.substring(5,7), 10);
        			nDia = parseInt(valor.substring(8,10), 10);

        			if (nDia <1 || nDia>31)
        				alert("El día no es válido")
        			else{
        				if (nMes <1 || nMes>12)
        					alert("El mes no es válido");
        				else{
        					if ((nMes==1 || nMes==3 || nMes==5 || nMes==7 ||
        						 nMes==8 || nMes==10 || nMes==12) && nDia > 31)
        						 alert("El mes tiene máximo 31 días");
        					else if ((nMes==4 || nMes==6 || nMes==9 ||
        								nMes==11) && nDia > 30)
        						 alert("El mes tiene máximo 30 días");
        					else if ((nMes==2) && ((nDia>29) || (nAnio%4!=0 && nDia>28)))
        						 alert("Febrero tiene 28 días o 29 en bisiesto");
        					else{
        						dConvertida = new Date();
        						dConvertida.setFullYear(nAnio, nMes-1, nDia);
        					}//fin validaci�n día-mes
        				}//mes válido
        			}//día válido
              creasigno(nDia,nMes);
        		}//formato válido

        		else{
        			alert("No tiene formato de fecha");
        		}
        		return dConvertida;
        }
        function creasigno(nDia,nMes){
             var color="";

        var newDiv = document.createElement("div");

        if((nDia>20) && (nMes==3) || (nDia <=20) && (nMes==4)){
        var newContent = document.createTextNode("SIGNO ARIES Números de la suerte: 11, 24 y 60.");
            color="#5b8c5a";
            }
        else if ((nDia>20) && (nMes==4) || (nDia <=20) && (nMes==5)){
          var newContent = document.createTextNode("SIGNO TAURO Números de la suerte: 21, 40 y 33.");
            color="#ffa372"
            }
          else if ((nDia>20) && (nMes==5) || (nDia <=20) && (nMes==6)){
            var newContent = document.createTextNode("SIGNO GEMINIS Números de la suerte: 19, 33 y 67.");
              color="#beebe9"
              }
            else if ((nDia>20) && (nMes==6) || (nDia <=22) && (nMes==7)){
              var newContent = document.createTextNode("SIGNO CANCER Números de la suerte 22, 9 y 45.");
                color="#ffffff"
                }
              else if ((nDia>22) && (nMes==7) || (nDia <=23) && (nMes==8)){
                var newContent = document.createTextNode("SIGNO LEO Números de la suerte: 13, 54 y 09.");
                  color="#413c69";
              }
                else if ((nDia>23) && (nMes==8) || (nDia <=22) && (nMes==9)){
                  var newContent = document.createTextNode("SIGNO VIRGO Números de la suerte: 13, 33 y 78.");
                    color="#ffac41";
                    }
                  else if ((nDia>22) && (nMes==9) || (nDia <=22) && (nMes==10)){
                    var newContent = document.createTextNode("SIGNO LIBRA Números de la suerte: 19, 70 y 21.");
                      color="#d63447";
                      }
                    else if ((nDia>22) && (nMes==10) || (nDia <=22) && (nMes==11)){
                      var newContent = document.createTextNode("SIGNO ESCORPIO Números de la suerte: 10, 78 y 11.");
                        color="#790c5a";
                        }
                      else if ((nDia>22) && (nMes==11) || (nDia <=21) && (nMes==12)){
                        var newContent = document.createTextNode("SIGNO SAGITARIO Números de la suerte: 29, 69 y 18.");
                          color="#ffe75e";
                          }
                        else if ((nDia>21) && (nMes==12) || (nDia <=21) && (nMes==1)){
                          var newContent = document.createTextNode("SIGNO CAPRICORNIO Números de la suerte: 19, 67 y 13.");
                            color:"#ffe3ed";
                            }
                          else if ((nDia>21) && (nMes==1) || (nDia <=21) && (nMes==2)){
                            var newContent = document.createTextNode("SIGNO ACUARIO Números de la suerte: 10, 55 y 33.");
                              color="#84142d";
                              }
                            else if ((nDia>22) && (nMes==21) || (nDia <=23) && (nMes==3)){
                              var newContent = document.createTextNode("SIGNO PICIS Números de la suerte: 29, 87 y 56.");
                                color="#e5e4cc";
                                }


        //var newContent = document.createTextNode("SIGNO");
        newDiv.appendChild(newContent); //añade texto al div creado.

         // añade el elemento creado y su contenido al DOM
         var currentDiv = document.getElementById("div");
         document.body.insertBefore(newDiv, currentDiv);
        newDiv.style="border: 3px solid #999999; background-color:"+color+"; width: 200px ;height:300px ";
}
