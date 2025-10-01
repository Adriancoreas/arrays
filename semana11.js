//  const numeros=[10,20,30,40,50];


// const meses=new Array('Enero','Febrero','Marzo');

// const deTodo=['tabla',10,null,true,{nombre:'Juan',trabajo:'Programador'},[1,2,3]];
// console.table(deTodo);

// console.log(deTodo[3]);
// console.log(deTodo[4].nombre);
// console.log(deTodo[5][1]);

// console.table(numeros);//para mostrar los datos en tabla


// //Modificar valores de un arreglo
// numeros[1]=80,
// console.log(numeros);
//  //console.log(numeros[1]+60)


// //nuevo valor
//  meses.push('Abril');
//  console.log(meses);

//  //elimina el ultimo elemento del arreglo
//  meses.pop();
//  console.log(meses);

//  //Elimina el primer elemento del arreglo
//  meses.shift();
//  console.log(meses);

//  //agregar un nuevo elemento pero al inicio del arreglo
//  meses.unshift('Enero');
//  console.log(meses);






// // for(i=0;i<11)
//  for(i=0;i<meses.length;i++){
//     console.log(meses[i]);

//  }

//  //Imprimir el primer y ultimo dia de la semana 
//  const dias =["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
//  let primer = dias[0];
//  let ultimo = dias[6]
//  console.log(primer);
//  console.log(ultimo);

//  // carrito de compras
//  const carrito = [];

//  const producto1 ={
//     nombre: "camisera",
//     precio:2.50
//  }

//  carrito.push(producto1)
//  console.log(carrito);

//  const producto2 ={
//     nombre: "zapatos",
//     precio:12.50
//  }

//   carrito.push(producto2)
//  console.log(carrito);

 // ejercicio 1
 // soliciitamos nombres al usuario
  import readline from 'readline'

  const rl = readline.createInterface({
    input: process.stdin,
     output: process.stdout
 })

//  let nombres = []

//  rl.question("ingrese el primer nombre:", (nombre1)=>{
//     nombres.push(nombre1);

//         rl.question("ingrese el primer nombre:", (nombre2)=>{
//         nombres.push(nombre2);

//             rl.question("ingrese el primer nombre:", (nombre3)=>{
//             nombres.push(nombre3);

//             console.log("Los nombres ingresadosson:")
//             console.log("primer nombre: ", nombres[0])
//             console.log("primer nombre: ", nombres[1])
//             console.log("primer nombre: ", nombres[2])

//             rl.close()
       
//         })

//      })
 
// })

let numeros = []

rl.question("Ingrese la primer nota:",(nota1)=>{
   numeros [0]= parseInt(nota1);

      rl.question("Ingrese la primer nota:",(nota2)=>{
      numeros [1]= parseInt(nota2);

            rl.question("Ingrese la primer nota:",(nota3)=>{
            numeros [2]= parseInt(nota3);

               let max = Math.max(numeros[0],numeros[1],numeros[2]);
               console.log(`La temperatura mayor es: ${max}`);


            //  let promedio = (numeros[0] + numeros[1] + numeros[2] )/3;
            //  console.log(`El promedio es: ${promedio}`);

             rl.close()
         

         })
   
      })

})