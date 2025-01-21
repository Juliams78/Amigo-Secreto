let listaDeAmigos = [];

function adicionarAmigo(){
    let amigo = document.querySelector('input').value;
    if (amigo == ""){
        alert("Por favor, insira um nome");
    }else{
        listaDeAmigos.push(amigo);  
        exibeAmigos();
    }
    limparCampo();
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function exibeAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (i = 0; i < (listaDeAmigos.length); i++){
        let listaLi = document.createElement('li'); // cria um elemento tipo 'li'
        listaLi.textContent = listaDeAmigos[i]; // define o texto do li como o nome naquela posição
        lista.appendChild(listaLi); // adiciona <li> ao <ul> 
    }
}

function sortearAmigo(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    let numeroAleatorio = Math.floor((Math.random() * listaDeAmigos.length));
    let nomeEscolhido = listaDeAmigos[numeroAleatorio];
    let amigoSorteado = document.getElementById('resultado');
    
    amigoSorteado.innerHTML = `<li>O amigo secreto sorteado é: ${nomeEscolhido} </li>`;
}