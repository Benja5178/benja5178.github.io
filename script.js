document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-options li');

    let currentIndex = 0;

    function updateMenu(index) {
        menuItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    // Manejar navegación con teclas de flecha
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
            currentIndex = (currentIndex + 1) % menuItems.length;
        } else if (e.key === 'ArrowUp') {
            currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
        } else if (e.key === 'Enter') {
            alert(`Has seleccionado: ${menuItems[currentIndex].innerText}`);
        }
        updateMenu(currentIndex);
    });

    // Iniciar menú activo
    updateMenu(currentIndex);
});
