'use strict';
let operandoa
let operandob
let operacion

function init() {
    //Variables
    let resultado = document.getElementById("resultado");
    const reset = document.getElementById("reset");
    const suma = document.getElementById("suma");
    const resta = document.getElementById("resta");
    const multiplicacion = document.getElementById("multiplicacion");
    const division = document.getElementById("division");
    const igual = document.getElementById("igual");
    const uno = document.getElementById("uno");
    const dos = document.getElementById("dos");
    const tres = document.getElementById("tres");
    const cuatro = document.getElementById("cuatro");
    const cinco = document.getElementById("cinco");
    const seis = document.getElementById("seis");
    const siete = document.getElementById("siete");
    const ocho = document.getElementById("ocho");
    const nueve = document.getElementById("nueve");
    const cero = document.getElementById("cero");

    //Eventos
    uno.onclick = function (event) {
        resultado.textContent = resultado.textContent + "1"
    }
    dos.onclick = function (event) {
        resultado.textContent = resultado.textContent + "2"
    }
    tres.onclick = function (event) {
        resultado.textContent = resultado.textContent + "3"
    }
    cuatro.onclick = function (event) {
        resultado.textContent = resultado.textContent + "4"
    }
    cinco.onclick = function (event) {
        resultado.textContent = resultado.textContent + "5"
    }
    seis.onclick = function (event) {
        resultado.textContent = resultado.textContent + "6"
    }
    siete.onclick = function (event) {
        resultado.textContent = resultado.textContent + "7"
    }
    ocho.onclick = function (event) {
        resultado.textContent = resultado.textContent + "8"
    }
    nueve.onclick = function (event) {
        resultado.textContent = resultado.textContent + "9"
    }
    cero.onclick = function (event) {
        resultado.textContent = resultado.textContent + "0"
    }
    reset.onclick = function (event) {

        resetear();
    }
    suma.onclick = function (event) {
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();

    }

    resta.onclick = function (event) {
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();

    }
    multiplicacion.onclick = function (event) {
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();

    }
    division.onclick = function (event) {
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();

    }
    igual.onclick = function (event) {
        operandob = resultado.textContent;

        resolver();

    }


}
function limpiar() {
    resultado.textContent = "";
}
function resetear() {
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";

}
function resolver() {
    let res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob)
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob)
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob)
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob)
            break;

    }
    resetear()
    resultado.textContent = res;
}
