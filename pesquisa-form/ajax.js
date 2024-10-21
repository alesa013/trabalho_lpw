let xhr = new XMLHttpRequest(); //criando um objeto

//inciando a função
function consultaCep(cep){
    //verifica se o cep tem 8 caracteres
    if(cep.length == 8){
        //readystate 4: requisição concluída e a resposta está pronta
        //response 200: tudo ocorreu bem
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4 && xhr.status == 200){
                //converte a resposta do servidor em objeto
                let retorno = JSON.parse(xhr.responseText);
                document.querySelector('#logradouro').value = retorno.logradouro;
                document.querySelector('#complemento').value = retorno.complemento;
                document.querySelector('#bairro').value = retorno.bairro;
                document.querySelector('#cidade').value = retorno.localidade;
                document.querySelector('#uf').value = retorno.uf;
            }
        }
        //configura a requisição junto com o cep
        xhr.open('GET', `https://viacep.com.br/ws/${cep}/json/`);
        xhr.send(); //envia a requisição
   }
}