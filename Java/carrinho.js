const shoppingCart = [];

function addItemToCart(item){
    shoppingCart.push(item)
}

function removeItemFromCart(item){
    const index = shoppingCart.indexOf(item);
        if(index !== -1){
            shoppingCart.slice(index,1)
        }
}

function viewCart(){
    if(shoppingCart.length == 0){
        console.log("ta vazio")
    }else{
        console.log("tem coisa olha aqui :")
        for(let i = 0; i < shoppingCart.length;i++){
            console.log(`${i + 1} - ${shoppingCart[i]}`)
        }
    }
        
}

function clearCart(){
    shoppingCart.length = 0;
    console.log("ta limpo")
}

addItemToCart("gafara")
addItemToCart("fone")
addItemToCart("cartão")

viewCart()

clearCart()

viewCart()
