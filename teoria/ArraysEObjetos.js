console.log("=== ARRAYS ===");

// Criação de array
const frutas = ["Maçã", "Banana", "Uva"];
console.log("Frutas:", frutas);

// Acessando e modificando elementos
console.log("Primeira fruta:", frutas[0]);
frutas[1] = "Laranja";
console.log("Frutas atualizadas:", frutas);

// Métodos úteis
frutas.push("Abacaxi"); // adiciona no final
frutas.unshift("Morango"); // adiciona no início
console.log("Após push/unshift:", frutas);

frutas.pop(); // remove do final
frutas.shift(); // remove do início
console.log("Após pop/shift:", frutas);

// slice e splice
console.log("Slice (1 a 2):", frutas.slice(1, 3)); // não altera o array original
frutas.splice(1, 1, "Kiwi"); // remove 1 e insere "Kiwi"
console.log("Após splice:", frutas);

// forEach e map
frutas.forEach((f, i) => console.log(`Fruta ${i + 1}: ${f}`));
const frutasMaiusculas = frutas.map(f => f.toUpperCase());
console.log("Frutas maiúsculas:", frutasMaiusculas);

// filter e find
const longas = frutas.filter(f => f.length > 4);
console.log("Frutas com mais de 4 letras:", longas);
const encontraUva = frutas.find(f => f === "Uva");
console.log("Encontrou Uva?", encontraUva);

// includes e indexOf
console.log("Tem Kiwi?", frutas.includes("Kiwi"));
console.log("Posição da Maçã:", frutas.indexOf("Maçã"));

console.log("\n=== OBJETOS ===");

// Criação de objeto
const personagem = {
  nome: "Jon Snow",
  idade: 30,
  casa: "Stark",
  vivo: true,
  saudacao: function() {
    return `Olá, eu sou ${this.nome} da Casa ${this.casa}.`;
  }
};

console.log("Personagem:", personagem);
console.log("Nome:", personagem.nome);
console.log("Saudação:", personagem.saudacao());

// Acessando e modificando propriedades
personagem.idade = 31;
personagem["vivo"] = false;
console.log("Atualizado:", personagem);

// Adicionando nova propriedade
personagem.aliado = "Daenerys";
console.log("Com aliado:", personagem);

// Acesso dinâmico com colchetes
const chave = "casa";
console.log("Casa:", personagem[chave]);

// Iterando com for...in
for (let prop in personagem) {
  console.log(`${prop}: ${personagem[prop]}`);
}

console.log("\n=== COMBINANDO ===");

// Array de objetos
const personagens = [
  { nome: "Arya", idade: 18 },
  { nome: "Bran", idade: 16 },
  { nome: "Sansa", idade: 20 }
];

personagens.forEach(p => {
  console.log(`${p.nome} tem ${p.idade} anos.`);
});

// Objeto com array
const reino = {
  nome: "Westeros",
  casas: ["Stark", "Lannister", "Targaryen"]
};

console.log("Casas em Westeros:", reino.casas.join(", "));


//| Conceito          | Exemplo                               |
//| ----------------- | ------------------------------------- |
//| Array             | `const arr = [1, 2, 3]`               |
//| Objeto            | `const obj = { nome: 'Jon' }`         |
//| Acesso            | `arr[0]`, `obj.nome`, `obj['x']`      |
//| Métodos úteis     | `push`, `map`, `filter`, etc.         |
//| Iterações         | `forEach`, `for...in`                 |
//| Estruturas mistas | Arrays de objetos, objetos com arrays |
