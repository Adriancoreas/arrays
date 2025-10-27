import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout 
})

//  function Saludar(nombre){
//      console.log(`Hola ${nombre}, bienvenido a java script`);
// }

// let resta = (n1,n2)=>{
//     let res= n1-n2;
//     return res;
// }

// rl.question("ingrese su nombre para saludarlo: ", (nom)=>{
//     rl.question("ingrese el primer numero: ", (num1)=>{
//         rl.question("ingrese el segundo numero: ", (num2)=>{
             
//             Saludar(nom);
//             console.log(`La resta de ambos numeros es: `, resta(num1, num2));
//             rl.close()
//         })
//     })
// })

// function calcularArea(base,altura){
//     let calculo = parseFloat(base*altura);
//     return calculo;
// }

// rl.question(' ingrese la base del rectangulo: ', Base =>{
//     rl.question(' Ingrese la altura del rectangulo:', Altura =>{

//         let result = calcularArea(Base, Altura);
//         console.log(`El area del rectangulo es: ${result}`)
//         // otra opcion para aserlo
//         console.log(`EL area del rectangulo es: `, calcularArea(Base, Altura));
//         rl.close();
//     })
// })


function calcularDescuento(precio,descuento){
    precio = parseFloat(precio);
    descuento = parseFloat(descuento);

    let des = precio * descuento;

    let totalPagar = precio - des;

    console.log(`El descuento del producto obtenido es de: ${des} \n Total a pagar es de $: ${totalPagar}`);
}

rl.question('Ingrese el precio del producto: ', precio =>{
    rl.question('Ingrese el descuento a aplicar, expresado en decimales EJ: 0.20 para el 20% $:', desc =>{

        calcularDescuento(precio,desc);
        rl.close()
    })
})