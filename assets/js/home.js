let indiceImagem = 0;
let soma = parseFloat(localStorage.getItem('soma')) || 0;
let contagemCliques = parseInt(localStorage.getItem('contagemCliques')) || 0;
let img = [
  "img1.png",
  "img2.png",
  "img3.png",
  "img4.png",
  "img5.png",
  "img6.png",
  "img7.png",
  "img8.png",
  "img9.png",
  "img10.png",
  "img11.png",
  "img12.png",
  "img13.png",
  "img14.png",
  "img15.png"
];

let imgLogo =
[
  "img1.png",
  "img2.png",
  "img3.png",
  "img4.png",
  "img5.png",
  "img6.png",
  "img7.png",
  "img8.png",
  "img9.png",
  "img10.png",
  "img11.png",
  "img12.png",
  "img13.png",
  "img14.png",
  "img15.png"
]

let nomes = 
[

"Itáu",
"Lojas Americanas",
"IFood",
"Boticário",
"Petrobras",
"Bradesco",
"Vale",
"Natura",
"Brahma",
"Skol",
"MagazineLuiza",
"Havaianas",
"Cielo",
"Globo",
"Vivo"

]
let indiceAtual = 0;
let pontuacaoSalva = parseFloat(localStorage.getItem('pontuacao')) || 0;

document.getElementById('pontuacao').textContent = pontuacaoSalva.toFixed(2);
document.getElementById('soma').textContent = soma.toFixed(2);

let avaliarBtn = document.querySelectorAll('.avaliar-btn');
let podeClicar = true;

function atualizarImagem() {
  if (img.length) {
    document.getElementById('imagem-div').style.backgroundImage = "url('/img/marcas/" + img[indiceAtual] + "')";
    document.getElementById('logo-img').src = "/img/logos/" + img[indiceAtual];
    document.getElementById('nome-marca').textContent = nomes[indiceAtual];


    indiceAtual++;
    if (indiceAtual >= img.length) {
      indiceAtual = 0; // Reset para o início do array
    }
  }
}

function avaliar(positivo) {
  if (!podeClicar) return;
  podeClicar = false;

  setTimeout(() => {
    podeClicar = true;
  }, 1350);

  contagemCliques++;
  localStorage.setItem('contagemCliques', contagemCliques);

  if (contagemCliques > 15) {
    $('#meuModal').modal('show');
    return;
  }

  let pontuacao = 1 + Math.random();
  soma += pontuacao;

  localStorage.setItem('soma', soma);
  localStorage.setItem('pontuacao', pontuacao);

  document.getElementById('pontuacao').textContent = pontuacao.toFixed(2);
  document.getElementById('soma').textContent = soma.toFixed(2);

  if (contagemCliques >= 15) {
    $('#meuModal').modal('show');
  }

  atualizarImagem();
}

document.addEventListener('DOMContentLoaded', () => {
  avaliarBtn.forEach((btn) => {
    btn.addEventListener('click', function() {
      const positivo = this.classList.contains('btn-primary');
      avaliar(positivo);
    });
  });

  document.getElementById('soma').textContent = soma.toFixed(2);

  if (contagemCliques >= 15) {
    $('#meuModal').modal('show');
  }

  atualizarImagem();
});

const container = document.getElementById('container');
const hammer = new Hammer(container);

hammer.on('swipeleft', function() {
  container.scrollLeft += 2000;
});

hammer.on('swiperight', function() {
  container.scrollLeft -= 2000;
});

function scrollEsquerda() {
  container.scrollLeft -= 2000;
}

function scrollRight() {
  container.scrollLeft += 2000;
}
