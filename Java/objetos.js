const pessoa = {
    nome: 'tomais',
    sobrenome: 'turbano'
}


console.log(pessoa['nome'])

const funcionario = new Object();
funcionario.nome = "Karen"
funcionario.sobrenome = "joana"

console.log(funcionario.nome)

function criarPessoa(nome,sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criarPessoa("Shanicha","glonda")

const p2 = criarPessoa("Paulo","leite ne rego")

console.log(p1.nomeCompleto)
console.log(p2.nomeCompleto)






function compare(a, b){
    if(a > b){
        return -1;
    }else if(a < b){
        return 1;
    }
    return 0;
}
var x = compare(5,5);
console.log(x)