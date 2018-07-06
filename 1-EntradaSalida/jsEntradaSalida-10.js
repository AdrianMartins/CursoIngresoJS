/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
  var importe;
  var Resultado;
  importe =document.getElementById('importe').value;
  importe =parseInt(importe);
  resultado =document.getElementById('resultado').value;
  resultado =parseInt(resultado);

  resultado = (importe * 25) / 100;

  resultado = importe - resultado;

  alert(resultado);
}
