# COUNTDOWN
Simulare un conto alla rovescia di 10 secondi alla fine dei quali il programma stampa Buon Anno!

Voglio far partire il conto alla rovescia dopo aver premuto un bottone.
- creo variabile *btnCountDown* e la collego ad un id che sarà il mio botton di avvio del timer
   - questa variabile dovrà essere ascoltata da un evento, al click il timer di 10 secondi partirà
     fino a 0 secondi
      
    - creo variabile dove andrò  depositare il tempo di  partenza  del *conteggio di 10 secondi*, che
    subirà un decremento es second--;
      
    - se il valore sarà <= a 9 allora avremo "0" concatenato a secondi.toString, ovvero il dato 
    non sarà più numerico ma sarà di tipo stringa
    
// VARIABILI
- btnCountDown
- counterSec

// LOGICA

 quando premo il bottone il contatore parte da 10 secondi fino ad arrivare a 0.
 Una volta arrivato a 0 dovrò stampare a schermo buon Anno!



