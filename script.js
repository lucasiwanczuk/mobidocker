var consultaCEP = fetch('https://viacep.com.br/ws/0100100/json/')
    .then(resposta => resposta.json())
    .then(r => {
        if (r.erro) {
            throw Error('Acho que você está perdido! Nossos exploradores não identificaram um CEP válido!')
        } else
            console.log(r)
    })
    .catch(erro => console.log(erro))
    .finally(mensagem => console.log('Processamento concluído!'));

console.log(consultaCEP);