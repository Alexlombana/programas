/* Programa que dado un numero retorne true si es un numero par o retorne false si es un numero impar y para los multiplos de 5 retorne go*/
var numero=8;

if (numero%2==0){
    console.log(`True ${numero},es un numero par`);
}
else {
    console.log(`false ${numero},es un numero impar`);
}
if ( numero > 0 && numero % 5 == 0 ) {
    console.log(`GO ${numero} es múltiplo de 5` )

 }
 else {
    console.log(`el ${numero},no es multiplo de 5`);
}

