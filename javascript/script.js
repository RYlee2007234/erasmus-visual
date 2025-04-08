//comment
/* Comentario
de varias lineas */

/* sintazis crear variable

var nombreVariable;
let nombreVariable;
cons PI = 3.1416; Constantes

Nombrar variable(nombre descriptivo)
Puede contener letras, numeros y guiones
let nombre01_20;
No puede empezar con numero
let 01nombre;
No puede ser nombrada con palabras del proprio lenguaje
let console;
let for;

let nombreAlumno; (camel case);
*/
var name = 'Antonio';
let surname = 'Mesa';

console.log(name);
console.log(surname);

var name = 'Luna';
console.log(name);



// tipos de satos en javascript
/*
    number --> numerico
    let numero = 2;
    let numero2 = 3.1489;
    string --> cadena de caracteres
    let cadena = 'cadena de caracteres';
    let cadena2 = "cadena de caracteres";
    let cadena3 = `cadena de caracteres`;

    booolean --> true of false
    let boolean = true;

    null --> sin valor o contenido
    undefined --> sin definir
    let sinDefinir;
    object --> objecto

    let alumno {
        'name':'Luna',
        'Apellido':'Mesa',
        'hobby':'Jugar'
    }


*/

let numero = 10;
console.log("La variable numero" + " es " + typeof numero);
console.log(" El contenido es: " + numero)

let boolean = true;
console.log(typeof boolean);

let cadena

let alumno = {
    'name':'Luna',
    'Apellido':'Mesa',
    'hobby':'Jugar'
}

console.log(typeof alumno);


/* Operatores */

/** 
 * Asignation 
 *  = asigna un valor a una variable
 *  += suma y asigna
 *  -= resta y asigna
 *  *= multiplica y asigna
 *  /= divide y asigna 
 *  Aritmeticos
 *  Suma +
 *  Resta -
 *  multiplication *
 *  division /
 *  modulo % resto de la division
*/
   
let numero1 = 10;
let numero2 = 5;

console.log(numero1 + numero2);
console.log(numero1 % numero2);
console.log(numero1 / numero2);


/* Operadores de logicos o de comparacion 

igual ==
igual estricto ===
distinto !=
distinto estricto !==
mayor que >
mayor igual que >=
menor que <
menor igual que <=
*/

console.log(numero1 == numero2);
numero1 = 10;
cadena = '10';
console.log(numero1 == cadena); // true
console.log(numero1 === cadena); // false

/* Concatenacion

    Unir dos string
    syntax

    "Hola " + "Mundo "

    "Hola Mundo"
*/

/* operador Ternario

Se necesitan tres operados
Es un operador condicional
syntax

condicion ? valor1 : valor2;

Si la condicion es true valor1 si no, devuelve valor2

*/

console.log(numero1 === numero2 ? "Son iguales" : "son diferentes")

/* Condicionales */

/*
    if....else

    syntax:

    if(condicion){
        bloque de codigo si verdadero
    } else {
        bloque de codigo si falso
    }

    Valores falsos:
        - false
        - undefined
        - null
        - 0
        - NaN
        - '' empty string
*/

/*

    switch ... case

    syntax:

    switch(expresion){
    case valor1:
        bloque de codigo si valor1
        break;
    
    case valor2:
        bloque de codigo si valor2
        break;

    case de valor3:
        bloque de codigo si valor3
        break;

    default:
        bloque de codigo por defecto si no es nugun valor anterior
    
    }
*/

nombre = 'Luna';

switch (nombre) {

    case 'Luna':
        console.log("Hola soy Luna");
        break;
    
    case 'Antonio':
        console.log("Hola soy Antonio");
        break;

    default:
        console.log("Hola no se quien soy");
}


/* loops */

/*
    for

    syntax

    for(let i=0; i<10; i++)
    {
        Repite 10 veces este codigo
    }

    while
    syntax

    while(condition)
    {
        bloque de codigo
    }

    do ... while
    syntax

    do{
        bloque de codigo
    }while(condition);

*/

