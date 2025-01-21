let listaDeAmigos = [];
let listaDeSorteados = [];

function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    if (amigo == "") {
        alert("Por favor, insira um nome");
    } else {
        listaDeAmigos.push(amigo);
        exibeAmigos();
    }
    limparCampo();
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function exibeAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (i = 0; i < (listaDeAmigos.length); i++) {
        let listaLi = document.createElement('li'); // cria um elemento tipo 'li'
        listaLi.textContent = listaDeAmigos[i]; // define o texto do li como o nome naquela posição
        lista.appendChild(listaLi); // adiciona <li> ao <ul> 
    }
}

function sortearAmigo() {
    //verificando se a lista contém algum elemento
    if (listaDeAmigos.length > 0) {
        //limpando a lista de nomes antes de mostrar o resultado
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = "";

        let numeroAleatorio = Math.floor((Math.random() * listaDeAmigos.length));
        let nomeEscolhido = listaDeAmigos[numeroAleatorio];

        if (listaDeSorteados.includes(nomeEscolhido)) {
            if (listaDeSorteados.length == listaDeAmigos.length) {
                alert("Você já sorteou todo mundo!" + "\n" + "Adicione mais amigos ou atualize a página para começar de novo");
            } else {
                return sortearAmigo(); // recursão para sortear outro amigo se ele já tiver sido sorteado anteriormente
            }
        } else {
            listaDeSorteados.push(nomeEscolhido);
            let amigoSorteado = document.getElementById('resultado');
            amigoSorteado.innerHTML = `<li>O amigo secreto sorteado é: ${nomeEscolhido} </li>`;
        }
    } else{
        alert('Você ainda não adicionou nenhum amigo!\n Adicione algum nome para começar');
    }




}