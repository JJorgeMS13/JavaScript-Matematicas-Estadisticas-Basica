
function calculateAverage(list) {
    let salaryAmount = list.length;
    const sumaSalary = list.reduce((valorAcomulado, newValue) => valorAcomulado + newValue );
    const promedio = sumaSalary / salaryAmount;
    result.textContent = "El promedio salarias de esta empresa es de: $" + promedio;
    return promedio;
}

function esPar(lista) {
    let lengthList = lista.length;
    return lengthList % 2 == 0 ? true: false;  
}

function calcularMediana(listDesordenada) {
    const list = ordenarLista(listDesordenada);
    if (esPar(list)) {
        const Mitad2ListPar = list[Math.floor(list.length / 2)];
        const Mitad1ListPar = list[Math.floor(list.length / 2) - 1];
        return calculateAverage([Mitad1ListPar, Mitad2ListPar]);
    }else {
        const indexMitadListImpar = Math.floor(list.length / 2);
        const medianaListImpar = list[indexMitadListImpar];
        return medianaListImpar;
    }
}

function ordenarLista(listDesordenada) {
    const list = listDesordenada.sort(function(valorAcomulado, nuevoValor){
        return valorAcomulado - nuevoValor;
    });
    return list;
}
function ordenarListaBidimensional(listDesordenada) {
    function ordenarListaSort(valorAcomulado, nuevoValor){
        return valorAcomulado[1] - nuevoValor[1] ;
    }
    const list = listDesordenada.sort(ordenarListaSort);   
    return list;
}

function calcularModa(list) {
    const listCount = {};
    list.forEach(element => {
        (listCount[element]) ? listCount[element] += 1 : listCount[element] = 1;
    });
   const arrayListCount = Object.entries(listCount); 
   const arrayListOrdenada = ordenarListaBidimensional(arrayListCount)
   const moda = arrayListOrdenada[arrayListOrdenada.length -1][0];
   return moda;
}
