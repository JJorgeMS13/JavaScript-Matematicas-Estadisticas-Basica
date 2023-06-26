const precio = document.querySelector('.precio');
const descuento = document.querySelector('.descuento');
const btnCalcular = document.querySelector('.calcular');
const resultado = document.querySelector('.resultado');

btnCalcular.addEventListener('click', calcularDescuento);
function clean() {
    precio.value = "";
    descuento.value = ""; 
}
function calcularDescuento() {
    const descountObj = [];
    descountObj.push({
        name: 'I_am_JJ',
        descount: 25
    });
    let price = Number(precio.value);
    let respuesta = descuento.value;
    if (!price ) {
        resultado.textContent = "Changla debes llenar el formulario!.";
        return;
    }
    let descountinArray = descountObj.find(function obtenerCupon(element) {
       return element.name = respuesta;
    });
        if (descountinArray) {
            let resul = price * (100 - descountinArray.descount) / 100;         
            resultado.textContent = "Precio del producto es de  $" + price + " con un descuento del "+ descountinArray.descount + "% su producto queda en $" + resul + "."; 
            clean();
            return;  
        }else {
            resultado.textContent = "Hey no inventes codigos xD!";
            clean();
        }  
}