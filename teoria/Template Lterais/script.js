function gerarMensagem() {
  const nome = document.getElementById("nome").value || "visitante";
  const idade = Number(document.getElementById("idade").value) || 0;

  const saudacao = `Olá, ${nome}!`;
  const statusIdade = `Você é ${idade >= 18 ? "maior" : "menor"} de idade.`;
  const expressao = `Ano atual + sua idade: ${new Date().getFullYear() + idade}`;
  const mensagemMultilinha = `Bem-vindo ao sistema!
Seu nome: ${nome}
Sua idade: ${idade}`;

  const mensagemFinal = `
${saudacao}
${statusIdade}
${expressao}

Mensagem Multilinha:
${mensagemMultilinha}
  `;

  document.getElementById("resultado").innerText = mensagemFinal;

  // Exemplo de tagged template (simples)
  function destaque(strings, ...values) {
    return strings.map((str, i) => `${str}<strong>${values[i] || ""}</strong>`).join("");
  }

  const textoFormatado = destaque`Nome: ${nome}, Idade: ${idade}`;
  console.log("Tagged Template:", textoFormatado);
}

//| Recurso                           | Exemplo                                             |
//| --------------------------------- | --------------------------------------------------- |
//| Substituição de variáveis         | `` `Olá, ${nome}` ``                                |
//| Quebra de linha sem `\n`          | `` `Linha 1\nLinha 2` `` → `` `Linha 1\nLinha 2` `` |
//| Expressões dentro do template     | `` `2 + 2 = ${2 + 2}` ``                            |
//| Templates aninhados               | `` `Olá, ${user.isAdmin ? 'Admin' : 'Usuário'}` ``  |
//| Uso com funções                   | `` `Bem-vindo ${nome.toUpperCase()}` ``             |
//| Tagged Templates (exemplo básico) | `` tag`Olá ${user}` ``                              |

