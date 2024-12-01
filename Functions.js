// Aula JavaScript > DOM e Functions > Github

// Manipulação dos objetos DOM (Document Object Model)
// Representação de dados dos objetos que compõem uma estrutura
// e o conteúdo de um documento Web

// Essencial para manipular e interagir com elementos de uma página
// Document.querySelector()

// Exemplo:

const titulo = document.querySelector('h1');
titulo.textContent = 'Texto Modificado'; // Modifica o texto do elemento

// Uso principal: Buscar e modificar elemntos HTML


// Document.createElement()
// Cria novos elementos dinamicamente

// Exemplo:

const novoElemento = document.createElement('p');
novoElemento.textContent = 'Parágrafo Adicionado';
document.body.appendChild(novoElemento);

// Uso principal: Adicionar novos elementos ao DOM, enriquecendo a estrutura da página
// document.getElementsById()

// Exemplo:

const elemento = document.getElementById('menuElemento');

// Uso Principal: Buscar um elemento específico de forma direta quando se conhece o ID.

// addEventListener()
// Funções que lidam com interações dos usuários
// Sua função é adicionar um ouvinte para eventos (como cliques)

const botao = document.querySelector('button');
botao.addEventListener('click', () => {
  alert('Botão Clicado!');
}
);
// Uso principal: Criar interatividade, como cliques ou movimento do mouse

// removeEventListener()
// Remove um ouvinte de evento previamente adicionado.

// Exemplo:

function mensagem() { console.log('Evento disparado') };
botao.addEventListener('click', mensagem);
botao.removeEventListener('click', mensagem);

// Uso principal: Remove eventos quando não são mais necessários.

// setTimeout()
// Controlam ações que ocorrem em intervalos ou após um tempo
// Executa uma função após um período de tempo (unidade de medida > Milisegundos)

setTimeout(() => {
  alert('Executado após 2 segundos!');
}, 2000);

// alert > ele executa o toString do seu objeto e apresenta em tela
// console.log > ele registra a informação no console do navegador ficando restrita ao conhecimento do desenvolvedor
// Uso Principal: Atrasar execuções ou criar temporizadores;

// setInterval()
// Executa uma função repetidamente em intervalos regulares.

// Exemplo:

const intervalo = setInterval(() => {
  console.log('Executando a cada 1 segundo');
}, 1000);

// Uso principal: Atualizações periódicas, como animações ou relógios.

// map()
// Cria um novo array aplicando uma função a cada elemento do array original.

// Exemplo:

const numeros = [1, 2, 3];
const dobrados = numeros.map(num => num * 2);
console.log(dobrados); // [2, 4, 6]

// Uso Principal: Transofrmar arrays.

// filter()
// Filtra os elementos que atendem a uma condição.

// Exemplo:

const numerosFilter = [10, 20, 30];
const maioresQue15 = numerosFilter.filter(num => num > 15);
console.log(maioresQue15); // [20, 30]

// Uso principal: Criar subarrays baseados em critérios.

// reduce()
// Reduz o array a um único valor.

const numerosSoma = [1, 2, 3];
const soma = numerosSoma.reduce((acumulador, num) => acumulador + num, 0);
console.log(soma); // 6

// Uso principal: Acumular valores, como somas ou concatenações.

// forEach()
// Itera por cada elemento de um array.

// Exemplo:

const frutas = ['maçã', 'banana', 'laranja'];
frutas.forEach(fruta => console.log(fruta));

// Uso principal: Executar ações em cada item de ums lista.

// JSON.parse() e JSON.stringify()

// - JSON.parse(): Converte uma string JSON em um objeto.
// - JSON.stringify(): Converte um objeto em uma string JSON.

// Exemplo:

const json = '{"nome": "Ana", "idade": 30}';
const obj = JSON.parse(json);
console.log(obj.nome) // Ana

// Uso Principal: Manipular dados enviados/recebidos por APIs.

// fetch()
// Realiza requisições HTTP.

// Exemplo:

fetch('https://api.exemplo.com/dados')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(`Erro: ${error}`));

// Uso principal: Obter ou enviar dados para servidores.

// if/else
// Executa código com abse em condições.

// Exemplo:

const idade = 18;

if (idade >= 18) console.log('Maior de idade'); else console.log('Menor de idade');

// Uso principal: Tomar decições no código.

// switch()
// Seleciona uma entre várias opções com base em um valor.

// Exemplo:

const cor = 'vermelho';

switch (cor) {
  case 'vermelho':
    console.log('Pare!');
    break;
  case 'amarelo':
    console.log("Atenção!");
    break;
  case 'verde':
    console.log("Siga!");
    break;
  default:
    console.log('Cor inválida!');
}

// Uso principal: Substituir vários if/else aninhados.

// toUpperCase()
// Converte uma string para letras maiúsculas.

// Exemplo:

const texto = 'Olá';
console.log(texto.toUpperCase()); // 'OLÁ'

// Uso principal: Padronizar entrada de usuário.

// toLowerCase()
// Converte uma string para letras minúsculas.

// Exemplo:

const textoMaiusculo = 'OLÁ';
console.log(textoMaiusculo.toLowerCase()); // 'olá'

// Uso principal: Padronizar comparações de strings.

// includes()
// Verifica se uma string contém outra.

// Exemplo:

const frase = 'JavaScript é incrível';
console.log(frase.includes('incrível')); // true

// Uso principal: Procurar substring dentro de uma string.

// Map
// Uma coleção de pares chave-valor.

// Exemplo:

const mapa = new Map();
mapa.set('nome', 'João');
console.log(mapa.get('nome')); // 'João'

// Uso principal: Armazenar dados com chaves associadas.

// Set
// Armazena valores únicos, sem repetições.

// Exemplo:

const conjunto = new Set([1, 2, 2, 3]);
console.log(conjunto) // Set {1, 2, 3}

// Uso principal: Garantir que não haja valores duplicados.

// Math.random()
// Gera um número aleatório entre 0 e 1.

// Exemplo:

const aleatorio = Math.random();
console.log(aleatorio);

// Uso principal: Geração de números aleatórios.

// Math.floor()
// Arredonda um número para baixo.

// Exemplo:

const numero = 4.7;
console.log(Math.floor(numero)) // 4

// Uso principal: Arredondar valores para inteiros.

// Código:
// 398e7 Thomas Soares da Silveira