/* Programa que dado un numero retorne true si es un numero par o retorne false si es un numero impar y para los multiplos de 5 retorne go*/

function matematica(numero) {
if (numero%2==0 && numero % 5!= 0){
    console.log(`True`);
}
else if(numero % 5!= 0) {
    console.log(`false`);
}
if ( numero > 0 && numero % 5 == 0 ) {
    console.log("GO" )

 }
}
console.log(matematica(15))


 

 