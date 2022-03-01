console.log("Hola mundo");
//comentario en linea
/*comentario
en 
varias
lineas
*/

// Variables
/*Son espacios de memoria que almacenan informacion
existen varios tipos de variables en js, pero generalmente se utilizan los siguientes:
String: almacena cadenas de texto. Se debe declarar o asignar el valor entre comillas
int: almacena numeros enteros 
double: almacena numeros Reales 
boolean: almacena valores de verdad (true y false)
*/
/*Declarar variables
declarar una variable es crearla,decirle al lenguaje como se llama la variable e indicarle que ya existe.
para declarar una variable se puede utilizar ya sea la palabra reservada var o let
*/

var nombre;
console.log(nombre);

/* inicializar variables
para inicializar variables es necesario asignar un valor cuando se crea esta variable
*/

var apellido="Restrepo";
console.log(apellido);

/*Asignar un valor
se hace mediante el signo igual, se debe hacer sobre una variable que ya fue declarada
*/

nombre= "sofia";
console.log (nombre+" "+apellido)

//Desde otra variable
var edad=14;
var edadestudiante=edad 
//Desde el teclado
var gradoestudiante=prompt("ingrese el grado");
console.log ("el grado es: "+gradoestudiante);
/* constantes: Son valores que una vez inicializados no se puede cambiar lo que se almacena, se crea con la palabra reservada const, 
el nombre de las constantes se escribe todo en mayusculas para diferenciarlo de las variables
*/
const PI=3.1416;
//PI=5
//imprimir por consola
//simple
console.log ("mensaje");
console.log(nombre);
//concatenado
console.log("la edad es "+edad+" años");

