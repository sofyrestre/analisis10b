// En código JavaScript, solicite lo necesario al usuario para hallar el área de un cuadrado y volumen de un cubo, realice las operaciones y muestre el resultado diciendo qué medidas tiene la figura y cuál es el área del cuadrado y el volumen del cubo.

console.log ("solucion punto 1")
var ladoc=prompt("por favor ingrese la medida del lado del cuadrado")
var areac=ladoc**2
console.log ("el lado del cuadrado equivale a "+ladoc+" por lo tanto el area equivale a "+areac)
var volumenc=ladoc**3
console.log ("el volumen del cubo equivale a "+volumenc)

console.log(" ")

//Dada la longitud de la base y el lado de un rectángulo, halle el área y su perímetro.

console.log ("solucion punto 2")
var baser=prompt("ingrese la longitud de la base de el rectangulo")
var lador=prompt("ingrese la longitud del lado de el rectangulo")
var arear=lador*baser
var perimetror= (lador*2)+(baser*2)
console.log ("el area del rectangulo equivale a "+arear+" y el perimetro del rectangulo a "+perimetror)

console.log (" ")

//Dado el diámetro halle el área de un círculo y el volumen de la esfera.

console.log ("solucion punto 3")
var diametrocir=prompt("ingrese el diametro del circulo")
var radiocir=diametrocir/2
var areacir=(radiocir**2)*Math.PI
var volumencir=4/3*Math.PI*(radiocir**3)
console.log ("el area del circulo equivale a "+areacir+" y el volumen de la esfera a "+volumencir)

console.log(" ")

//Cree las variables base1, base2 y h. Solicite el valor de ellas al usuario y halle el área de un trapezoide.

console.log ("solucion punto 4")
var base1tra=prompt("ingrese el valor de la base 1 del trapezoide")
var base2tra=prompt("ingrese el valor de la base 2 del trapezoide")
var alturatra=prompt("ingrese el valor de la altura del trapezoide")
var areatra= (base1tra+base2tra)*alturatra //calificar formula
console.log ("el area del trapezoide equivale a "+areatra)

console.log(" ")

//Dadas las medidas de ancho, largo y profundo de una piscina, calcule con cuántos litros de agua se llenaría.

console.log ("solucion punto 5")
var anchop=prompt("ingrese el ancho de la piscina")
var largop=prompt("ingrese el largo de la piscina")
var profundop=prompt("ingrese la profundidad de la piscina")
var aguap=(anchop)*(largop)*(profundop)
console.log ("en la piscina caben "+aguap+" litros de agua") 

console.log (" ")

//Se desea conocer el total a pagar por pintar la fachada de una vivienda, dado el alto y ancho del muro, cuánto se le debe pagar al pintor que cobra $22.000 por m2.

console.log ("solucion punto 6")
var altom=prompt("ingrese el alto de la fachada en metros")
var achom=prompt("ingrese el ancho de la fachada en metros")
var fachadam2=altom*achom
var pagom=fachadam2*22000
console.log ("el total a pagar por la pintada de su fachada es de "+pagom)

console.log (" ")

//Convierta las siguientes unidades
console.log ("solucion punto 7")

// A. Dada una longitud de centímetros, retorne su equivalencia en kilómetros.

console.log ("a.")
var cm=prompt("ingrese en cm la unidad que desea pasar a km")
var km=cm/100000
console.log (cm+"cm equivalen a "+km+"km")

// B. Dado un volumen en decilitros, dé su equivalente en litro.

console.log ("b.")
var deciltros=prompt("ingrese en dl la unidad que desea pasar a L")
var ltros=deciltros/10
console.log (deciltros+"dl equivalen a "+ltros+"L")

// C. Dada una masa de microgramos, retorne el equivalente en gramos.

console.log ("c.")
var microgramos=prompt("ingrese en mcg la unidad que desea pasar a g")
var gramos=microgramos/1000000
console.log (microgramos+"mcg equivalen a "+gramos+"g")

// D. Dada una distancia en kilómetros, represéntela en milímetros.

console.log ("d.")
var kilometros2=prompt("ingrese en km la unidad que desea pasar a mm")
var milimtros=kilometros2*1000000
console.log (kilometros2+"km equivalen a "+milimtros+"mm")


