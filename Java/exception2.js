function processName(nome,callback){
    if(typeof nome !== 'string'){
        callback(new Error('o nome deve ser uma string'));
        return;
    }

    if(nome.length === 0){
        callback(new Error('o nemo nao pode estar vazio'));
        return;
    }

    callback(null, "Nome processado com sucesso")
}

processName(42,(error,result) => {
    if(error){
        console.log("ocorreu um problema: ", error.message)
    }else{
        console.log(result)
    }
});