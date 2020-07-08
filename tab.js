
function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("tabCommBody");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(cityName).style.display = "block";  
}
