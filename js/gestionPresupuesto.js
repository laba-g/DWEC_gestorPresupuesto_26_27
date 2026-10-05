'use strict';
// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global
let presupuesto = 0;
let gastos=[];
let idGasto=0;

function actualizarPresupuesto(value) {

    if (typeof value === "number" && value >= 0) {
        presupuesto = value;
        return presupuesto;
    }
    else {
        console.log('El valor no es válido');
        return -1;
    }

}

function mostrarPresupuesto() {
    // TODO
    return "Tu presupuesto actual es de " + presupuesto + " €";
}

function CrearGasto(descripcion,valor,etiquetas ) {
    // TODO
    this.descripcion=descripcion;
    this.etiquetas=etiquetas;
    
    if (typeof valor === "number" && valor >= 0) {
        this.valor = valor;
    
    }else{
        this.valor=0;
    }

    this.mostrarGasto= function(){
        return "Gasto correspondiente a "+ this.descripcion +" con valor "+this.valor+ " €";
    }
    this.actualizarDescripcion= function(nvDesc){
        this.descripcion=nvDesc;
    }
    this.actualizarValor = function(valor){
        if (typeof valor === "number" && valor >= 0) {
        this.valor = valor;
        }
    }
    
}

function listarGastos() {
    return gastos;
}

function anyadirGasto() {

}

function borrarGasto() {
}

function calcularTotalGastos() {
}

function calcularBalance() {
}

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance
}
