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

function perimetroTriangulo(lado1, lado2, base){
    return (lado1+lado2+base);
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

// Interactuamos con el HTML Cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadra(value);
    document.getElementById("resultadoCuadrado").innerHTML = perimetro;
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrada(value);
    document.getElementById("resultadoCuadrado").innerHTML = area;
}

// Interactuamos con el HTML triangulo

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTrianguloLado1");
    const lado1 = parseInt(input1.value);

    const input2 = document.getElementById("inputTrianguloLado2");
    const lado2 = parseInt(input2.value);

    const input3 = document.getElementById("inputTrianguloBase");
    const base = parseInt(input3.value);

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    document.getElementById("resultadoTriangulo").innerHTML = perimetro;
} 

function CalcularAreaTriangulo(){
    const input4 = document.getElementById("inputTrianguloAltura");
    const altura = parseInt(input4.value);

    const input3 = document.getElementById("inputTrianguloBase");
    const base = parseInt(input3.value);

    const area = areaTriangulo(base, altura);
    document.getElementById("resultadoTriangulo").innerHTML = area;
} 

// Interactuamos con el HTML Circulo

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    document.getElementById("resultadoCirculo").innerHTML = perimetro;
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    document.getElementById("resultadoCirculo").innerHTML = area;
}

// Interactuamos con el HTML Triangulo Isoceles

function CalcularAreaTrianguloIso(){
    const input1 = document.getElementById("inputLado1");
    const lado1 = parseInt(input1.value);

    const input2 = document.getElementById("inputLado2");
    const lado2 = parseInt(input2.value);

    const input3 = document.getElementById("inputBase");
    const base = parseInt(input3.value);

    const altura2 = altura(lado1,lado2,base);
    document.getElementById("resultadoTrianguloIso").innerHTML = resultado;

    function altura(lado1, lado2, base){
        if(lado1 === lado2 && lado1 != base){
            const altura = Math.sqrt(lado1**2 - base**2/ 4)
            resultado = "Es un isoceles y su altura es: "+altura;
            console.log(altura)
        }
        else{
            resultado = "No es isoceles";
        }
    }
} 

