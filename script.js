// creazione Array + variabile utente
var lista = [' Martini', ' Bianchi', ' Rossi', ' Esposito'];
var cognome;

// Crea ciclo di ripetizione per richiesta dati al nuovo utente, faccio in modo che il dato venga registrato nell' array prevenendo refusi, ordino l' array
for (var i = 0; i <1; i++) {
 cognome = prompt('Digita il tuo cognome');
 cognome = cognome.charAt(0).toUpperCase() + cognome.slice(1).toLowerCase();
 lista.push( cognome);
 lista.sort();
}
// individuo la posizione del nuovo dato all' interno dell' array
var posizione = lista.indexOf(cognome)+1;
//stampo a pagina il risultato
document.getElementById('Ordine-Iscritti').innerHTML = '<li>'+lista+'</li>' + '<br>' + 'Il nuovo Utente è stato inserito in posizione: '+ posizione;
