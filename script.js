

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Validazione base del form
  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let message = document.getElementById('message').value.trim();
  
  if (name === "" || email === "" || message === "") {
    alert("Per favore, compila tutti i campi.");
    return;
  }
  
  // Simulazione dell'invio del form
  alert("Grazie " + name + ", il tuo messaggio è stato inviato!");
  this.reset();
});
