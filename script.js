// Abre o modal e o overlay
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  const overlay = document.querySelector(".overlay");

  // Fechar todos os modais antes de abrir o novo
  const modals = document.getElementsByClassName("modal");
  for (let i = 0; i < modals.length; i++) {
    modals[i].style.display = "none"; // Oculta todos os modais
  }

  // Exibir o modal e o overlay apenas se o modal existir
  if (modal) {
    modal.style.display = "block";
    overlay.style.display = "block";
  }
}

// Fecha o modal e o overlay
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  const overlay = document.querySelector(".overlay");

  // Ocultar o modal e o overlay se o modal existir
  if (modal) {
    modal.style.display = "none";
    overlay.style.display = "none";
  }
}

// Função para abrir o próximo modal
function proximoODS(current) {
  closeModal("modal" + current); // Fecha o modal atual
  if (current < 17) {
    openModal("modal" + (current + 1)); // Abre o próximo modal
  } else {
    alert("Você chegou ao último ODS!"); // Mensagem se chegar ao último ODS
  }
}

// Modifique o span de fechamento no HTML
document.querySelectorAll(".close").forEach((span) => {
  span.addEventListener("click", function (event) {
    event.stopPropagation(); // Impede a propagação do evento
    closeModal(this.closest(".modal").id); // Fecha o modal correspondente
  });
});
