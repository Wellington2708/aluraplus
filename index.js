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

//Segundo Container

const segundaImagem = document.querySelector('.secundario__imagem');
segundaImagem.src = 'img/plataformas.png';
segundaImagem.alt = 'Um monitor e um celular com a alura plus aberta';

const segundoTitulo = document.querySelector('.descricao__titulo');
segundoTitulo.textContent = 'Assista do seu jeito';

const terceiroTitulo = document.querySelector('.descricao__texto');
terceiroTitulo.textContent = 'Aproveite a tela grande da TV ou assista no tablet, laptop, celular e outros aparelhos. Nossa seleção de cursos não para de crescer.';

//Terceiro Container

const terceiroParagrago = document.querySelector('.terceiro__paragrafo');
terceiroParagrago.textContent = 'Só o Combo+ oferece Alura+ e Alura Língua juntos para você ter acesso a cursos de diversas áreas da tecnologia e aprender inglês ou espanhol, onde e como quiser.';

const terceiroLink = document.querySelector('.secundario__botao');
terceiroLink.href = 'https://www.alura.com.br/';
terceiroLink.target = '_blank';
terceiroLink.textContent = 'Assine o Combo+';

const imagemTelas = document.querySelector('.telas');
imagemTelas.src = 'img/Telas.png';
imagemTelas.alt = 'Tela do alura+ e alura língua';

//Quarto Container

const imagemNotebook = document.querySelector('.imgNotebook');
imagemNotebook.src = 'img/Notebook.png';
imagemNotebook.alt = 'Notebook com a página do curso HTML5 e CSS3 da Alura aberta';

const quartoTitulo = document.querySelector('.quarto__titulo');
quartoTitulo.textContent = 'Baixe seus cursos';

const quartoParagrafo = document.querySelector('.quarto__paragrafo');
quartoParagrafo.textContent = 'Baixe e assista quando e onde quiser. Assim, seus favoritos estão sempre com você, até mesmo sem internet.';



