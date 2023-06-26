console.group('Cuadrado');
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;
function quare(lado) {
    return {
        lado,
        perimetroCuadrado: lado * 4,
        areaCuadrado: lado * lado
    }
    
}
console.groupEnd('Cuadrado');

console.group('Triangulo');
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const altura = 5.5;
/* const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase *  altura) / 2; */

function triagle(lado1, lado2, base, altura) {
    return {
        lado1,
        lado2,
        base,
        altura,
        perimetroTriangulo: lado1 + lado2 + base,
        areaTriangulo: (base * altura) / 2
    }
}

function calcularAlturaTriangulo(lado, base) {
    if (lado == base) {
        console.warn('Este no es un triángulo isosceles');
    } else {
        return Math.sqrt((lado ** 2) - ( (base ** 2)) /4 );
    }
}
console.groupEnd('Triangulo');

console.group('Circulo');

const radio = 3; 
const diametroCirculo = radio * 2;
const PI = 3.1415;
const circunferencia = diametroCirculo * PI;
const areaCirculo = (radio ** 2) * PI;

function calcularCirculo(radio) {
    const diametro = radio * 2;
    return {
        radio,
        diametro,
        circunferencia: diametro * Math.PI,
        areaCirculo: Math.pow(radio, 2) * Math.PI
    }
}

console.log({
    radio,
    diametroCirculo,
    PI,
    circunferencia,
    areaCirculo
});
console.groupEnd('circulo');