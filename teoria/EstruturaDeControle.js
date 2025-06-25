// Exemplo prático: classificação de uma pessoa com base na idade e na nacionalidade

function classificarPessoa(idade, nacionalidade) {
  console.log("Verificando informações...");

  // Exemplo com if e else if
  if (idade < 0) {
    console.log("Idade inválida.");
  } else if (idade < 12) {
    console.log("Você é uma criança.");
  } else if (idade < 18) {
    console.log("Você é um adolescente.");
  } else if (idade < 60) {
    console.log("Você é um adulto.");
  } else {
    console.log("Você é um idoso.");
  }

  // Exemplo com if e else
  if (nacionalidade === "brasileiro") {
    console.log("Você é do Brasil.");
  } else {
    console.log("Você é estrangeiro.");
  }

  // Exemplo com switch
  switch (nacionalidade.toLowerCase()) {
    case "brasileiro":
      console.log("Idioma: Português.");
      break;
    case "americano":
      console.log("Idioma: Inglês.");
      break;
    case "japonês":
      console.log("Idioma: Japonês.");
      break;
    case "francês":
      console.log("Idioma: Francês.");
      break;
    default:
      console.log("Idioma: Desconhecido.");
  }

  // Outro exemplo com if simples
  const temCarteira = idade >= 18;
  if (temCarteira) {
    console.log("Você pode dirigir.");
  } else {
    console.log("Você ainda não pode dirigir.");
  }
}

// Chamando a função com diferentes dados para testar
classificarPessoa(25, "brasileiro");
console.log("------------");
classificarPessoa(10, "americano");
console.log("------------");
classificarPessoa(65, "francês");
//✅ O que o código demonstra:
//| Conceito            | Demonstração                                                   |
//| ------------------- | -------------------------------------------------------------- |
//| `if`                | Para verificar condições simples (`idade < 12`, etc).          |
//| `else if` e `else`  | Para ramificações alternativas.                                |
//| `switch`            | Para múltiplas opções com base na nacionalidade.               |
//| `default` no switch | Para tratar casos não previstos.                               |
//| `if` com boolean    | Uso direto de expressões (`temCarteira`) como condição lógica. |
