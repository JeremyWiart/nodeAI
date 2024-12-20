


function elementTime(){
 const timeElement = document.getElementById('infoHours');
 const timeNode = document.createTextNode(timeElement.textContent);
  

  timeElement.appendChild(timeNode);
  return timeElement.textContent;

}
 

setInterval(elementTime,1000);

