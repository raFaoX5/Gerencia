document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("btn-saudacao");
  const mensagem = document.getElementById("mensagem");

  if (botao) {
    botao.addEventListener("click", () => {
      mensagem.textContent = "Obrigado por visitar meu portfólio!";
    });
  }

  console.log("Site carregado com sucesso.");
});

