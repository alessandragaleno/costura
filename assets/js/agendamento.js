document.getElementById('formAgenda').addEventListener('submit', function(event) {
  event.preventDefault();  // Previne o envio do formulário padrão

  // Captura os dados do formulário
  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;
  const dataChegada = document.getElementById('dataChegada').value;
  const dataEntrega = document.getElementById('dataEntrega').value;
  const descricao = document.getElementById('descricao').value;

  // Criação da mensagem para enviar no WhatsApp
  const mensagem = `*Agendamento de Atendimento*\n\nNome: ${nome}\nTelefone: ${telefone}\nDia da Chegada: ${dataChegada}\nDia de Entrega: ${dataEntrega}\nDescrição: ${descricao}`;

  // URL do WhatsApp com o número do destinatário (substitua com o seu número)
  const numeroWhatsApp = '55xxxxxxxxxxx';  // Número do WhatsApp com DDD
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

  // Envia o usuário para o WhatsApp
  window.open(urlWhatsApp, '_blank');
});

// Preenche a data atual no formato YYYY-MM-DD
let dataAtual = new Date();
let ano = dataAtual.getFullYear();
let mes = ("0" + (dataAtual.getMonth() + 1)).slice(-2);  // Adiciona zero à esquerda, se necessário
let dia = ("0" + dataAtual.getDate()).slice(-2);           // Adiciona zero à esquerda, se necessário
let dataFormatada = `${ano}-${mes}-${dia}`;

// Preenche o campo de input com a data formatada
document.getElementById('data').value = dataFormatada;

// Função para alternar a visibilidade do menu
function toggleMenu() {
const menu = document.getElementById('menu');
menu.classList.toggle('active');  // Alterna a classe 'active' para mostrar ou esconder o menu
}

// Função para animação de fade no título
window.onload = function() {
const title = document.querySelector("h1");
title.style.opacity = 0;  // Começa invisível
setTimeout(function() {
  title.style.transition = "opacity 2s";  // Define a duração da animação
  title.style.opacity = 1;  // Torna o título visível após 2 segundos
}, 100);  // Atraso antes de começar a animação

// Exibe a notificação depois de 2 segundos
setTimeout(function() {
  const notification = document.getElementById("notification");
  notification.style.display = "block"; // Mostra a notificação
}, 2000);

// Esconde a notificação depois de 5 segundos
setTimeout(function() {
  const notification = document.getElementById("notification");
  notification.style.display = "none"; // Esconde a notificação
}, 7000);
};

// Enviar o formulário de agendamento
document.getElementById("butao").addEventListener("click", function() {
var nome = document.getElementById("nome").value;
var telefone = document.getElementById("telefone").value;
var servicos = [];
if (document.getElementById("ajuste").checked) servicos.push("ajuste");
if (document.getElementById("conserto").checked) servicos.push("conserto");
if (document.getElementById("criacao").checked) servicos.push("criação");
var qtd = document.getElementById("qtd").value;
var data = document.getElementById("data").value;

var mensagem = `Olá, gostaria de agendar um serviço com as seguintes informações:%0A` +
               `Nome: ${nome}%0A` +
               `Telefone: ${telefone}%0A` +
               `Serviços: ${servicos.join(", ")}%0A` +
               `Quantidade de peças: ${qtd}%0A` +
               `Data máxima de entrega: ${data}%0A`;

var encodedMensagem = encodeURIComponent(mensagem);
var url = `https://wa.me/5586995251010?text=${encodedMensagem}`;

// Abrir o WhatsApp com a mensagem
window.location.href = url;
});
