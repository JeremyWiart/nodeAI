

function afficherHeure() {
  
  const maintenant = new Date();
  const heures = maintenant.getHours().toString().padStart(2, '0');
  const minutes = maintenant.getMinutes().toString().padStart(2, '0');
  const secondes = maintenant.getSeconds().toString().padStart(2, '0');
  const final = `${heures}:${minutes}:${secondes}`;
  
  console.log(final); 
  
  document.getElementById('infoHours').textContent = `LocalTime : ${final}`;
}

// Mettre à jour chaque seconde
setInterval(afficherHeure, 1000);
 
  
//afficherHeure();