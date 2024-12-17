document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-options li');
    const menuSound = document.getElementById('menu-sound');

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
            menuSound.play();
        }
        updateMenu(currentIndex);
    });

    // Manejar clic en las opciones del menú
    menuItems.forEach((item) => {
        item.addEventListener('click', () => {
            menuSound.play(); // Reproducir sonido
            alert(`Has seleccionado: ${item.innerText}`);
        });
    });

    // Iniciar menú activo
    updateMenu(currentIndex);
});
