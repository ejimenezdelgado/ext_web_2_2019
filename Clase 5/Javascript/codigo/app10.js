function Cargar(sueldos) {
    var f;
    for (f = 0; f < sueldos.length; f++) {
        var v;
        v = prompt('Ingrese sueldo:', '');
        sueldos[f] = parseInt(v);
    }
}

function CalcularGastos(sueldos) {
    var total = 0;
    var f;
    for (f = 0; f < sueldos.length; f++) {
        total = total + sueldos[f];
    }
    document.write('Listado de sueldos<br>');
    for (f = 0; f < sueldos.length; f++) {
        document.write(sueldos[f] + '<br>');
    }
    document.write('Total de gastos en sueldos:' + total);
}
var sueldos = new Array(5);
Cargar(sueldos);
CalcularGastos(sueldos);