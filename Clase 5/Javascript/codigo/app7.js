var nombre;
var nota;
nombre = prompt('Ingrese nombre:', '');
nota = prompt('Ingrese su nota:', '');
if (nota >= 4) {
    document.write(nombre + ' esta aprobado con un ' + nota);
}