//Primeiro Container

const textoPrincipal = document.querySelector('.container__titulo');
textoPrincipal.textContent = 'Com o Combo+, você pode aproveitar a Alura+ e o Alura Língua por um preço único';

const imagemPrincipal = document.querySelector('.container__imagem');
imagemPrincipal.src = 'img/Combo.png';
imagemPrincipal.alt = 'O combo+ é a junção do alura+ e o alura língua';

const primeiroLink = document.querySelector('.container__botao');
primeiroLink.href = 'https://www.alura.com.br/';
primeiroLink.target = '_blank';
primeiroLink.textContent = 'Assine por 12x de R$ 120,00*';

const segungoLink = document.querySelector('.botao_secundario');
segungoLink.href = 'https://www.alura.com.br/';
segungoLink.target = '_blank';
segungoLink.textContent = 'Assinar somente o Alura+';

const paragrafoPrincipal = document.querySelector('.container__aviso');
paragrafoPrincipal.textContent = '*O preço pode variar caso a assinatura seja feita em outros planos.';