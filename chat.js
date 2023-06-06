/**
 * Chatlab - Conceitos de array/object em Javascript.
 * 
 * Implemente as funções a partir daqui.
 */
//-----------------------------------
//1-----------------------------------
let listaMensagens = [];

//função para adicionar mensagen ao array
function adicionarMensagem(apelido, mensagem) {
  listaMensagens.push({
    "apelido" : apelido,
    "mensagem" : mensagem
  });
}

// função para formatar as mensagens em HTML
function formatarMensagens() {
  let html = '';
  for (let i = 0; i < listaMensagens.length; i++) {
    var mensagem = listaMensagens[i];
    html += '<div class="chat-message">';
    html += '<span class="chat-message-apelido">' + mensagem.apelido + '</span>';
    html += '<span class="chat-message-item">' + mensagem.mensagem + '</span>';
    html += '</div>';
  }
  return html;
}

//funçao para atualizar o conteudo da div com as mensagens formatadas
function atualizarHTML() {
  var chatmessagesdiv = document.getElementById("chat-messages");
  chatmessagesdiv.innerHTML = formatarMensagens();
}

//função para lidar com o clique no botão
function commitMessageClickHandler() {
  let mensagem_Input = document.getElementById("message-input");
  
  if (mensagem_Input.value.trim().length == 0) {
    mensagem_Input.focus()
    return mensagem_Input;
  }
  adicionarMensagem("stackx " , mensagem_Input.value)
  atualizarHTML()
  document.getElementById("message-input").value = ``
   
}



// Exemplo: function minhaFuncao() { ... }
// Array para armazenar as mensagens



// --------------------------------
// Não remover estas linhas
// --------------------------------
module.exports =
{
  listaMensagens,
  adicionarMensagem,
  formatarMensagens,
  atualizarHTML,
  commitMessageClickHandler
};
// --------------------------------