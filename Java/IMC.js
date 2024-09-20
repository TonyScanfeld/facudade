function criarPessoa(nome,sobrenome,a,p){

    return{
        nome,
        sobrenome,
        altura: a,
        peso: p,
        IMC(){
            const indice = this.peso/(this.altura ** 2).toFixed(1)
            if(indice < 18.5){
                console.log("baixo peso")
            }else if(indice >= 18.5 && indice < 24.9){
                console.log("normal")
            }else if(indice >= 25 && indice <29.9){
                console.log("acima peso")
            }else if(indice >= 30 && indice <34.9){
                console.log("gordo")
            }else if(indice >= 35 && indice <39.9){
                console.log("gordão")
            }else if(indice >= 40){
                console.log("planeta")
            }
        }
    }
}

const p1 = criarPessoa("Antonio","Jose",1.83,70.75);
const p2 = criarPessoa("joelma","cristina",1.80,66);
const p3 = criarPessoa("Maria","eduarda",1.62,50);
p1.IMC();
p2.IMC();
p3.IMC();