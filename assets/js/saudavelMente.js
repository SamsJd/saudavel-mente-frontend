function realizarLogin() {
  const email = document.getElementById('email')?.value;
  if (!email) {
    alert("Por favor, insira seu e-mail ou CPF.");
    return false;
  }
  window.location.href = "pages/dashboard.html";
}

function confirmarPresenca() {
  if (confirm("Deseja confirmar sua presença para a consulta de Cardiologia?")) {
    alert("Presença confirmada com sucesso! 🎉\nVocê ganhou +10 pontos de fidelidade Care Plus.");
  }
}

function confirmarAgendamento() {
  const especialidade = document.querySelector('select')?.value || "Não informada";
  alert(`Agendamento realizado com sucesso! 📅\n\nEspecialidade: ${especialidade}\nRecompensa: +50 pontos ganhos!\n\nSeu Avatar da Saúde evoluiu!`);
  window.location.href = "dashboard.html";
}

function completarDesafioAgua() {
  alert("Parabéns! Você registrou 8 copos de água hoje. 💧\nStreak de Saúde mantido! (+40 pontos)");
}

function calcularPercurso() {
  alert("Analisando trânsito... 🚦\n\nO tempo estimado de percurso é de 40 minutos. \nSugerimos sair às 13:10 para chegar com antecedência e ganhar seus pontos!");
}

document.addEventListener("DOMContentLoaded", () => {
  const toastEl = document.getElementById('toastLogin');
  if (toastEl) {
    new bootstrap.Toast(toastEl, { delay: 4000 }).show();
  }

  if (window.location.pathname.includes("agendamento.html")) {
    console.log("Sistema Saudável Mente: Analisando trânsito para Vila Olímpia...");
  }
});