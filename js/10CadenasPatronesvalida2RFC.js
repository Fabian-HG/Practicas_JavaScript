
function valida(campo){
			var bRet = false;
			if (campo.value == "")
				alert("Faltan datos");
			else 	if (!campo.value.match(/^[A-Z]{3,4}\d{6}[A-Z0-9]{3}$/)){
     var elemento = document.createElement("h2");
  var lista = document.getElementById("apartado");
  var nuevoElemento = "<h2>No tiene formato de RFC</h2>";
  apartado.innerHTML = apartado.innerHTML + nuevoElemento;}
				else
					bRet = true;
			return bRet;
		}