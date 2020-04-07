function men(){
var numero = prompt("Introduce un n\u00famero y se mostrar\u00e1 su factorial");
var resultado = 1;

for(var i=1; i<=numero; i++) {
  resultado *= i;
}
  var elemento = document.createElement("h2");
  var lista = document.getElementById("apartado");
  var nuevoElemento = "<h2>Resultado del facorial de "+numero+" es: "+resultado+"</h2>";
  apartado.innerHTML = apartado.innerHTML + nuevoElemento;
}