var cognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
var cognomeUtente = prompt('Inserisci il tuo cognome');
cognomi.push(cognomeUtente);
cognomi.sort();
for (var i = 0; i < cognomi.length; i++){
  document.getElementById('cognomi').innerHTML += '<li>' + cognomi[i] + '</li>';
}
var posizione = cognomi.indexOf(cognomeUtente) +1;
document.getElementById('posizione').innerHTML = 'Il cognome inserito si trova nella posizione numero:' + '' + posizione;
