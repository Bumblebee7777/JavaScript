// alert (hola)

// let nombre1 = prompt("ingresar nombre")
// console.log(nombre1)

// let nombre2 = prompt("ingresar nombre")
// console.log(nombre2)

// funciones de declaracion

// function hacerAlgo () {

//     // pasos que tiene que hacer la funcion
//   console.log("despertarse")
//   console.log("levantarse")
//   console.log("desayunar")  
// }
 

// // ejecutar una funcion (abrir contexto de ejecucion)
// hacerAlgo()
let nombre = ""
let apellido = ""
let edad = ""
let domicilio = ""

for(i = 0; i < 1; i +=1){
  nombre += prompt("ingrese su nombre")
  apellido += prompt("ingrese su apellido")
  edad += prompt("ingrese su edad")
  domicilio += prompt("ingrese su domicilio")
}
console.log(nombre + " " + apellido + " " + edad + " " + domicilio);
