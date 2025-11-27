//==========================================================
// 1.Alternador de textos
//==========================================================

const textoAlternavel = document.getElementById('texto-alternavel');
const alternarTextoBtn = document.getElementById('alternar-texto-btn');

const textos = ["Texto 1", "Texto 2", "Texto 3"];
let indiceTexto = 0;

alternarTextoBtn.addEventListener('click', function() {
    indiceTexto = (indiceTexto + 1) % textos.length;    
    textoAlternavel.textContent = textos[indiceTexto];
});

//============================================================
// 2. Alternador de Imagens
//============================================================

const imagem = document.getElementById('imagem');
const alternarImagemBtn = document.getElementById('alternar-imagem-btn');

const urlsImagem = ["imagem1.png", "imagem2.png", "imagem3.png"];
let indiceImagem = 0;

alternarImagemBtn.addEventListener('click', function(){
    indiceImagem = (indiceImagem + 1) % urlsImagem.length;
    imagem.src = urlsImagem[indiceImagem];
});