const screenOne = document.querySelector('.screen-one')
const screenTwo = document.querySelector('.screen-two')
const openTheCookie = document.querySelector('#open-the-cookie')
const openAnotherCookie = document.querySelector('#open-another-cookie')
const phrase = document.querySelector('#phrase')

const allPhases = [
  "Cada linha de código que você escreve é um passo em direção ao domínio da programação.",
  "Os erros são oportunidades de aprendizado. Não desanime, mas corrija e avance.",
  "A prática constante é a chave para o sucesso na programação.",
  "Cada desafio de programação é uma chance de crescimento e aprimoramento.",
  "A persistência na resolução de problemas leva à maestria da programação.",
  "Não se preocupe com a complexidade, concentre-se na solução passo a passo.",
  "Aprender a programar é como aprender um novo idioma - exige tempo e dedicação.",
  "Seja curioso. Explore novas tecnologias e linguagens de programação.",
  "Não compare seu progresso com o dos outros. Cada jornada na programação é única.",
  "Não tenha medo de cometer erros, pois cada erro é uma oportunidade de aprendizado.",
  "A paciência é uma virtude na programação. Grandes projetos levam tempo e esforço.",
  "Celebre suas pequenas vitórias de programação. Cada uma delas é um marco em seu progresso.",
  "A consistência é mais importante do que a intensidade. Estude um pouco todos os dias.",
  "Transforme seus obstáculos em oportunidades de aprendizado e crescimento.",
  "A paixão pela programação é o combustível que alimenta seu progresso.",
  "Aprenda com a comunidade de programadores. O conhecimento compartilhado é poder.",
  "Não se sinta intimidado pela vastidão do campo da programação. Você pode dominá-lo um passo de cada vez.",
  "Seja paciente consigo mesmo. A jornada da programação é uma maratona, não uma corrida.",
  "Lembre-se de que até os programadores mais experientes já foram iniciantes um dia.",
  "O maior desafio na programação é acreditar em si mesmo. Você é capaz de alcançar o que quiser."
];

function randomPhrase() {
  let randomNumber = Math.floor(Math.random() * allPhases.length)
  let chosePhrase = allPhases[randomNumber]
  return chosePhrase
}

function printRandonPhrase() {
  let selectPhrase = randomPhrase()
  phrase.textContent = selectPhrase
}

function handleClick() {
  toggleScreen()
  printRandonPhrase()
}

function toggleScreen() {
  screenOne.classList.toggle('hide')
  screenTwo.classList.toggle('hide')
};

openTheCookie.addEventListener('click', handleClick)
openAnotherCookie.addEventListener('click', handleClick)