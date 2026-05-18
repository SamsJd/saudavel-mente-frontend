// assets/js/script.js

// 1. Função para simular o Login
// Como o botão no index.html já é um link, esta função pode ser usada para validações futuras
function realizarLogin() {
  const email = document.getElementById('email').value;
  if (email === "") {
    alert("Por favor, insira seu e-mail ou CPF.");
    return false;
  }
  // Simula o redirecionamento
  window.location.href = "pages/dashboard.html";
}

// 2. Função de Confirmação de Consulta (Dashboard)
// Atende à necessidade de engajar o cliente e promover responsabilidade [cite: 27, 64]
function confirmarPresenca() {
  const confirmacao = confirm("Deseja confirmar sua presença para a consulta de Cardiologia?");
  
  if (confirmacao) {
    alert("Presença confirmada com sucesso! 🎉\nVocê ganhou +10 pontos de fidelidade Care Plus.");
    // Aqui você poderia atualizar o saldo de pontos no HTML dinamicamente
  }
}

// 3. Função para Novo Agendamento (agendamento.html)
// Resolve a falha de 'negócio' ao processar Médico e Clínica
function confirmarAgendamento() {
  const especialidade = document.querySelector('select').value;
  
  // Simula a lógica de gamificação: pontos por agendar em horários de baixo risco [cite: 33, 265]
  alert(`Agendamento realizado com sucesso! 📅\n\nEspecialidade: ${especialidade}\nRecompensa: +50 pontos ganhos!\n\nSeu Avatar da Saúde evoluiu!`);
  
  // Redireciona de volta para o dashboard após o agendamento
  window.location.href = "dashboard.html";
}

// 4. Simulação de "Mini-game" de Hidratação (gamificacao.html)
// Demonstra o pilar de Gamificação Inovadora [cite: 243, 244]
function completarDesafioAgua() {
  alert("Parabéns! Você registrou 8 copos de água hoje. 💧\nStreak de Saúde mantido! (+40 pontos)");
}

// 5. Lógica para exibir alertas contextuais (Ex: Risco de No-show)
// Atende à sugestão de usar dados para sugerir ações preventivas [cite: 35, 44]
window.onload = function() {
  const path = window.location.pathname;
  
  // Se estiver na página de agendamento, podemos simular um alerta de trânsito
  if (path.includes("agendamento.html")) {
    console.log("Sistema Saudável Mente: Analisando trânsito para Vila Olímpia...");
  }
};

// assets/js/script.js

function calcularPercurso() {
  // Simulação de integração com Maps/Waze
  alert("Analisando trânsito... 🚦\n\nO tempo estimado de percurso é de 40 minutos. \nSugerimos sair às 13:10 para chegar com antecedência e ganhar seus pontos!");
}