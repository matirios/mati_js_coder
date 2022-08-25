let nombreApellido = prompt("Ingrese su nombre y apellido");

let precio = prompt("Ingrese el precio del articulo");

let cantidad = prompt("Ingrese la cantidad del producto");

let iva = 1.21;

let resultado = (precio * cantidad) * iva;

console.log(" el precio final es de " + resultado);

alert(" Hola " + nombreApellido + " el precio final de producto es " + resultado);
