async function buscaEndereco() {
    try {
        var consultaCEP = await fetch('https://viacep.com.br/ws/01001000/json/')
        var consultaCepConvertida = await consultaCEP.json();
        if (consultaCepConvertida.erro){
            throw Error('CEP não existe!');
        console.log(consultaCepConvertida);
    } catch (erro) {
        console.log(erro)
    }
};

buscaEndereco();