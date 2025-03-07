// Função para alternar a visibilidade do menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');  // Alterna a classe 'active' para mostrar ou esconder o menu
}

// Função para animação de fade no título
window.onload = function() {
    // Animação do título
    const title = document.getElementById("welcomeTitle");
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

// Função para animação de fade no título
window.onload = function() {
    // Animação do título
    const title = document.querySelector("h1");
    title.style.opacity = 0;  // Começa invisível
    setTimeout(function() {
        title.style.transition = "opacity 2s";  // Define a duração da animação
        title.style.opacity = 1;  // Torna o título visível após 2 segundos
    }, 100);  // Atraso antes de começar a animação
}
