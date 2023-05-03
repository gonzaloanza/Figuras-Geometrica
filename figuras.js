//Codigo del cuadrado

console.group("Cuadrados");

function perimetroCuadra(lado){
    return lado * 4;
}  

function areaCuadrada(lado){
    return lado * lado;
} 

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

function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 

console.groupEnd();

// Codigo del circulos

console.group("Circulos");
// Radio
const radioCirculo = 4;
console.log("El radio del circulo es: "+ radioCirculo + "cm");

// Diametro
function diametroCirculo(radio){
    return radio * 2;
} 

// PI
const PI = Math.PI;
console.log("El PI: "+ PI + "cm");

// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 

// Area
function areaCirculo(radio){
    return (radio * radio) * PI;
} 
console.groupEnd();

// Interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadra(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrada(value);
    alert(area);
}