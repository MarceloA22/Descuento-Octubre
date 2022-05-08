let btnCalcular = document.getElementById("calcular");
let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let dato3 = document.getElementById("dato3");
btnCalcular.addEventListener("click", () => {
  let monto: number = dato1.value;
  let montoConDescuento: number = 0;
  let descuento: number = 0;
  let cantidad: number = dato2.value;
  let precioTotal: number = cantidad * monto;
  let mes: number = dato3.value;
  if (mes === "Octubre") {
    descuento = (precioTotal * 15) / 100;
    montoConDescuento = precioTotal - descuento;
    console.log(
      "Por comprar en el mes de Octubre Ud tiene un 15% de descuento"
    );
    console.log("El monto a pagar es: " + montoConDescuento);
  } else {
    console.log("Ud. no tiene descuento, el monto a pagar es: " + precioTotal);
  }
});
