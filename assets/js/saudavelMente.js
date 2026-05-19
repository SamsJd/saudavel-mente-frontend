function mostrarToast(mensagem) {

  const toastElement = document.getElementById("liveToast");
  const toastMessage = document.getElementById("toastMessage");

  if (!toastElement || !toastMessage) {
    return;
  }

  toastMessage.innerText = mensagem;

  const toast = new bootstrap.Toast(toastElement);

  toast.show();
}

function realizarLogin() {

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (!email || !senha) {
    alert("Preencha email e senha.");
    return;
  }

  localStorage.setItem(
    "toastMensagem",
    "🎉 Login realizado com sucesso! Bem-vindo de volta."
  );

  window.location.href = "./pages/dashboard.html";
}

function confirmarAgendamento() {

  localStorage.setItem(
    "toastMensagem",
    "📅 Agendamento realizado! Você ganhou +50 pontos."
  );

  window.location.href = "dashboard.html";
}

function sairSistema() {

  localStorage.setItem(
    "toastMensagem",
    "👋 Você saiu da conta."
  );

  window.location.href = "../index.html";
}

document.addEventListener("DOMContentLoaded", function () {

  const mensagem = localStorage.getItem("toastMensagem");

  if (mensagem) {

    mostrarToast(mensagem);

    localStorage.removeItem("toastMensagem");
  }
});