function encriptar(){
    var caja = document.getElementById("cajatxt").value;
    var cajacifrada = caja.replace(/e/gmi,"enter").replace(/i/gmi,"imes").replace(/a/gmi,"ai").replace(/o/gmi,"ober").replace(/u/gmi,"ufat")
    
document.getElementById("cajaresultado").value = cajacifrada;
document.getElementById("parrafo").style.display = "none"
document.getElementById("muneco1").style.display = "none"
document.getElementById("cajaresultado").style.display = "none"
document.getElementById("cajaresultado").style.display = "inherit"





}
function desencriptar ()
{

var caja = document.getElementById("cajatxt").value;
var cajacifrada = caja.replace(/enter/gmi, "e").replace(/imes/gmi, "i").replace(/ai/gmi, "a").replace(/ober/gmi, "o").replace(/ufat/gmi, "u")

document.getElementById("cajaresultado").value = cajacifrada;
document.getElementById("parrafo").style.display = "none"
document.getElementById("muneco1").style.display = "none"
document.getElementById("cajaresultado").style.display = "none"
document.getElementById("cajaresultado").style.display = "inherit"


}

