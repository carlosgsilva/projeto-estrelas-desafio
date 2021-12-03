# 🌟 Projeto Estrelas Fora da Caiza - ZUP 🌟

O Estrelas Fora da Caixa é um programa de formação profissional em tecnologia para pessoas em situação de vulnerabilidade social de renda com contratação desde o 1º dia. 

# 🚀 Desafio

Faça uma página que mostre 4 personagens aleatórios de Rick e Morty e seus nomes sempre que a página for atualizada.
Essa página serve para ajudar quem não conhece o desenho a conhecer pelo menos seus personagens, sendo assim a página deve apresentar duas informações: a foto do personagem e o nome dele.

O que você vai precisar:
* Um arquivo HTML para os elementos;
* Um arquivo CSS para deixar organizado;
* Um arquivo JavaScript para conseguir buscar esses personagens no banco de dados da API Rick e Morty.

***Documentação da API:*** https://rickandmortyapi.com/documentation/#rest

## Planejamento - Iniciando o desafio

Uma das coisas que gosto muito de fazer antes de começar algum projeto é o planejamento de todas as etapas, definir o objetivo e o que preciso fazer para alcançar o resultado desejado. E antes mesmo de começar a mexer em qualquer tipo de código resolvi rabiscar no power point o layout e como queria que ficasse.

Partindo desse mini planejamento resolvi dividir em três partes para poder dar atenção para todas as partes mais importantes e garantir que tudo saia como planejado:

* A primeira é montar a estrutura do meu HTMl;
* Depois é hora de tornar as coisas mais bonitas com o CSS;
* Quando tiver a página completa só resta montar a lógica por trás que vai dar vida a página com o JavaScript.

 
# 1 - HTML 💀

Inicialmente pensei em utilizar a estrutura de tabelas para poder organizar as imagens, como eu sabia a quantidade que deveria aparecer e queria que todas aparecessem uma ao lado da outra pareceu ser uma opção viável. Depois de umas pesquisadas e testes percebi que não ficaria muito bom devido não conseguir ficar responsivo como eu queria. 

No final das contas resolvi montar uma estrutura básica com um <header> para adicionar uma logo e uma <section> onde irei adicionar os cards com nome e imagem dos personagens dinamicamente com a ajuda do JavaScript.


# 2 - CSS 💄 💅🏿

Com o css resolvi criar uma coisa simples, mas que ficasse maneiro de visualizar, com o ***disply flex*** pude deixar um pouco mais responsivo ao invés de uma coisa estática. Adicionei uma imagem de fundo junto com a logo do desenho. Para deixar uma pouco mais legal resolvi criar algumas estilizações com o seletor ***:hover*** alterando umas cores e destacando os cards quando o mouse passa sobre os elementos.

# 3 - JavaScript ⚙

Uma das partes mais complexas, apesar de alguma das funções utilizados vimos no minicurso o que facilitou muito o desenvolvimento das demais funcionalidades. De acordo com a documentação da API podemos buscar mais de um personagem por requisição e foi o que fiz para não criar código desnecessário.

Após fazer a solicitação HTTP utilizando ***Fentch*** obtive os quatro personagens que aparecerão na página, como havia citado na parte 1 resolvi inserir a estrutura HTML dos cards no JavaScript para deixar mais dinâmico, nesse desafio a quantidade já havia sido determinada, mas se caso não soubesse dessa a quantidade exata desta forma poderia adicionar mais cards sem necessidade de fazer alteração no meu código e por isso que utilizei o ***foreach** que é uma estrutura de repetição que se repeti uma vez a cada elemento da matriz, assim não preciso me preocupar com a quantidade de cards que aparecerão na tela.

Para finalizar preciso mudar os personagens toda vez que recarregar a página, para que isso aconteça utilizo o método ```window.addEventListener('load', () => {characters();}``` que aciona a função que busca os personagens, atualizando as imagens quando a página é recarregada.


# 🌟 Conclusão 

Esse foi o desafio proposto como parte do processo de seleção da Zup para o programa estrelas fora da caixa. Um projeto incrível que eu fico honrado de poder estar participando.
O resultado: https://vibrant-aryabhata-be3d79.netlify.app/



