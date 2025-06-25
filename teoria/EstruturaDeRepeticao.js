console.log("=== Estrutura FOR ===");
// Percorre um array com for
const frutas = ["Maçã", "Banana", "Uva", "Manga"];
for (let i = 0; i < frutas.length; i++) {
  console.log(`Fruta ${i + 1}: ${frutas[i]}`);
}

console.log("\n=== Estrutura WHILE ===");
// Conta de 1 a 5 usando while
let contador = 1;
while (contador <= 5) {
  console.log(`Contando: ${contador}`);
  contador++;
}

console.log("\n=== Estrutura DO...WHILE ===");
// Garante execução ao menos uma vez
let senhaCorreta = "1234";
let tentativa;
let tentativas = 0;

do {
  tentativa = prompt("Digite a senha:"); // só funciona em navegadores
  tentativas++;
  if (tentativa !== senhaCorreta) {
    console.log("Senha incorreta.");
  }
} while (tentativa !== senhaCorreta);

console.log(`Senha correta! Tentativas: ${tentativas}`);

console.log("\n=== LOOP INFINITO COM WHILE (com break) ===");
// Demonstração com break
let numero = 0;
while (true) {
  numero++;
  if (numero === 3) {
    console.log("Chegou ao número 3. Parando...");
    break;
  }
}

console.log("\n=== FOR com CONTINUE ===");
// Pula números pares
for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) continue;
  console.log(`Número ímpar: ${i}`);
}
//| Estrutura    | Demonstração                                       |
//| ------------ | -------------------------------------------------- |
//| `for`        | Iteração tradicional com índices                   |
//| `while`      | Repetição baseada em condição                      |
//| `do...while` | Garante execução pelo menos uma vez                |
//| `break`      | Interrompe um loop infinito (`while (true)`)       |
//| `continue`   | Pula uma iteração (exemplo: ignorar números pares) |
