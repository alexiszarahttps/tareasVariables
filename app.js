// Ejercicio 0

var nombreDeLaPersona = window.prompt("Cómo es tu nombre?");

var apellidoDeLaPersona = window.prompt("Cómo es tu apellido?");

alert("¡Hola,"+ " " + nombreDeLaPersona + " " + apellidoDeLaPersona + "!");



// Ejercicio 1

var primerNumero = window.prompt("Escribe primer numero:");
var segundoNumero = window.prompt("Escribe segundo numero:");
var resultado = parseInt(primerNumero) + parseInt(segundoNumero);
console.log("Tu resultado es: " + resultado);

 

// Ejercicio 2

var edadDePersona = window.prompt("Escribe tu edad");
var resultadoDeEdad = 2021 - parseInt(edadDePersona);
console.log("El año que naciste es:" + resultadoDeEdad);



// Ejercicio 3

alert("Tu saldo de cuenta es de $250000")
var dineroRetirado = window.prompt("Cuanto dinero deseas retirar?")
var saldo = 250000 - parseInt(dineroRetirado)
alert("Tu nuevo saldo es de: " + "$" + saldo)



// Ejercicio 4

var primerNota = window.prompt("Escriba la primer nota");
var segundaNota = window.prompt("Escriba la segunda nota");
var tercerNota = window.prompt("Escriba la tercer nota");
var resultado = (parseInt(primerNota) + parseInt(segundaNota) + parseInt(tercerNota)) / 3;
console.log("El promedio es: " + resultado)



// Ejercicio 5

var medidaMetros = window.prompt("Ingrese una medida en metros");
var conversionApies = parseInt(medidaMetros) * 3.28;
alert("Su medida en pies es de: " + conversionApies);

var conversionAcm = parseInt(medidaMetros) * 100;
alert("Su medida en centimetros es de: " + conversionAcm);

var conversionApulg = parseInt(medidaMetros) * 39.37;
alert("Su medida en pulgadas es de: " + conversionApulg);


// Ejercicio 6

var primerNro = window.prompt("Ingrese un numero");
var segundoNro = window.prompt("Ingrese otro numero");
var resultadoSuma = parseInt(primerNro) + parseInt(segundoNro);
alert("La suma de sus dos números es de: " + resultadoSuma);

var tercerNro = window.prompt("Ingrese un numero más");
var resultadoFinal = tercerNro * resultadoSuma;
alert("El resultado es de: " + resultadoFinal);


//  Ejercicio 7

var nroMinutos = window.prompt("Ingrese un número en minutos");
var conversionAsegundos = parseInt(nroMinutos) * 60;
alert("Su número en segundos es de: " + conversionAsegundos);


// Ejercicio 8

var medidaBase = prompt("Ingrese la medida de la base en cm");
var medidaAltura = prompt("Ingrese la medida de la altura en cm");
var resultado = parseInt(medidaBase) * parseInt(medidaAltura);
alert("El area del rectangulo es: " + resultado + "cm ² ");


// Ejercicio 9

var medidaBase = prompt("Ingrese la medida de la base en cm");
var medidaAltura = prompt("Ingrese la medida de la altura en cm");
var resultado = parseInt(medidaBase) * parseInt(medidaAltura) / 2 ;
alert("El area del triangulo equilatero es: " + resultado + " cm ");


// Ejercicio 10

var montoADescontar = prompt("Ingrese el monto");
var numeroDeDescuento = prompt("Ingrese la cantidad de descuento");
var resultado = parseInt(montoADescontar) - parseInt(numeroDeDescuento);
alert("El precio final es: $" + resultado )


// Ejercicio 11

var nombreDePersona = prompt("Cual es su nombre?: ");
var edadDeLaPersona = prompt("Cual es su edad?: ");
var resultado = 2021 - parseInt(edadDeLaPersona);
alert("Hola, " + nombreDePersona + ", usted nació en el año " + resultado);


// Ejercicio 12

var nombreDelHumano = prompt("Cual es su nombre?: ");
var unaTemperatura = prompt("Escriba una temperatura en °C");
var resultado = (parseInt(unaTemperatura) * 1.8) + 32 ;
console.log(" Su nombre es: " + nombreDelHumano + " y la temperatura es: " +  resultado + "°F");


// Ejercicio 13

var nombreDeHumano = prompt("Cual es su nombre?: ");
var otraTemperatura = prompt("Escriba una temperatura en °F");
var resultado = (parseInt(otraTemperatura) - 32) / 1.8 ;
console.log(" Su nombre es: " + nombreDeHumano + " y la temperatura es: " +  resultado + "°C");


// Ejercicio 14 

var unNumero = prompt("Escriba un numero: ");
var otroNumero = parseInt(unNumero);
var resultado = ((otroNumero + 5 ) * 10);
console.log(resultado % 3 );
alert(Math.round(resultado / 3 ));

// BONUS

var primerNumero = prompt("Escribe primer numero:");
var segundoNumero = prompt("Escribe segundo numero:");
var resultado = primerNumero + segundoNumero;
console.log("Tu resultado es: " + resultado);

var cantidadDeDias = prompt("Escribe la cantidad de dias: ")
var resultado = parseInt(cantidadDeDias)
console.log("Tu resultado es: " + resultado)