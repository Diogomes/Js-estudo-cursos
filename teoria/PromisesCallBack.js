console.log("=== CALLBACKS ===");

function buscarUsuarioCallback(id, callback) {
  setTimeout(() => {
    const usuario = { id, nome: "Arya Stark" };
    callback(usuario);
  }, 1000); // simula uma requisição assíncrona
}

buscarUsuarioCallback(1, function (usuario) {
  console.log("Usuário com callback:", usuario);
});

console.log("=== PROMISES ===");

function buscarUsuarioPromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, nome: "Jon Snow" });
      } else {
        reject(new Error("ID inválido"));
      }
    }, 1000);
  });
}

buscarUsuarioPromise(2)
  .then((usuario) => {
    console.log("Usuário com Promise:", usuario);
  })
  .catch((erro) => {
    console.error("Erro ao buscar usuário:", erro.message);
  })
  .finally(() => {
    console.log("Finalizado (Promise).");
  });

console.log("=== ASYNC / AWAIT ===");

async function carregarUsuario(id) {
  try {
    const usuario = await buscarUsuarioPromise(id);
    console.log("Usuário com async/await:", usuario);
  } catch (erro) {
    console.error("Erro com async/await:", erro.message);
  } finally {
    console.log("Finalizado (async/await).");
  }
}

carregarUsuario(3);

// Exemplo de funções modernas ES6+
console.log("=== ES6+ Features ===");

// Arrow function
const saudacao = nome => `Olá, ${nome}!`;
console.log(saudacao("Daenerys"));

// Template literal
const reino = "Westeros";
console.log(`Bem-vindo a ${reino}`);

// Desestruturação
const { id, nome } = { id: 10, nome: "Bran Stark" };
console.log(`ID: ${id}, Nome: ${nome}`);

// Spread e rest
const casas = ["Stark", "Lannister", "Targaryen"];
const todas = [...casas, "Baratheon"];
console.log("Casas:", todas);

function mostrarCasas(...noms) {
  noms.forEach(casa => console.log(`Casa: ${casa}`));
}
mostrarCasas("Martell", "Greyjoy");

// Default parameter
const mostrarRegiao = (regiao = "Norte") => console.log(`Região: ${regiao}`);
mostrarRegiao();
mostrarRegiao("Sul");

//| Recurso            | Exemplo                                       |
//| ------------------ | --------------------------------------------- |
//| **Callback**       | `function(x, callback) { callback(x); }`      |
//| **Promise**        | `new Promise((res, rej) => { ... })`          |
//| **.then / .catch** | `promise.then(...).catch(...)`                |
//| **async / await**  | `await minhaPromise()`                        |
//| **ES6+**           | Arrow functions, desestruturação, rest/spread |
