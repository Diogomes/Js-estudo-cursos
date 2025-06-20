const display = document.querySelector("#displayInput");
const botaoIgual = document.querySelector(".igual");
const botaoPonto = document.querySelector(".ponto");
const botoesNumeros = document.querySelectorAll(".num");
const botoesOperadores = document.querySelectorAll(".operator");
const botoesFuncionais = document.querySelectorAll(".func");

let operacaoAtual = "";

const atualizaDisplay = () => {
  display.value = operacaoAtual;
};

const insereNumero = (e) => {
  operacaoAtual += e.target.textContent;
  atualizaDisplay();
};

const insereOperador = (e) => {
  const operador = e.target.textContent;
  if (!operacaoAtual.endsWith(" ")) {
    operacaoAtual += ` ${operador} `;
    atualizaDisplay();
  }
};

const inserePonto = () => {
  const partes = operacaoAtual.trim().split(/\s+/);
  const ultimo = partes[partes.length - 1];
  if (!ultimo.includes(".")) {
    operacaoAtual += ".";
    atualizaDisplay();
  }
};

const limparDisplay = () => {
  operacaoAtual = "";
  atualizaDisplay();
};

const deletarUltimo = () => {
  operacaoAtual = operacaoAtual.trimEnd().slice(0, -1);
  atualizaDisplay();
};

const insereFuncional = (e) => {
  const valor = e.target.textContent;
  if (valor === "AC") limparDisplay();
  else if (valor === "DEL") deletarUltimo();
  else if (valor === "%") {
    try {
      operacaoAtual = String(eval(operacaoAtual) / 100);
      atualizaDisplay();
    } catch {
      alert("Erro na operação");
    }
  }
};

const calcular = () => {
  try {
    operacaoAtual = String(eval(operacaoAtual.replace(/\s+/g, "")));
    atualizaDisplay();
  } catch {
    alert("Erro na expressão");
  }
};

botaoIgual.addEventListener("click", calcular);
botaoPonto.addEventListener("click", inserePonto);
botoesNumeros.forEach(b => b.addEventListener("click", insereNumero));
botoesOperadores.forEach(b => b.addEventListener("click", insereOperador));
botoesFuncionais.forEach(b => b.addEventListener("click", insereFuncional));
