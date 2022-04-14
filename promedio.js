//const lista1 = [
//    100,
//    200,
 //   300,
//    500
//];

//let sumaLista1 = 0;
//for(let i = 0; i<lista1.length; i++){
 //   sumaLista1 = sumaLista1 + lista1[i]
//}

//const promediolista1 = sumaLista1 / lista1.length;

function calcularmediaAritmetica(lista){

   // let sumaLista = 0;
 //for(let i = 0; i<lista.length; i++){
 //    sumaLista = sumaLista + lista[i]
 const sumalista = lista.reduce(
    function(valorAcumulado = 0, nuevoElemento){
     return valorAcumulado + nuevoElemento; 
    }
 );

 const promediolista = sumalista / lista.length;

 return promediolista
}


