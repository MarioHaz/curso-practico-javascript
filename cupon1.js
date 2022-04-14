const coupons =  [
    "coupon15",
    "coupon20",
    "coupon50"
];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  
    return precioConDescuento;
}

function calculadescuentoconcupon(){

const inputPrice = document.getElementById("inputPrice")
const priceValue = inputPrice.value 

const inputCoupon = document.getElementById("inputCoupon")
const couponValue = inputCoupon.value

let descuento;

switch(couponValue){
    case coupons[0]: descuento = 15
    break;
}



const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento)

const resultP = document.getElementById("resultP")
resultP.innerText = "El precio con descuento es $" + precioConDescuento


}