//# DICHIARO L'ORA ATTUALE E L'ORA DEL COUNTDOWN

const endTime = new Date("2023-08-24 9:30"); //* ora countdown
console.log(endTime);

//# FUNZIONE DI COUNTDOWN

function countdown() {
  const now = new Date(); //* ora attuale
  console.log(now);
  // sottraggo al tempo di fine il tempo attuale
  // trasformo la stringa della data in numero
  let time = Date.parse(endTime) - Date.parse(now);

  // calcolo i numeri di millesecondi in un giorno
  let days = Math.floor(time / (24 * 60 * 60 * 1000));
  document.getElementById("days").innerHTML = days;

  // calcolo il numero di ore rimanenti
  let hours = Math.floor((time % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  document.getElementById("hours").innerHTML = hours;

  // calcolo il numero di minuti rimanenti
  let minutes = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000));
  document.getElementById("minutes").innerHTML = minutes;

  // calcolo il numero di secondi rimanenti
  let seconds = Math.floor((time % (60 * 1000)) / 1000);
  document.getElementById("seconds").innerHTML = seconds;

  // blocco il countdown a 0
  if (time <= 0) {
    clearTimeout(countdown);
    alert("Inizia la lezione");
  }
}

setInterval(() => {
  countdown();
}, 1000);
