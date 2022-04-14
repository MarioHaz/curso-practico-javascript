//const ladoCuadrado = 5;
// codigo cuadrado 
console.group("cuadrado");
function perimetroCuadrado (lado){
    return lado * 4
};
//console.log("el perimetro del cuadrado es: " + ladoCuadrado * 4 + "cm");

//console.log ("el area del cuadrado es: " + ladoCuadrado * ladoCuadrado + "cm2");
console.groupEnd();


//const baseTriangulo = 4;
//const ladoTriangulo2 = 6;
//const alturaTriangulo = 5.5;
//const perimetroTriangulo = ladoTriangulo + ladoTriangulo2 + baseTriangulo;
//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// codigo triangulo
console.group("triangulo");
//console.log("los lados del triangulo miden; " + ladoTriangulo + "cm");
//console.log("la altura del triangulo es de; " + alturaTriangulo + "cm")
//console.log("el perimetro del triangulo es: " + perimetroTriangulo + "cm");
function perimetroTriangulo (lado,base){
    return lado + lado + base 
};
//console.log ("el area del triangulo es: " + areaTriangulo + "cm2");
function areaTriangulo (base, altura){
return (base * altura) /2;}
console.groupEnd();

// codigo circulo

// PI
const Pi = Math.PI;
console.group("cuadrado")

function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio)
    return diametro * Pi;
}


function areaCirculo (radio){
    return (radio * radio) * Pi;
}
console.groupEnd();


function calcularPerimetrocuadrado(){
    const input = document.getElementById("InputCuadrado")
    const valor = input.value;
    const perimetro = perimetroCuadrado(valor);
    alert(perimetro);
}
function areaC(lado) {
    return lado *lado;
};
function calcularAreacuadrado(){
    const input = document.getElementById("InputCuadrado")
    const valor = input.value;
    const area = areaC(valor);
    alert(area);

}

function alturaTriangulo (ladoA, ladoB, base){
    if (ladoA != ladoB) {
        console.error ("los lados A y B no son iguales")
    }else {}
}