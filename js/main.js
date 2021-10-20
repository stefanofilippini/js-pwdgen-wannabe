// Password generator:
// - chiedi all’utente il suo nome,
// - poi chiedi il suo cognome,
// - poi chiedi il suo colore preferito
// - infine scrivi sulla pagina i dati ricevuti nel formato: nomecognomecolorepreferito21

const nome = prompt ('inserisci qui il tuo nome');
const cognome = prompt ('inserisci qui il tuo cognome');
const colore = prompt ('inserisci qui il tuo colore preferito');
document.getElementById("password").innerHTML= nome + cognome + colore + '21';
//document.getElementById("password").innerHTML= `La tua password è : ${nome}${cognome}${colore}21`;