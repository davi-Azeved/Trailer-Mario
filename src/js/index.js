// -Passo 1 - Dar um jeito de pegar o elemento que representa o botão na tela usando o js.
const botaoTrailer = document.querySelector('.botao-trailer')

const video = document.getElementById("video");

// -Passo 3 - Dar um jeito de pegar o elemento da modal no js.
const modal = document.querySelector('.modal');

const linkDoVideo = video.src;

// -Passo 2 - Dar um jeito de identificar quando o usuário clicar no botão.
botaoTrailer.addEventListener("click", () => {
// -Passo 4 - Abrir a modal na tela.
modal.classList.add("aberto")
});

// OBJETIVO 2 - Quando o usuário clicar no X devemos fechar a modal.
// -Passo 1 - Dar um jeito de pegar o elemento de fechar modal usando js.
const botaoFecharModal = document.querySelector(".fechar-modal");

// -Passo 2 - Dar um jeito de identificar quando o usuário clicar no X.
botaoFecharModal.addEventListener("click", () => {
   // -Passo 3 - Fechar a modal.
   modal.classList.remove("aberto");

   video.setAttribute("src", linkDoVideo)

});
