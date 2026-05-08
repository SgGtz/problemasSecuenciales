/*Problema 1*/
function calcularArea(){
    let base= parseFloat(document.getElementById("base").value);
    let altura= parseFloat(document.getElementById("altura").value);
    const result = (base * altura)/2;
    document.getElementById("result").textContent = "El resultado es: " + result; 
};

/*Problema 2*/
function dolares(){
    let peso= parseFloat(document.getElementById("peso").value);
    let dolar= parseFloat(document.getElementById("dolar").value);
    const result = peso * dolar;
    document.getElementById("result").textContent = "Tu cambio es: " + result; 
};

/*Problema 3*/
function edad(){
    let anioNacimiento= parseFloat(document.getElementById("anioNacimiento").value);
    let anioActual= parseFloat(document.getElementById("anioActual").value);
    const result = anioActual-anioNacimiento;
    document.getElementById("result").textContent = "Edad: " + result; 
};

/*Problema 4*/
function calcularCobro() {
    const horas=Math.ceil(parseFloat(document.getElementById("horas").value));
    const precio=parseFloat(document.getElementById("precio").value);
    const total=horas*precio;
    document.getElementById("resultado").textContent="Total a pagar: " + total;
}

/*Problema 5*/
function calcularPintura() {
    let precioPintura = parseFloat(document.getElementById("precioPintura").value);
    let metros = parseFloat(document.getElementById("metros").value);
    const total = precioPintura * metros;
    document.getElementById("resultado").textContent ="Total a pagar: " + total;
}

/*Problema 6*/
function calcularHipotenusa() {
    const cateto1=parseFloat(document.getElementById("cateto1").value);
    const cateto2=parseFloat(document.getElementById("cateto2").value);
    const hipotenusa = Math.sqrt((cateto1 * cateto1) + (cateto2*cateto2));
    document.getElementById("resultadoHipotenusa").textContent = "La hipotenusa es: " + hipotenusa;
}

//Problema 7
function calcularViaje() {
    const kilometros=parseFloat(document.getElementById("kilometros").value);
    const precioKm=parseFloat(document.getElementById("precioKm").value);
    const total = kilometros * precioKm;
    document.getElementById("resultadoViaje").textContent = "Costo del viaje: $" + total;
}

// Problema 8
function calcularTiempo() {
    const distancia = parseFloat(document.getElementById("distancia").value);
    const velocidad = parseFloat(document.getElementById("velocidad").value);
    const tiempo = distancia / velocidad;
    document.getElementById("resultadoTiempo").textContent ="Tiempo estimado: " + tiempo + " horas";
}

// Problema 9
function calcularLlamada() {
    const minutos = parseFloat(document.getElementById("minutos").value);
    const precio = parseFloat(document.getElementById("precioMinuto").value);
    const total = minutos * precio;
    document.getElementById("resultadoLlamada").textContent = "Costo de llamada: " + total;
}

//  Problema 10
function calcularHotel() {
    const dias = parseFloat(document.getElementById("dias").value);
    const precioDia = parseFloat(document.getElementById("precioDia").value);
    const total = dias * precioDia;
    document.getElementById("resultadoHotel").textContent = "Total a pagar: $" + total;
}