document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-options li');
    const menuSound = document.getElementById('menu-sound'); // Sonido al seleccionar
    const moveSound = document.getElementById('move-sound'); // Sonido al moverse

    let currentIndex = 0;

    // Función para actualizar el menú visualmente
    function updateMenu(index) {
        menuItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    // Manejar navegación con teclas de flecha
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
            currentIndex = (currentIndex + 1) % menuItems.length;
            moveSound.currentTime = 0; // Reiniciar el sonido
            moveSound.play();
        } else if (e.key === 'ArrowUp') {
            currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
            moveSound.currentTime = 0; // Reiniciar el sonido
            moveSound.play();
        } else if (e.key === 'Enter') {
            menuSound.currentTime = 0; // Reiniciar el sonido
            menuSound.play();
            alert(`Has seleccionado: ${menuItems[currentIndex].innerText}`);
        }
        updateMenu(currentIndex);
    });

    // Manejar clic en las opciones del menú
    menuItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            menuSound.currentTime = 0;
            menuSound.play();
            alert(`Has seleccionado: ${item.innerText}`);
            currentIndex = index; // Actualizar el índice
            updateMenu(currentIndex);
        });
    });

    // Iniciar menú activo
    updateMenu(currentIndex);
});
