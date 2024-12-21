
function infoHours() {
  const now = new Date();
  const heures = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const secondes = now.getSeconds().toString().padStart(2, '0');
  const final = `${heures}:${minutes}:${secondes}`;
  document.getElementById('infoHours').textContent = `LocalTime : ${final}`;
}setInterval(infoHours, 1000);
 
  
