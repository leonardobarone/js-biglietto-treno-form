var bottoneGenera = document.getElementById("bottoneGenera");
var bottoneAnnulla = document.getElementById("bottoneAnnulla");

bottoneGenera.addEventListener("click",
    function() {
        var nome = document.getElementById("nome").value;
        var km = Number(document.getElementById("km").value);
        var fascia = document.getElementById("fascia").value;

        var prezzo = km * 0.21;
        
    
        if ( fascia == "minorenne" ){
            prezzo = prezzo - prezzo * 0.2;
            var sconto = " Tariffa Under-18"
        } else if ( fascia == "maggiorenne") {
            prezzo = prezzo; 
            var sconto = "Tariffa Standard"
        } else {
            prezzo = prezzo - prezzo * 0.4;
            var sconto = "Tariffa Over 65";
        } 

        var prezzoFinale = Number(prezzo.toFixed(2));
        
        document.getElementById("nome-passeggero").innerHTML = nome;
        document.getElementById("totale").innerHTML = prezzoFinale + "€";
        document.getElementById("tipo-offerta").innerHTML = sconto;
        
        document.getElementById("biglietto").classList.add("aperto");
    }
);

bottoneAnnulla.addEventListener("click", 
    function() {

        document.getElementById("nome").value = "";
        document.getElementById("km").value = "";
        document.getElementById("fascia").value = "";

        document.getElementById("biglietto").classList.remove("aperto");
    }
);


// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// Buon lavoro a domani! :faccia_leggermente_sorridente: