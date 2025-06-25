console.log("=== Função Declarada ===");
function saudacao(nome) {
  return `Olá, ${nome}!`;
}
console.log(saudacao("Arya"));

console.log("\n=== Função Anônima ===");
const quadrado = function (x) {
  return x * x;
};
console.log("Quadrado de 4:", quadrado(4));

console.log("\n=== Arrow Function ===");
const somar = (a, b) => a + b;
console.log("3 + 5 =", somar(3, 5));

console.log("\n=== Função com Parâmetros Padrão ===");
function apresentar(nome = "Convidado") {
  console.log(`Bem-vindo(a), ${nome}!`);
}
apresentar("Jon");
apresentar();

console.log("\n=== Callback (Função como Parâmetro) ===");
function executarOperacao(a, b, operacao) {
  return operacao(a, b);
}
const multiplicar = (a, b) => a * b;
console.log("2 * 4 =", executarOperacao(2, 4, multiplicar));

console.log("\n=== Função que Retorna Outra Função ===");
function saudador(saudacao) {
  return function (nome) {
    return `${saudacao}, ${nome}`;
  };
}
const dizerOi = saudador("Oi");
console.log(dizerOi("Tyrion"));

console.log("\n=== Função Imediata (IIFE) ===");
(function () {
  const segredo = "O inverno está chegando!";
  console.log("Mensagem secreta:", segredo);
})();

console.log("\n=== Função Recursiva ===");
function fatorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * fatorial(n - 1);
}
console.log("Fatorial de 5:", fatorial(5));

//| Conceito                       | Aplicação                                   |
//| ------------------------------ | ------------------------------------------- |
//| **Função declarada**           | `function nome() {}`                        |
//| **Função anônima**             | `const f = function () {}`                  |
//| **Arrow function**             | `const f = () => {}`                        |
//| **Parâmetro padrão**           | `function f(a = 1) {}`                      |
//| **Callback**                   | Passar função como argumento                |
//| **Função de alta ordem**       | Retorna uma função                          |
//| **IIFE (Immediately Invoked)** | Função que se executa assim que é declarada |
//| **Função recursiva**           | Chama a si mesma (ex: fatorial)             |
