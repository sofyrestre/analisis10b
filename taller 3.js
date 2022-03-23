//Un profesor de música requiere un algoritmo que le ayude a calcular rápidamente cuánto debe cobrar por cada clase. La manera en que cobra es la siguiente. La primera hora cuesta $40.000, cada hora adicional cuesta $25.000. Dado el número de horas que duró la clase, retorne el total a cobrar por el alumno. (cada hora se cobra a partir del primer minuto, es decir, la cantidad de horas es un número entero)

var horasestudiante=prompt ("ingrese la cantidad de horas a cobrar");
var hora1= 40000;
var horasadicionales= (horasestudiante-1)*25000;
var pagofinal= hora1+horasadicionales;
console.log("el total a pagar por "+horasestudiante+" horas es de $"+pagofinal);