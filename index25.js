// // semana 13/ clase del lunes/ 
// // tema: function

// function miFuncion(){
//     //procesos a realizar
// }

// miFuncion();

// function miSaludo() {
//     console.log("Hola desde javascript")
// }

// miSaludo();

// Funciones con parametros
// function saludar(nombre) {
//     console.log("Hola " + nombre + " Bienvenido!");
// }

// saludar('Adrian');

// function miSaludoObtenido(nombre){
//     let mensaje = "Hola " + nombre;

//     return mensaje;
// }

// let EnviarNombre = miSaludoObtenido("Adrian")

// console.log(EnviarNombre);


//Combinando arrays con funciones
// import readline from 'readline'

// let rl = readline.createInterface({
//     input: process.stdin,
//     output:process.stdout 
// })

// let saludo = []
// rl.question("Ingrese su nombre: ", (nombre)=>{
//     saludo.push(nombre)

//     function Hola(){
//     console.log("Hola " + nombre + " bienvenido")
// }
// Hola(nombre)

// rl.close()

// });

// Funcion anonima

// let saludo = function ( nombre){
//     saludar = `Hola ${nombre}`

//     return saludar
// }

// console.log(saludo('Juan'))

// Funciones de flecha
// Mas de un parametro
// let saludo = (nombre) =>{
//     return `Saludos ${nombre}`
// }

// console.log(saludo('adrian'));

// // solo un parametro
// let saludo2 = nombre2 => `Saludos ${nombre2}`
// console.log(saludo2('adrian'))

// EJERCICIO DE EJEMPLO

let suma = (num1, num2)=>{
    let resultado = num1 + num2;
    return resultado;
}

console.log(suma(10,2));

const sumar =(n1,n2)=> n1+n2;
console.log(sumar(5,3));