/* Functiones */

/* 
    syntax:

    function nombreFunction (parametros opcionales){
        bloque codigo
        return opcional si devuelve valor
    }
*/


function operacionAritmetica (operador, valor1, valor2){

    if(operador === '*' )
        return valor1 * valor2;
    else if(operador === '+')
        return valor1 + valor2;
    else if(operador === '-')
        return valor1 - valor2;
    else if(operador === '/')
        return valor1 / valor2;
    else if(operador === '%')
        return valor1 % valor2;
} 

let resultado = 0;
resultado = operacionAritmetica('*', numero1, numero2);
console.log("El resultado es: " + resultado);

resultado = operacionAritmetica('+', numero1, numero2);
console.log("El resultado es: " + resultado);

resultado = operacionAritmetica('-', numero1, numero2);
console.log("El resultado es: " + resultado);

resultado = operacionAritmetica('/', numero1, numero2);
console.log("El resultado es: " + resultado);

resultado = operacionAritmetica('%', numero1, numero2);
console.log("El resultado es: " + resultado);

/* Arrays / Listas */

/*
    let frutas = ['manzana', 'platano', 'naranja'];
*/

let frutas = ['manzana', 'platano', 'naranja'];
console.log(typeof frutas);

/*
    objact tiene

    propiedades igual atributos
    metodos igual a acciones que ouede realizar(functiones)

*/


console.log(frutas[0]);

frutas.forEach(element => {
    console.log(element);
});

/* anadir un elemento a la lista */

frutas.push('Kiwi');
console.log(frutas);

/* quitar un elemento de la lista (del final) */

frutas.pop();
console.log(frutas);

/* anadir al principio */
frutas.unshift('kiwi', 'melon');
console.log(frutas);

/* tamano del array */
console.log(frutas.lenght);

/*
En la pagina mdn developer encotramos mas metodos para los arrays
*/

/* Programacion Orientada a Ojectos */

/* Crear un dato object */

let persona = new Object();
let coche = {};

persona = {
    'nombre': 'Luna',
    'edad': 4,
    'profesion': 'Ser Feliz',
    'reir' : function(){
        console.log("Me estoy riendo 😁");
    }
}

console.log(persona);

/* acceder a un dato del objecto */

console.log(persona.nombre);
console.log(persona['edad']);

/* Anadir propiedades */

persona.pais = 'Espana';
console.log(persona);

persona.reir();

/* Clases
    Una mejora sobre la herencia en los ebjetos.

    Las clases son como fabrica de objetos

    fabrica de vehiculos --> coche, moto, bicicleta, camion...

    syntax
    class NombreClase{
        constructor(parametros){
            this.parametro1 = parametro1;
            this.parametro2 = parametro2;
            .......
        }
    }
*/


class Robot{
    constructor(nombre, color){
        this.nombre = nombre;
        this.color = color;
    }
    
    hablar(){
        console.log(`iHola! Soy ${this.nombre} y mi color es ${this.color}, tu robot amigo. 🤖`);
    }

    mover(){
        console.log(` ${this.color} esta moviendose...🚀`)
    }
}

let robot1 = new Robot('Atibot', 'rojo');
robot1.hablar();
robot1.mover();

let robot2 = new Robot('Skainer', 'plata');
robot2.hablar();
robot2.mover();


/* Herencia en POO */

class RobotBailarin extends Robot{
    bailar(){
        console.log(`${this.nombre} esta bailando 🐱🤳🐱‍🚀`);
    }
}

let robotBailarin = new RobotBailarin ('DancerBot', 'Green');

robotBailarin.hablar();
robotBailarin.bailar();
//robot1.bailar(); //Da error al no extisir en la clase Robot.

/* Funciones callback

    Son funciones que se pasan como parametros de otras funciones y se ajecutan dentro de ellas
*/

function saludar(nombre){
    console.log(`Hola, ${nombre}`);
}

function ingresarNombre(callback){
    let nombre = prompt("Escribe tu nombre: ");
    callback(nombre);
}

ingresarNombre(saludar);