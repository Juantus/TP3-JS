var cont = 4;

function chequear() {

    var palabra = document.getElementById("palabraIngresada").value;
    var check = "microprocesador"
    console.log(cont);

    if (palabra.toLowerCase() == check) {
        document.getElementById("Alert1").style.display = "inherit";
        document.getElementById("Alert2").style.display = "none";
        document.getElementById("pista1").style.display = "none";
        document.getElementById("pista2").style.display = "none";
        document.getElementById("botonAceptar").disabled = true;

    } else {
        cont--;
        document.getElementById("Alert2").style.display = "inherit";
        document.getElementById("Alert2").innerHTML = "¡¡Respuesta incorrecta!! Intento nro°: " + cont;

        if (cont == 2) {
            document.getElementById("pista1").style.display = "inherit";
        }
        if (cont == 1) {
            document.getElementById("pista2").style.display = "inherit";
        }

        if (cont == 0) {
            document.getElementById("botonAceptar").disabled = true;
            document.getElementById("pista1").style.display = "none";
            document.getElementById("pista2").style.display = "none";
            alert("Cantidad de intentos agotado - Respuesta correcta: Microprocesador");

        }
    }



}