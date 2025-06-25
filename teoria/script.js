// Seletores DOM
const titulo = document.getElementById("titulo");
const entrada = document.querySelector("#entrada");
const btnAdicionar = document.getElementById("btn");
const btnLimpar = document.getElementById("limpar");
const caixa = document.getElementById("caixa");

// Alterando conteúdo e estilos
titulo.innerText = "DOM Interativo!";
titulo.style.color = "darkblue";

// Eventos
btnAdicionar.addEventListener("click", () => {
  const texto = entrada.value;

  if (texto.trim() === "") {
    alert("Digite algo antes de adicionar.");
    return;
  }

  // Criar elemento novo
  const paragrafo = document.createElement("p");
  paragrafo.textContent = texto;

  // Adiciona classe e eventos
  paragrafo.classList.add("item");
  paragrafo.addEventListener("click", () => {
    paragrafo.classList.toggle("destaque");
  });

  caixa.appendChild(paragrafo);
  entrada.value = "";
});

btnLimpar.addEventListener("click", () => {
  // Remove todos os filhos da caixa
  caixa.innerHTML = "";
});

// Evento em tempo real
entrada.addEventListener("input", () => {
  titulo.innerText = `Digitando: ${entrada.value}`;
});

//| Recurso                         | Exemplo                             |
//| ------------------------------- | ----------------------------------- |
//| `getElementById`                | Seleção direta por ID               |
//| `querySelector`                 | Seleção CSS-like (`#`, `.`, etc)    |
//| `innerText`, `textContent`      | Alterar conteúdo textual            |
//| `createElement` + `appendChild` | Criar novos elementos dinamicamente |
//| `classList.add`, `toggle`       | Manipular classes CSS               |
//| `addEventListener`              | Adicionar eventos (click, input)    |
//| `style.property`                | Alterar estilos diretamente         |
