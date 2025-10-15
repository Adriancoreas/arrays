// Ejercicio 1,  Calcular el cuadrado de un número
let cuadrado = (num) => {
    let resultado = num * num;
    return resultado;
}

console.log("El cuadrado de 5 es:", cuadrado(5));


// ejercicio 2, calcular el promedio de 3 números
let promedio = (num1, num2, num3) => {
    let resultado = (num1 + num2 + num3) / 3;
    return resultado;
}

console.log("El promedio de 4, 8 y 10 es:", promedio(4, 8, 10));


// ejercicio 3, calcular el área de un triángulo
let areaTriangulo = (base, altura) => {
    let resultado = (base * altura) / 2;
    return resultado;
}

console.log("El área de un triángulo con base 6 y altura 3 es:", areaTriangulo(6, 3));
