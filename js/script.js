//INPUT
// definisco la variabile conteggio
let countD = 0;
// ottengo l'elemento HTML con id "secondCountDown"
const counterSc = document.getElementById("secondCd");
// Aggiorno il contenute dell elemento HTML con il contenuto di countD




const btnCd = document.getElementById("btnCd").addEventListener("click", function(){
    countD = 10;
    
const clock = setInterval(function(){
   countD --;
   if(countD === 0) {
    clearInterval(clock)
    console.log("buon Anno!")
   }
   console.log(countD)
},1000);
    
});





