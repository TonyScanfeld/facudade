function chckPositivo(numeros){
    if(!Array.isArray(numeros)){
        throw new Error("O argumento deve ser de um array")
    }

    const   allPositive = numeros.every((num) => num > 0);
    if(!allPositive){
        throw new Error("o array deve ter apenas numeros positivos");
    }
    return true;

}

try{
    const numbers = [1,2,-3,4,5,6]

    const isPositive = chckPositivo(numbers)

    console.log(isPositive)

}catch(error){
    console.log("ocorreu um erro", error.message)
}
