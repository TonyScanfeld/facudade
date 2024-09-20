class Funcionario{
    constructor(nome,idade,cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }
    seApresentar(){
        console.log("Funcionario", this.nome,"se apresentando");
    }
    trabalhar(){
        console.log("Funcionario", this.nome,"trabalhando");
    }
}

class Gerente extends Funcionario{
    constructor(nome,idade,cargo,departamento){
        super(nome,idade,cargo);
        this.departamento = departamento;
    }
    gerenciar(){
        console.log("Gerente", this.nome,"gerenciando departamento", this.departamento);
    }
}

class Desenvolvedor extends Funcionario{
    constructor(nome,idade,cargo,linguagem){
        super(nome,idade,cargo)
        this.linguagem = linguagem;
    }
    programar(){
        console.log("Desenvolvedor", this.nome,"programando com a linguagem", this.linguagem);
    }
}

p1 = new Gerente("Wilson",57,"gerente","Informatica");
p2 = new Desenvolvedor("Tony",28,"Junior","Python");
p1.gerenciar();
p2.programar();