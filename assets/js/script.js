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

// Alternar tema
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement; // Seleciona o <html>

// Função para alternar o tema
themeToggle.addEventListener('click', () => {
  // Verifica o tema atual
  const currentTheme = htmlElement.getAttribute('data-theme');

  // Alterna entre claro e escuro
  if (currentTheme === 'dark') {
    htmlElement.setAttribute('data-theme', 'light');
    themeToggle.innerHTML = '<i class="bi bi-sun"></i>'; // Ícone de Sol para tema claro
  } else {
    htmlElement.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="bi bi-moon"></i>'; // Ícone de Lua para tema escuro
  }
});
