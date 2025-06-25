console.log("=== Tratamento de Erros ===");

// Exemplo 1: Erro de referência (ReferenceError)
try {
  console.log(nomeNaoDeclarado);
} catch (erro) {
  console.error("Erro capturado:", erro.name);
  console.error("Mensagem:", erro.message);
} finally {
  console.log("Bloco finally sempre é executado.");
}

// Exemplo 2: Erro de tipo (TypeError)
try {
  let numero = 5;
  numero(); // tentar executar um número como função
} catch (erro) {
  console.warn("Erro:", erro.name);
  console.warn("Detalhes:", erro.message);
}

// Exemplo 3: Erro personalizado com throw
function dividir(a, b) {
  if (b === 0) {
    throw new Error("Não é possível dividir por zero.");
  }
  return a / b;
}

try {
  let resultado = dividir(10, 0);
  console.log("Resultado:", resultado);
} catch (erro) {
  console.error("Erro ao dividir:", erro.message);
}

// Exemplo 4: Validando entrada do usuário
function processarIdade(idade) {
  if (typeof idade !== "number") {
    throw new TypeError("Idade deve ser um número.");
  }
  if (idade < 0 || idade > 120) {
    throw new RangeError("Idade inválida. Deve estar entre 0 e 120.");
  }
  console.log(`Idade registrada: ${idade} anos.`);
}

try {
  processarIdade("vinte");
} catch (erro) {
  console.error(`[${erro.name}] ${erro.message}`);
}

try {
  processarIdade(200);
} catch (erro) {
  console.error(`[${erro.name}] ${erro.message}`);
}

try {
  processarIdade(35); // Válido
} catch (erro) {
  console.error(`[${erro.name}] ${erro.message}`);
}

//| Elemento      | Exemplo                            | Uso                                 |
//| ------------- | ---------------------------------- | ----------------------------------- |
//| `try`         | `try { ... }`                      | Executar código que pode gerar erro |
//| `catch`       | `catch (e) { ... }`                | Capturar e tratar o erro            |
//| `finally`     | `finally { ... }`                  | Executado sempre, erro ou não       |
//| `throw`       | `throw new Error(\"mensagem\")`    | Lança um erro personalizado         |
//| `Error types` | `TypeError`, `ReferenceError`, etc | Erros específicos do JavaScript     |
