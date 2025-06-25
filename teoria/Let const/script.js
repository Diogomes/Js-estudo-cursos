const log = document.getElementById("log");

function escrever(msg) {
  log.innerText += msg + "\n";
}

function limparLog() {
  log.innerText = "";
}

// Demonstração de let
function testarLet() {
  limparLog();
  escrever("🔷 Demonstração com let:");

  let idade = 25;
  escrever(`idade inicial: ${idade}`);
  
  idade = 30;
  escrever(`idade reatribuída: ${idade}`);

  {
    let idade = 50; // escopo de bloco
    escrever(`idade dentro do bloco: ${idade}`);
  }

  escrever(`idade fora do bloco: ${idade}`);

  try {
    escrever(`Tentando usar let antes da declaração...`);
    escrever(valorLetNaoDeclarado); // ReferenceError
    let valorLetNaoDeclarado = 10;
  } catch (e) {
    escrever(`❌ Erro esperado: ${e.message}`);
  }
}

// Demonstração de const
function testarConst() {
  limparLog();
  escrever("🟢 Demonstração com const:");

  const nome = "Jon Snow";
  escrever(`nome constante: ${nome}`);

  try {
    nome = "Arya Stark"; // erro: reatribuição não permitida
  } catch (e) {
    escrever(`❌ Erro ao reatribuir const: ${e.message}`);
  }

  // Mutação de objeto mesmo com const
  const personagem = { nome: "Daenerys", titulo: "Rainha" };
  personagem.titulo = "Mãe dos Dragões"; // permitido
  escrever(`🛠️ objeto mutado: ${JSON.stringify(personagem)}`);

  const lista = [1, 2, 3];
  lista.push(4);
  escrever(`🛠️ array mutado: [${lista}]`);
}

// Comparando let e const
function compararLetConst() {
  limparLog();
  escrever("⚖️ Comparando let e const:");

  let a = 10;
  const b = 20;

  escrever(`let a = ${a}`);
  escrever(`const b = ${b}`);

  a = 15;
  escrever(`✅ let pode ser reatribuído: a = ${a}`);

  try {
    b = 25; // erro
  } catch (e) {
    escrever(`❌ const não pode ser reatribuído: ${e.message}`);
  }

  {
    let escopoLet = "let dentro do bloco";
    const escopoConst = "const dentro do bloco";
    escrever(`🧱 dentro do bloco: ${escopoLet}, ${escopoConst}`);
  }

  try {
    escrever(`Fora do bloco: ${escopoLet}`);
  } catch (e) {
    escrever(`❌ escopoLet não existe fora do bloco: ${e.message}`);
  }
}
//| Comportamento                       | Exemplo                                                                   |
//| ----------------------------------- | ------------------------------------------------------------------------- |
//| **Reatribuição com `let`**          | `let x = 1; x = 2; ✅ funciona`                                            |
//| **Reatribuição com `const`**        | `const x = 1; x = 2; ❌ erro`                                              |
//| **Mutação com `const` (objeto)**    | `const obj = {}; obj.nome = "Jon"; ✅ permitido`                           |
//| **Escopo de bloco com `let/const`** | Dentro de `if`, `for`, etc. – isolados do resto                           |
//| **Hoisting com `var`**              | Pode ser acessado antes da declaração, mas vale `undefined`               |
//| **Hoisting com `let/const`**        | Lançam erro se acessados antes da declaração (TDZ – *temporal dead zone*) |
