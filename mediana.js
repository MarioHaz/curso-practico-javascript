function calcularmediaAritmetica(lista){

    
  const sumalista = lista.reduce(
     function(valorAcumulado = 0, nuevoElemento){
      return valorAcumulado + nuevoElemento; 
     });
 
  const promediolista = sumalista / lista.length;
 
  return promediolista
 }


function calcularmediana(){

    const entradaMediana = document.getElementById("inputMediana");
    const valormediana = entradaMediana.value;

    let arraymediana = Array.from(valormediana.split(","),Number);

    const listaOrdenada = arraymediana.sort((numMenor, numMayor) => numMenor-numMayor);

    const mitadlista = parseInt(listaOrdenada.length / 2)

    function esPar(numerito){
        if (numerito % 2 === 0){
            return true;
        } else{
            return false
        }
    };



var mediana;

if (esPar(listaOrdenada.length) ){
 const elemento1= listaOrdenada[mitadlista]
 const elemento2= listaOrdenada[mitadlista - 1] 

 const promedioelemento1y2= calcularmediaAritmetica([
     elemento1,
     elemento2
 ])
 mediana = promedioelemento1y2;}

 else {
    mediana = listaOrdenada[mitadlista]
 }

    const mostrarResultado = document.getElementById("resultadomediana");
 mostrarResultado.innerText = "la mediana es de; " + mediana;
    

}



    
