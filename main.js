
let usuario = ""
let nombre = ""
let apellido = ""
let dni = ""
let genero = ""
let edad = ""
let domicilio = ""
let contraseña = ""

for(i = 0; i < 1; i +=1){
  usuario += prompt("ingrese su usuario")
  nombre += prompt("ingrese su nombre")
  apellido += prompt("ingrese su apellido")
  dni += prompt("ingrese su dni")
  genero += prompt("ingrese su genero")
  edad += prompt("ingrese su edad")
  domicilio += prompt("ingrese su domicilio")
  contraseña += prompt("ingrese su contrtaseña")  
}


console.log(usuario + " " + nombre + " " + apellido + " " + dni + " " + genero + " " + edad + " " + domicilio + " " + contraseña);
