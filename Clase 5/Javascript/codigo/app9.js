function MostrarComprendidos(x1, x2) {
    var inicio;
    for (inicio = x1; inicio <= x2; inicio++) {
        document.write(inicio + ' ');
    }
}

var valor1, valor2;
valor1 = prompt('Ingrese valor inferior:', '');
valor1 = parseInt(valor1);
valor2 = prompt('Ingrese valor superior:', '');
valor2 = parseInt(valor2);
MostrarComprendidos(valor1, valor2);