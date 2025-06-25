const logElement = document.getElementById("log");
const getId = () => Number(document.getElementById("userId").value || 1);

// Limpa e escreve no log
function escreverLog(mensagem) {
  logElement.innerText += mensagem + "\n";
}

// CALLBACK
function buscarComCallback(id, callback) {
  setTimeout(() => {
    const usuario = { id, nome: "Arya Stark" };
    callback(usuario);
  }, 1000);
}

function usarCallback() {
  escreverLog("🔄 Buscando usuário com callback...");
  buscarComCallback(getId(), (usuario) => {
    escreverLog(`✅ Usuário recebido: ${usuario.nome} (ID: ${usuario.id})`);
  });
}

// PROMISE
function buscarComPromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) resolve({ id, nome: "Jon Snow" });
      else reject(new Error("ID inválido"));
    }, 1000);
  });
}

function usarPromise() {
  escreverLog("🔄 Buscando usuário com Promise...");
  buscarComPromise(getId())
    .then((usuario) => {
      escreverLog(`✅ Promise: ${usuario.nome} (ID: ${usuario.id})`);
    })
    .catch((erro) => {
      escreverLog(`❌ Erro: ${erro.message}`);
    })
    .finally(() => {
      escreverLog("ℹ️ Promise finalizada.");
    });
}

// ASYNC/AWAIT
async function usarAsyncAwait() {
  escreverLog("🔄 Buscando com async/await...");
  try {
    const usuario = await buscarComPromise(getId());
    escreverLog(`✅ Async/Await: ${usuario.nome} (ID: ${usuario.id})`);
  } catch (erro) {
    escreverLog(`❌ Erro async: ${erro.message}`);
  } finally {
    escreverLog("ℹ️ Async/Await finalizado.");
  }
}
