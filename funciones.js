//sitio de apuestas de tenis//


function grandSlam () {
    let resultado = parseInt(prompt("Elegi el grand slam en el cual deseas apostar: \n 1 - Australian Open \n 2-Roland Garros \n 3- Wimbledon \n 4 Us Open"))
    switch (resultado) {
        case 1:
            alert("Elegiste el Australian Open. ¡Genial! \n Veremos ahora que opciones de jugadores hay...");
            break;
        case 2:
            alert("Elegiste Wimbledon. ¡Genial! \n Veremos ahora que opciones de jugadores hay...");
            break;
        case 3:
            alert("Elegiste Roland Garros. ¡Genial! \n Veremos ahora que opciones de jugadores hay...");
            break;
        case 4:
            alert("Elegiste Us Open. ¡Genial! \n Veremos ahora que opciones de jugadores hay...");
            break;
        default:
            while (resultado<1 || resultado>4) {
                grandSlam();
            }
            }
    }
    

        function player () {
    
        let resultado = parseInt(prompt("¿Por cual jugador deseas apostar?: \n 1- Medvedev \n 2-Nadal \n 3-Alcaraz \n 4- Tsisipas \n 5-Ruud "));
    
            if (resultado==1) {
                alert("Elegiste al numero 1 del mundo. Por cada peso que apuestes, te vas a llevar " + (0.5*resultado) + " pesos adicionales. ¿Deseas confirmar? Te llevaremos para que abones...");
                
            } else if (resultado==2){
                alert("Elegiste al numero 2 del mundo. Por cada peso que apuestes, te vas a llevar " + (0.5*resultado)+" pesos adicionales. ¿Deseas confirmar? Te llevaremos para que abones...");
            }
                
            else if (resultado==3){
                alert("Elegiste al numero 3 del mundo. Por cada peso que apuestes, te vas a llevar " + (0.5*resultado)+" pesos adicionales. ¿Deseas confirmar? Te llevaremos para que abones...");}
                
            else if (resultado==4){
                alert("Elegiste al numero 4 del mundo. Por cada peso que apuestes, te vas a llevar " + (0.5*resultadoi)+" pesos adicionales. ¿Deseas confirmar? Te llevaremos para que abones...");}
                
            else if (resultado==5){
                alert("Elegiste al numero 5 del mundo. Por cada peso que apuestes, te vas a llevar " + (0.5*resultado)+" pesos adicionales. ¿Deseas confirmar? Te llevaremos para que abones...");}
                
            else {
                while(resultado<1 || resultado>5)
                player();
            }
        }
        
        function cobrar () {
            let metodoPagoCorrecto=("VISA")
            let metodoPagoCorrecto1=("CABAL");
            let metodoPagoCorrecto2=("MASTERCARD");
            let metodoPagoCorrecto3=("AMERICAN EXPRESS");
            
            for (let index = 3;index > 0;index--) {
                let metodoPago=prompt("Elegi un metodo de pago para abonar, tenes " + index + " opciones");
                let metodoPagoM= metodoPago.toUpperCase();
                if (metodoPagoM==metodoPagoCorrecto||metodoPagoM==metodoPagoCorrecto1||metodoPagoM==metodoPagoCorrecto2||metodoPagoM==metodoPagoCorrecto3) 
                {
                    alert("Barbaro, vas a poder abonar.Te redirigiremos para el pago. Espere unos segundos... ");
                    break;
                }

            }
        }

        
grandSlam();
player();
cobrar();

