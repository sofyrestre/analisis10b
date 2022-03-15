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

//operadores
var suma
suma= 5+3
console.log (suma)

suma=5+3;
let a=10;
suma=8+a;
suma=a+8
console.log(suma);

let b=20;
suma=a+b
console.log(suma);

//residuo
var residuo;
residuo=12%2;//0
console.log (residuo);

//contadores
//incremento (+)
var incre=1;
console.log (incre); //1
incre=incre+1;
console.log (incre); //2
incre+=1;
console.log(incre); //3
incre++
console.log(incre); //4

//decremento
var decre=1;
console.log (decre); 
decre=decre-1;
console.log (decre);
decre-=1;
console.log(decre); 
decre--;
console.log(decre);

//operaciones aumentadas
//son operaciones que se le realizan a una variable y el resultado se guarda en si mismo
//la  variable debe tener un valor antes de realizar una operacion

var sumaAumento=0;
sumaAumento+=1;
sumaAumento+=48;
console.log (sumaAumento);

var restaAumento=20;
restaAumento-=1;
restaAumento-=8;
console.log (restaAumento);

var productoAumento=20;
productoAumento*=1;
productoAumento*=8;
console.log (productoAumento);

var cocienteAumento=20;
cocienteAumento/=1;
cocienteAumento/=8;
console.log (cocienteAumento);

//potencia
var exp;
exp=3**2//3^2
console.log(exp)//9
exp=3**3//3^2
console.log(exp)

//cadenas o texto
//suma de cadenas
var nombre="sofia";
var apellido= "restrepo";
var nombrecompleto= nombre+" "+apellido;
console.log (nombrecompleto)

var cadenita1="3";
var cadenita2="5";
var cadenatotal=cadenita1+cadenita2;
console.log (cadenatotal)

//.length.
//permite conocer la longitud de una cadena o el tamaño de un vector
console.log (nombrecompleto.length);
console.log(nombre[0]);//S

//para encontrar el caracter en la ultima posicion de una cadena o vector se debe 
//buscar la longitud menos 1(.length-1)