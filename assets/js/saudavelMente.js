function mostrarToast(mensagem, tipo = "success") {

  const toastElement = document.getElementById("liveToast");
  const toastMessage = document.getElementById("toastMessage");

  if (!toastElement || !toastMessage) return;

  toastMessage.textContent = mensagem;

  toastElement.classList.remove(
    "bg-success",
    "bg-danger",
    "bg-primary"
  );

  toastElement.classList.add(`bg-${tipo}`);

  const toast = new bootstrap.Toast(toastElement);

  toast.show();
}

function realizarLogin() {

  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (!email || !senha) {

    mostrarToast("⚠️ Preencha email e senha.", "danger");

    return;
  }

  if (!email.includes("@")) {

    mostrarToast("📧 Digite um email válido.", "danger");

    return;
  }

  localStorage.setItem(
    "toastMensagem",
    "🎉 Login realizado com sucesso! Bem-vindo de volta");

    localStorage.setItem(
    "toastTipo",
    "success"
  );

  window.location.href = "./pages/dashboard.html";
}

function confirmarAgendamento() {

  localStorage.setItem(
    "toastMensagem",
    "📅 Agendamento realizado! Você ganhou +50 pontos");

  localStorage.setItem(
    "toastTipo",
    "success"
  );

  window.location.href = "dashboard.html";
}

function sairSistema() {

  localStorage.setItem(
    "toastMensagem",
    "👋 Você saiu da conta."
  );

  localStorage.setItem(
    "toastTipo",
    "primary"
  );

  window.location.href = "../index.html";
}

document.addEventListener("DOMContentLoaded", function () {

  const mensagem = localStorage.getItem("toastMensagem");
  const tipo = localStorage.getItem("toastTipo");

  if (mensagem) {

    mostrarToast(mensagem, tipo);

    localStorage.removeItem("toastMensagem");
    localStorage.removeItem("toastTipo");
  }
});