//INPUT
// ottengo l'elemento HTML con id "secondCountDown"
const counterSc = document.getElementById("secondCd");
const happyYear = document.getElementById("happyNewYear");

// definisco la variabile conteggio
let countD = 0;

// eve
const btnCd = document.getElementById("btnCd").addEventListener("click", function(){
    countD = 10;
    
const clock = setInterval(function(){
   // Aggiorno il contenute dell elemento HTML con il contenuto di countD 
   counterSc.innerHTML = countD --;
   // condizione se variabile conteggio è uguale a -1 applica clearInver 
   // bloccherà setInterval
   if(countD === -1) {
    let countentMess = "Buon Anno!";
    happyYear.innerHTML = countentMess;
    clearInterval(clock)
    
   } 

   console.log(countD)
},1000);
    
});

    








