console.log("=== ARROW FUNCTIONS ===");

// 1. Básico
const dobro = x => x * 2;
console.log("Dobro de 4:", dobro(4));

// 2. Sem parâmetros
const digaOi = () => "Oi!";
console.log(digaOi());

// 3. Vários parâmetros
const somar = (a, b) => a + b;
console.log("3 + 5 =", somar(3, 5));

// 4. Com bloco de código (return obrigatório)
const calcularArea = (largura, altura) => {
  const area = largura * altura;
  return area;
};
console.log("Área 5x6:", calcularArea(5, 6));

// 5. Retornando objetos (⚠️ precisa de parênteses)
const criarUsuario = (nome, idade) => ({ nome, idade });
console.log("Usuário:", criarUsuario("Arya", 18));

// 6. Arrow function como callback
const numeros = [1, 2, 3, 4, 5];
const quadrados = numeros.map(n => n ** 2);
console.log("Quadrados:", quadrados);

const pares = numeros.filter(n => n % 2 === 0);
console.log("Pares:", pares);

// 7. Diferença de 'this'
function UsuarioTradicional() {
  this.nome = "Jon";
  setTimeout(function () {
    // aqui o this não se refere ao objeto
    console.log("Tradicional:", this.nome); // undefined
  }, 500);
}

function UsuarioArrow() {
  this.nome = "Daenerys";
  setTimeout(() => {
    // aqui o this se mantém vinculado ao contexto externo
    console.log("Arrow:", this.nome); // Daenerys
  }, 1000);
}

new UsuarioTradicional();
new UsuarioArrow();

//| Conceito                                              | Explicação                                                    |
//| ----------------------------------------------------- | ------------------------------------------------------------- |
//| Sintaxe básica                                        | Parâmetros => expressão/retorno                               |
//| Sem parâmetros                                        | `() => valor`                                                 |
//| Com um parâmetro                                      | `x => valor`                                                  |
//| Com vários parâmetros                                 | `(x, y) => valor`                                             |
//| Bloco de código e `return` explícito                  | `(x) => { return x * 2; }`                                    |
//| Arrow function como callback                          | `.map()`, `.filter()`, `.forEach()`, etc.                     |
//| Arrow functions com objetos                           | Retornar objetos com `()` ao redor: `() => ({ nome: 'Jon' })` |
//| Diferença de `this` em relação a funções tradicionais | Não possui seu próprio `this`                                 |
