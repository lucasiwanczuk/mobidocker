var consultaCEP = fetch('https://viacep.com.br/ws/0100100/json/')
    .then(resposta => resposta.json())
    .then(r => console.log(r))
    .catch(erro => console.log(erro));
    
console.log(consultaCEP);