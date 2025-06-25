const log = document.getElementById("log");
const write = msg => log.innerText += msg + "\n";

function executarDestructuring() {
  log.innerText = "🔎 Executando exemplos de Destructuring...\n\n";

  // Array simples
  const [a, b] = [1, 2];
  write(`Array simples: a=${a}, b=${b}`);

  // Ignorando valores
  const [, segundo] = [10, 20, 30];
  write(`Ignorando primeiro valor: segundo=${segundo}`);

  // Valores padrão
  const [x = 100, y = 200] = [];
  write(`Valores padrão: x=${x}, y=${y}`);

  // Objeto simples
  const pessoa = { nome: "Arya", idade: 18 };
  const { nome, idade } = pessoa;
  write(`Objeto simples: nome=${nome}, idade=${idade}`);

  // Alias
  const { nome: nomeCompleto } = pessoa;
  write(`Alias (renomeando): nomeCompleto=${nomeCompleto}`);

  // Valor padrão em objeto
  const { sobrenome = "Stark" } = pessoa;
  write(`Valor padrão: sobrenome=${sobrenome}`);

  // Aninhado (nested)
  const usuario = {
    id: 1,
    perfil: {
      email: "jon@snow.com",
      endereco: {
        cidade: "Winterfell",
        pais: "Westeros"
      }
    }
  };
  const {
    perfil: {
      endereco: { cidade, pais }
    }
  } = usuario;
  write(`Nested: cidade=${cidade}, país=${pais}`);

  // Em parâmetros de função
  function apresentar({ nome, idade }) {
    return `Olá, meu nome é ${nome} e tenho ${idade} anos.`;
  }
  write(`Função com destructuring: ${apresentar(pessoa)}`);
}

//| Tipo                     | Exemplo                                                         |
//| ------------------------ | --------------------------------------------------------------- |
//| Destructuring de arrays  | `const [a, b] = [1, 2]`                                         |
//| Destructuring de objetos | `const { nome, idade } = pessoa`                                |
//| Alias em destructuring   | `const { nome: nomeCompleto } = pessoa`                         |
//| Default values           | `const [a = 10] = []` / `const { nome = "Desconhecido" } = obj` |
//| Destructuring em função  | `function saudacao({ nome }) { ... }`                           |
//| Nested (aninhado)        | `const { endereco: { cidade } } = pessoa`                       |
//| Ignorando valores        | `const [, segundo] = [1, 2, 3]`                                 |
