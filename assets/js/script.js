// Seleciona todos os elementos 'item__functionality'
const functionalitiesContainers = document.querySelectorAll(".item__functionality");

functionalitiesContainers.forEach((container) => {
  const functionalities = container.querySelectorAll(".functionality");
  const arrowLeft = container.querySelector(".arrow-left");
  const arrowRight = container.querySelector(".arrow-right");
  let currentIndex = 0;

  // Função para atualizar o item ativo
  function updateActiveItem(index) {
    functionalities.forEach((item, i) => {
      item.classList.toggle("active", i === index);
    });
  }

  // Inicializa o primeiro item como ativo
  updateActiveItem(currentIndex);

  // Evento para ir ao item anterior
  arrowLeft.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + functionalities.length) % functionalities.length;
    updateActiveItem(currentIndex);
  });

  // Evento para ir ao próximo item
  arrowRight.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % functionalities.length;
    updateActiveItem(currentIndex);
  });
});

// Copia o texto do span ao clicar no ícone
document.getElementById("copy-icon").addEventListener("click", () => {
  // Seleciona o texto do span
  const textToCopy = document.querySelector(".mail__text").textContent;

  // Copia o texto para a área de transferência
  navigator.clipboard.writeText(textToCopy).then(() => {
    // Exibe uma mensagem de sucesso (opcional)
    console.log("Texto copiado!");
  }).catch((err) => {
    console.error("Erro ao copiar texto: ", err);
  });
});