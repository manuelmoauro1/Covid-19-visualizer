document.addEventListener("DOMContentLoaded", iniciarPagina);
function iniciarPagina() {
    "use strict";
    document.getElementById("obtenerGlobales").addEventListener("click", obtenerGlobales);
    document.getElementById("obtenerSegunUser").addEventListener("click", obtenerPaisUser);

    const url = "https://api.covid19api.com/summary";
    const parrafoTexto = document.getElementById("texto");
    
    async function obtenerGlobales() {
        document.getElementById("texto").innerHTML = "Obteniendo datos...";
        
        try {
            let response = await fetch(url);
            if (response.ok) {
                let json = await response.json();
                document.getElementById("globalNuevosCasos").innerHTML = json.Global.NewConfirmed;
                document.getElementById("globalTotalCasos").innerHTML = json.Global.TotalConfirmed;
                document.getElementById("globalNuevasMuertes").innerHTML = json.Global.NewDeaths;
                document.getElementById("globalTotalMuertes").innerHTML = json.Global.TotalDeaths;
                document.getElementById("globalNuevosRecuperados").innerHTML = json.Global.NewRecovered;
                document.getElementById("globalTotalRecuperados").innerHTML = json.Global.TotalRecovered;
                document.getElementById("texto").innerHTML = "Ultima actualizacion: " + json.Date;
            }
        }
        catch {
            parrafoTexto.innerHTML = "Error al obtener los datos. Intente de nuevo mas tarde.";
        }
    }

    async function obtenerPaisUser() {
        const inputUser1 = document.getElementById("inputUser").value;
        const inputUser = inputUser1.toUpperCase();
        parrafoTexto.innerHTML = "Obteniendo los datos...";
        if (inputUser.length == 2) {
            try {
                let response = await fetch(url);
                if(response.ok) {
                    document.getElementById("datosUser").innerHTML = " ";
                    let json = await response.json();
                    for(let i = 0; i < json.Countries.length; i++) {
                        if (json.Countries[i].CountryCode == inputUser) {
                            let newDiv = document.createElement("div");
                            newDiv.id = "alignDiv";
                            document.getElementById("datosUser").appendChild(newDiv);

                            let pais = document.createElement("h2");
                            pais.innerHTML = json.Countries[i].Country;
                            document.getElementById("alignDiv").appendChild(pais);

                            let newCC = document.createElement("p");
                            newCC.innerHTML = "Nuevos casos confirmados: " + json.Countries[i].NewConfirmed;
                            document.getElementById("alignDiv").appendChild(newCC);
    
                            let newTC = document.createElement("p");
                            newTC.innerHTML = "Total casos confirmados: " + json.Countries[i].TotalConfirmed;
                            document.getElementById("alignDiv").appendChild(newTC);
    
                            let newDC = document.createElement("p");
                            newDC.innerHTML = "Nuevas muertes confirmadas: " + json.Countries[i].NewDeaths;
                            document.getElementById("alignDiv").appendChild(newDC);
    
                            let newTD = document.createElement("p");
                            newTD.innerHTML = "Total casos confirmados: " + json.Countries[i].TotalDeaths;
                            document.getElementById("alignDiv").appendChild(newTD);
    
                            let newRC = document.createElement("p");
                            newRC.innerHTML = "Nuevos casos recuperados : " + json.Countries[i].NewRecovered;
                            document.getElementById("alignDiv").appendChild(newRC);
    
                            let newTR = document.createElement("p");
                            newTR.innerHTML = "Total casos confirmados: " + json.Countries[i].TotalRecovered;
                            document.getElementById("alignDiv").appendChild(newTR);
    
                            let espaciado = document.createElement("p");
                            espaciado.innerHTML = "---------------------------------------------";
                            document.getElementById("alignDiv").appendChild(espaciado);
                        }
                    }
                    parrafoTexto.innerHTML = "Ultima actualizacion: " + json.Date;
                }
            }
            catch {
                parrafoTexto.innerHTML = "Error al obtener los datos. Intente de nuevo mas tarde" ;
            }
        }
        else if(inputUser1.length > 2) {
            try {
                let response = await fetch(url);
                if(response.ok) {
                    document.getElementById("datosUser").innerHTML = " ";
                    let json = await response.json();
                    for(let i = 0; i < json.Countries.length; i++) {
                        if (json.Countries[i].Country == inputUser1) {
                            let newDiv = document.createElement("div");
                            newDiv.id = "alignDiv";
                            document.getElementById("datosUser").appendChild(newDiv);

                            let pais = document.createElement("h2");
                            pais.innerHTML = json.Countries[i].Country;
                            document.getElementById("alignDiv").appendChild(pais);

                            let newCC = document.createElement("p");
                            newCC.innerHTML = "Nuevos casos confirmados: " + json.Countries[i].NewConfirmed;
                            document.getElementById("alignDiv").appendChild(newCC);
    
                            let newTC = document.createElement("p");
                            newTC.innerHTML = "Total casos confirmados: " + json.Countries[i].TotalConfirmed;
                            document.getElementById("alignDiv").appendChild(newTC);
    
                            let newDC = document.createElement("p");
                            newDC.innerHTML = "Nuevas muertes confirmadas: " + json.Countries[i].NewDeaths;
                            document.getElementById("alignDiv").appendChild(newDC);
    
                            let newTD = document.createElement("p");
                            newTD.innerHTML = "Total muertes confirmadas: " + json.Countries[i].TotalDeaths;
                            document.getElementById("alignDiv").appendChild(newTD);
    
                            let newRC = document.createElement("p");
                            newRC.innerHTML = "Nuevos casos recuperados : " + json.Countries[i].NewRecovered;
                            document.getElementById("alignDiv").appendChild(newRC);
    
                            let newTR = document.createElement("p");
                            newTR.innerHTML = "Total casos confirmados: " + json.Countries[i].TotalRecovered;
                            document.getElementById("alignDiv").appendChild(newTR);
    
                            let espaciado = document.createElement("p");
                            espaciado.innerHTML = "---------------------------------------------";
                            document.getElementById("alignDiv").appendChild(espaciado);
                        }
                    }  
                    parrafoTexto.innerHTML = "Ultima actualizacion: " + json.Date;
                }
            }
            catch {
                parrafoTexto.innerHTML = "Error al obtener los datos. Intente de nuevo mas tarde" ;
            }

        }
        else {
            parrafoTexto.innerHTML =
             "Por favor escriba bien el codigo del pais.<br> Si no lo conoces puedes encontrarlo en: https://www.iban.com/country-codes";
        }
        
    }
}