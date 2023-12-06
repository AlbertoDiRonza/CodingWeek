/* alert: funzione js, serve a definiere pezzi di codice riutilizzabili, mette in pausa il caricamento della pagina */

// cominicare con il terminale
console.log("Sono un'informazione da comunicare dietro le quinte");

// Variabili
let userName = "Alberto";
let eta = 30; 
//esiste il concetto di costruttore
//esiste il concetto di condzione
// concatenazione di stringhe
alert("Welcome " + userName + "!");


//creare una funzione personalizzata 
//ovvio che la funzione va chiamata
myFunction();
myFunction();
myFunction();
myFunction();
myFunction();
myFunction();
//ora senza parametro, il valore di ritorno non specificato, da scontato void?
function myFunction(){
    console.log("Sono una istrusione dentro la funzione");
}