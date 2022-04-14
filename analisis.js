const salariosCol = colombia.map(
    function (personita){
        return personita.Salary;
    }
);
// se crea un nuevo array llamado salariosCol
const salariosColsorted = salariosCol.sort(
    function (salaryA, SalaryB) {
        return salaryA - SalaryB;

    }
);
// tenemos que crear un nuevo array ordenado, (salariosColsorted) 

function esPar(numerito){
    return (numerito % 2 === 0);
}

function calcularmediaAritmetica(lista){

    
    const sumalista = lista.reduce(
       function(valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento; 
       });
   
    const promediolista = sumalista / lista.length;
   
    return promediolista
   }
// no hay necesidad de señalar que si el resultado de la lista es PAR de true o de crear el consicional 
// else para decir si es false, la misma funcion da el resultado.
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad -1];
        const personaMitad2 = lista[mitad ];
        const mediana= calcularmediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;

    }else {
        const personaMitad= lista[mitad];
        return personaMitad;
    }
}   
const medianaGeneralCol = medianaSalarios(salariosColsorted);


//mediana top 10

const spliceStart = (salariosColsorted.length * 90) /100;
const spliceCount = salariosColsorted.length - spliceStart;

const salariosColTop10 = salariosColsorted.splice(spliceStart,spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log( {
    medianaGeneralCol,
    medianaTop10Col,

});