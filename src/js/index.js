// Objetivo 1 - quando clicar na seta de avançar temos que mostrar o proximo cartao da lista
// passo 1- constante para pegar o elemento html da seta de avançar
// passo 2 - encontrar uma forma de identificar o clique do usuário na seta avançar
// passo 3 - fazer aparecer o proximo cartáo da lista
// passo 4 - buscar o cartao selecionado e esconder

// passo 1 - pegar o elemento html da seta avançar e tranformo esse elemento e crio uma constante, uma variavel que nao vai ser reatribuida posteriormente, ou seja, ela vai ser a mesma variavell a aprtir desse momento
const btnAvancar = document.getElementById("btn-avancar");
// para conseguir fazer a minha classe selecionado poder ser adicionado em qualquer card e conseguir navegar entre todos e nao apenas 1 preciso criar uma variavel let (que é uma forma de conseguir reatribuir depois essa variavel, e nao ter apenas uma variavel fixa) para conseguir fazer essa transição quantas vezes quiser
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");
// passo 2 - encontrar uma forma de identificar o clique do usuàrio na seta avançar
// objetivo 2 - passo 1 

console.log(btnVoltar);

btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return;

  // passo 4 - retirar a classe selecionado do elemento que nao esta sendo mostrado na pagina
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");

  // passo 3 - fazer aparecer o proximo cartáo da lista, adiciono a classe selecionado no item que for aparecer ap[os o clique do botáo

  cartaoAtual++;

  //   colocando a classe selecionado no segundo cartao apos puxar os cards
  cartoes[cartaoAtual].classList.add("selecionado");
});

// objetivo 2 - quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista
// passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
// passo 2 - dar um jeito de identificar o clique do usuario na seta voltar
// passo 3 - fazer aparecer o cartao anterior da lista
// passo 4 buscar o cartão que esta selecionado e esconder

btnVoltar.addEventListener("click", function () {
    if(cartaoAtual === 0) return;
    
    // passo 4 - retirar a classe selecionado do elemento que nao esta sendo mostrado na pagina
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");


    cartaoAtual--;
  
    //   colocando a classe selecionado no segundo cartao apos puxar os cards
    cartoes[cartaoAtual].classList.add("selecionado");
  });