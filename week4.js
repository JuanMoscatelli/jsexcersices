//If Else
/*Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”*/
var number
number = Math.random(0,1)
if (number<= 0,5) {
    alert("Grater than 0,5")
}else{
    alert("lower than 0,5")   
}
console.log(number)


/*
Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
“Bebe” si la edad es menor a 2 años
“Nino” si la edad es entre 2 y 12 años
“Adolecente” si la edad es entre 13 y 19 años
“Joven” si la edad está entre 20 y 30 años
“Adulto” entre 31 y 60 años
“Adulto mayor” entre 61 y 75 años
“Anciano” si es mayor a 75 años
*/
var age = 31;
if (age<2){
    alert('Bebe')
}else if (age < 12){
    alert('Nino')
}else if (age < 19){
    alert('Adolescente')
}else if (age < 30){
    alert('Joven')
}else if (age < 60){
    alert('Adulto')
}else if (age < 75){
    alert('Adulto')
}else {
    alert('Anciano')
}