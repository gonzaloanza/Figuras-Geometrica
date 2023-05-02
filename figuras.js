//Codigo del cuadrado

console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado mide: " + ladoCuadrado + "cm");

function perimetroCuadra(lado){
    return lado * 4;
}  

//console.log("El perimetro del cuadrado es: " + perimetroCuadra + "cm");

function areaCuadrada(lado){
    return lado * lado;
} 
//console.log("El area del cuadrado es: " + areaCuadrada + "cm^2");

console.groupEnd();

// Codigo del triangulos
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "Los lados del triangulo miden: "
    + ladoTriangulo1 + "cm, "
    + ladoTriangulo2 + "cm, "
    + baseTriangulo + "cm");

const alturaTriangulo = 5.5;
console.log("La actulra del triangualo es de: "+ alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 
//console.log("El perimetro del triangulo es: "+perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 
//console.log("El area del triangulo es: "+ areaTriangulo + "cm^2");

console.groupEnd();

// Codigo del circulos

console.group("Circulos");
// Radio
const radioCirculo = 4;
console.log("El radio del circulo es: "+ radioCirculo + "cm");

// Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: "+ diametroCirculo + "cm");

// PI
const PI = Math.PI;
console.log("El PI: "+ PI + "cm");

// Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: "+ perimetroCirculo + "cm");

// Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es: "+ areaCirculo + "cm^2");
console.groupEnd();
