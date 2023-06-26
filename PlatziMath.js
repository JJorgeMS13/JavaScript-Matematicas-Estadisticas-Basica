 const PlatziMath = {};

 
PlatziMath.calcularPromedio = function calcularPromedio(list) {
    const cantidadElement = list.length;
    const sumaArray = list.reduce( (acumulador, valorActual) => {
        return acumulador + valorActual;
    });
    return sumaArray / cantidadElement;
}
PlatziMath.listOrdenada = function listOrdenada(list) {
    return list.sort((a, b) => a - b);
}
PlatziMath.esPar = function esPar(list) {
    const longuitudList = list.length;
    return longuitudList % 2 == 0 ? true : false;
}
PlatziMath.calcularMediana = function calcularMediana(list) {
    const listOrdenadaArray = PlatziMath.listOrdenada(list);
    const totalElemento = listOrdenadaArray.length;
    if (PlatziMath.esPar(list)) {
        const indexMedianaPar1 = (totalElemento / 2) -1;
        const indexMedianaPar2 = totalElemento / 2;
        const listaMitades = [];
        listaMitades.push(listOrdenadaArray[indexMedianaPar1]);
        listaMitades.push(listOrdenadaArray[indexMedianaPar2]);
        const medianaList = PlatziMath.calcularPromedio(listaMitades);
        return medianaList;
    } else {
        const indexMediana = Math.floor(totalElemento / 2);
        return listOrdenadaArray[indexMediana];
    }

}
PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(listDesordenada) {
    PlatziMath.ordenarListaSort = function ordenarListaSort(valorAcomulado, nuevoValor){
        return valorAcomulado[1] - nuevoValor[1] ;
    }
    const list = listDesordenada.sort(ordenarListaSort);   
    return list;
}
PlatziMath.calcularModa = function calcularModa(list) {
    const listCount = {};
    list.forEach(element => {
        (listCount[element]) ? listCount[element] += 1 : listCount[element] = 1;
    });
    const arrayListCount = Object.entries(listCount); 
    const arrayListOrdenada = PlatziMath.ordenarListaBidimensional(arrayListCount)
    const moda = arrayListOrdenada[arrayListOrdenada.length -1][0];
    return moda;
}