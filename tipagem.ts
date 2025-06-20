// Exemplo de TIPAGEM ESTÁTICA no TypeScript
// -----------------------------------------

// Declarando explicitamente o tipo de uma variável (tipagem estática)
let nome: string = "Maria";
let idade: number = 30;
let ativo: boolean = true;

// Função com tipos nos parâmetros e no retorno
function saudacao(nome: string, idade: number): string {
  return `Olá, meu nome é ${nome} e tenho ${idade} anos.`;
}

// Exemplo de uso
console.log(saudacao(nome, idade));

// Erro de compilação (não pode atribuir um número a uma string!)
// nome = 123; // Descomente para ver o erro

// Inferência de tipos: TypeScript deduz o tipo da variável
let cidade = "São Paulo"; // TypeScript entende que é uma string

// cidade = 100; // Erro: cidade é uma string


// Exemplo de TIPAGEM DINÂMICA (usando 'any')
// -------------------------------------------

// Em TypeScript, a tipagem dinâmica é "simulada" usando 'any'
let variavelDinamica: any = "Um texto";
console.log(variavelDinamica);

variavelDinamica = 123; // Agora é um número
console.log(variavelDinamica);

variavelDinamica = { nome: "João", idade: 25 }; // Agora é um objeto
console.log(variavelDinamica);

// Função com parâmetro de tipo 'any'
function exibir(valor: any): void {
  console.log("Valor:", valor);
}

exibir("Olá");
exibir(456);
exibir([1, 2, 3]);

// Nota: Usar 'any' elimina a verificação de tipos. Use com cuidado!


// RESUMO:
// - Tipagem Estática: O tipo da variável é conhecido em tempo de compilação.
// - Tipagem Dinâmica: O tipo pode mudar em tempo de execução (ex: 'any' no TS).
