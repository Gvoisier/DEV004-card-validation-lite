function validate() {
    const valid = isValid(document.getElementById("cardnumber").value)


    if (valid) { // Show success in div#result

    } else { // Show error message in div#result
    }
}

function isValid(creditCardNumber) { // is creditCardNumber valid?
    let convertirArray = creditCardNumber.split("")
    // console.log(convertirArray);
    let invertirArray = convertirArray.reverse();
    // console.log(invertirArray);

    // crear variables que se guarden para después

    let sumaTotal = 0 //variable

    for (let index = 0; index < Number(invertirArray.length); index++) { //4137894711755904

        const element = parseInt(invertirArray[index]);
        // obtiene el elemento del Array con el índice: Ex. Array= [1,2,3]
        //console.log("iteracion: " + index + " valor: " + element);
        const esPar = validarPuestoPar(index);
        //console.log(" está en la posición par? : " + esPar);

        if (!esPar) {
            let resultado = element * 2;
            if (resultado >9 ) {
                let numerosArray = resultado.toString().split("");
                let numerosArraySumados = (Number(numerosArray[0]) + Number(numerosArray[1]));
                //console.log(numerosArraySumados);

                sumaTotal += numerosArraySumados; // está abreviado. Suma la variable sumaTotal + numerosArraySumados  (>9)
                //console.log("estos números son >9: " + sumaTotal);
            } else {
                sumaTotal += resultado; //números de resultados son los que se *2 pero son menores a 9 (<9)
                //console.log("estos números son <9 que estan en la posición par: " + sumaTotal);
            }
        } else { // guardar el valor del puesto impar
            sumaTotal += element //números del puesto impar
            console.log(element);
        }
      }
    console.log(sumaTotal); //son las iteraciones totales ya sumadas (contiene todos los números de cada iteración)

    // determinar si la tarjeta de crédito es válida, para esto tiene que terminar en 0 (ej. 80).
    //variable que el número termine en cero. Si termina en cero, va a retornar un true.

   /*if (sumaTotal%10 === 0){
        alert("tarjeta válida");
    } else{
        alert("tarjeta inválida, ingrese el número nuevamente.");
    }*/
    return sumaTotal%10 === 0
    
}
// Operador modulo (investigar).
function validarPuestoPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}